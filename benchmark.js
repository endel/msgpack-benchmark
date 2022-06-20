"use strict";

var Benchmark = require('benchmark')
  , fs = require('fs')

  , msgpack5 = require('msgpack5')()

  // msgpack implementations
  , implementations = {
    '@msgpack/msgpack': {
      encode: require('@msgpack/msgpack').encode,
      decode: require('@msgpack/msgpack').decode
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
    'notepack.io (browser)': {
      encode: require('notepack.io/browser/encode'),
      decode: require('notepack.io/browser/decode')
    },
    'msgpackr': {
      encode: require('msgpackr').pack,
      decode: require('msgpackr').unpack
    },
    'what-the-pack': {
      encode: require('what-the-pack').encode,
      decode: require('what-the-pack').decode
    },
    'what-the-pack (browser)': {
      encode: require('what-the-pack/browser').encode,
      decode: require('what-the-pack/browser').decode
    },
    // 'cbor (node)': {
    //   encode: require('cbor').encode,
    //   decode: require('cbor').decode
    // },
    // 'cbor (browser)': {
    //   encode: require('cbor-js').encode,
    //   decode: require('cbor-js').decode
    // },
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

function formatNumber(number) {
  number = String(number).split('.');
  return number[0].replace(/(?=(?:\d{3})+$)(?!\b)/g, ',') + (number[1] ? '.' + number[1] : '');
}

const results = {};

// first pass: run benchmarks
for (var i=0; i<sampleFiles.length; i++) {
  const sampleFile = sampleFiles[i];
  let data = JSON.parse(fs.readFileSync(sampleFile, "utf-8").toString())
    , encodeSuite = new Benchmark.Suite()
    , decodeSuite = new Benchmark.Suite()

  console.log("")
  console.log("**" + sampleFile + ":**")
  console.log("")

  results[sampleFile] = { encode: [], decode: [] };

  for (let name in implementations) {
    implementations[name].toDecode = implementations[name].encode(data)
    validate(name, data, implementations[name].toDecode)
    encodeSuite.add(name, function() { implementations[name].encode(data) })
    decodeSuite.add(name, function() { implementations[name].decode(implementations[name].toDecode) })
  }

  encodeSuite.on('cycle', function(event) {
    const hz = event.target.hz;
    const opsBySec = hz.toFixed(hz < 100 ? 2 : 0);
    results[sampleFile].encode.push({ name: event.target.name, opsBySec: opsBySec });
    console.log(String(event.target));
  })
  decodeSuite.on('cycle', function(event) {
    const hz = event.target.hz;
    const opsBySec = hz.toFixed(hz < 100 ? 2 : 0);
    results[sampleFile].decode.push({ name: event.target.name, opsBySec: opsBySec });
    console.log(String(event.target));
  })

  console.log("```")
  encodeSuite.run();
  console.log("```")

  console.log("")

  console.log("```")
  decodeSuite.run();
  console.log("```")
}

console.log("\nLet's print the results...\n");

// second pass: sort results and print tables
for (var i=0; i<sampleFiles.length; i++) {
  const sampleFile = sampleFiles[i];

  results[sampleFile].encode.sort((a, b) => b.opsBySec - a.opsBySec);
  results[sampleFile].decode.sort((a, b) => b.opsBySec - a.opsBySec);

  console.log("")
  console.log("### " + sampleFile);
  console.log("")

  console.log(" - Encoding winner: `" + results[sampleFile].encode[0].name + "`");
  console.log(" - Decoding winner: `" + results[sampleFile].decode[0].name + "`");


  console.log("**encoding**\n");
  console.log("| Implementation | ops/sec |");
  console.log("| ------------- | ------- |");
  results[sampleFile].encode.forEach(entry => {
    console.log("| `" + entry.name + "` | " + formatNumber(entry.opsBySec) + " |");
  });

  console.log("\n**decoding**\n");
  console.log("| Implementation | ops/sec |");
  console.log("| ------------- | ------- |");
  results[sampleFile].decode.forEach(entry => {
    console.log("| `" + entry.name + "` | " + formatNumber(entry.opsBySec) + " |");
  });

}
