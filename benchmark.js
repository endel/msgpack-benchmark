"use strict";

var Benchmark = require('benchmark')
  , fs = require('fs')

  , msgpack5 = require('msgpack5')()

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
    'msgpack5': {
      encode: msgpack5.encode,
      decode: msgpack5.decode
    },
    'notepack': {
      encode: require('notepack').encode,
      decode: require('notepack').decode
    },
    'notepack.io': {
      encode: require('notepack.io').encode,
      decode: require('notepack.io').decode
    },
    'what-the-pack': {
      encode: require('what-the-pack').encode,
      decode: require('what-the-pack').decode
    },
    'JSON': {
      encode: JSON.stringify,
      decode: JSON.parse
    },
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

  console.log("")
  console.log("**" + sampleFiles[i] + ":**")
  console.log("")

  for (let name in implementations) {
    implementations[name].toDecode = implementations[name].encode(data)
    validate(name, data, implementations[name].toDecode)
    encodeSuite.add('(encode) ' + name, function() { implementations[name].encode(data) })
    decodeSuite.add('(decode) ' + name, function() { implementations[name].decode(implementations[name].toDecode) })
  }
  encodeSuite.on('cycle', function(event) { console.log(String(event.target)); })

  console.log("```")
  encodeSuite.run()
  console.log("```")

  console.log("")

  decodeSuite.on('cycle', function(event) { console.log(String(event.target)); })

  console.log("```")
  decodeSuite.run()
  console.log("```")

}
