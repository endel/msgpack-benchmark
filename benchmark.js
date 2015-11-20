var Benchmark = require('benchmark')
  , fs = require('fs')

  // msgpack implementations
  , msgpackNode = require('msgpack')
  , msgpackJavascript = require('./msgpack-javascript')
  , msgpackv5 = require('msgpack-js-v5')
  , msgpackLite = require('msgpack-lite')

  , sampleFiles = ["sample-small.json", "sample-medium.json", "sample-large.json"]

for (var i=0; i<sampleFiles.length; i++) {
  var data = fs.readFileSync(sampleFiles[i], "utf-8").toString()

    , toUnpack = msgpackJavascript.pack(data)
    , toUnpackBuffer = new Buffer(msgpackJavascript.pack(data))
    , toUnpackBufferV5 = msgpackv5.encode(data)
    , toParse = JSON.stringify(data)

  console.log("")
  console.log(sampleFiles[i])

  // Pack suite
  var packSuite = (new Benchmark.Suite())
    .add('(encode) msgpack-javascript', function() { msgpackJavascript.pack(data) })
    .add('(encode) msgpack-node', function() { msgpackNode.pack(data) })
    .add('(encode) msgpack-js-v5', function() { msgpackv5.encode(data) })
    .add('(encode) msgpack-lite', function() { msgpackLite.encode(data) })
    .add('(encode) JSON', function() { JSON.stringify(data) })
    .on('cycle', function(event) { console.log(String(event.target)); })
    // .on('complete', function() { console.log('Fastest is ' + this.filter('fastest').pluck('name')); })
    .run();

  console.log("")

  // Unpack suite
  var unpackSuite = (new Benchmark.Suite())
    .add('(decode) msgpack-javascript', function() { msgpackJavascript.pack(toUnpack) })
    .add('(decode) msgpack-node', function() { msgpackNode.pack(toUnpack) })
    .add('(decode) msgpack-js-v5', function() { msgpackv5.decode(toUnpackBufferV5) })
    .add('(decode) msgpack-lite', function() { msgpackLite.decode(toUnpack) })
    .add('(decode) JSON', function() { JSON.parse(toParse) })
    .on('cycle', function(event) { console.log(String(event.target)); })
    // .on('complete', function() { console.log('Fastest is ' + this.filter('fastest').pluck('name')); })
    .run()
}
