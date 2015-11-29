"use strict";

var Benchmark = require('benchmark')
  , fs = require('fs')

  // msgpack implementations
  , implementations = {
    msgpack: {
      encode: require('msgpack').pack,
      decode: require('msgpack').unpack
    },
    'msgpack-javascript': {
      encode: require('./msgpack-javascript').pack,
      decode: require('./msgpack-javascript').unpack
    },
    'msgpack-js-v5': {
      encode: require('msgpack-js-v5').encode,
      decode: require('msgpack-js-v5').decode
    },
    'msgpack-lite': {
      encode: require('msgpack-lite').encode,
      decode: require('msgpack-lite').decode
    },
    'JSON': {
      encode: JSON.stringify,
      decode: JSON.parse
    }
  }

  , sampleFiles = ["sample-datatypes.json", "sample-small.json", "sample-medium.json", "sample-large.json"]


function validate(name, data, encoded) {
  if (JSON.stringify(data) !== JSON.stringify(implementations[name].decode(encoded))) {
    throw new Error("Bad implementation: " + name)
  }
}

for (var i=0; i<sampleFiles.length; i++) {
  let data = JSON.parse(fs.readFileSync(sampleFiles[i], "utf-8").toString())
    , encodeSuite = new Benchmark.Suite()
    , decodeSuite = new Benchmark.Suite()

  console.log("\n" + sampleFiles[i] + ":")

  for (let name in implementations) {
    implementations[name].toDecode = implementations[name].encode(data)
    validate(name, data, implementations[name].toDecode)
    encodeSuite.add('(encode) ' + name, function() { implementations[name].encode(data) })
    decodeSuite.add('(decode) ' + name, function() { implementations[name].decode(implementations[name].toDecode) })
  }
  encodeSuite.on('cycle', function(event) { console.log(String(event.target)); })
  encodeSuite.run()

  console.log("")

  decodeSuite.on('cycle', function(event) { console.log(String(event.target)); })
  decodeSuite.run()
}
