# msgpack benchmarks for JavaScript

[![Build Status](https://travis-ci.org/endel/msgpack-benchmark.svg?branch=master)](https://travis-ci.org/endel/msgpack-benchmark)

This repository aims to benchmark each msgpack implementation for JavaScript.

There is four input files to encode/decode.

- [datatypes](sample-datatypes.json) - 1305 bytes
- [small](sample-small.json) - 68 bytes
- [medium](sample-medium.json) - 250 bytes
- [large](sample-large.json) - 9237 bytes

MsgPack implementations:

- [msgpack](https://www.npmjs.com/package/msgpack)
- [msgpack-javascript](https://github.com/msgpack/msgpack-javascript)
- [msgpack-js-v5](https://www.npmjs.com/package/msgpack-js-v5)
- [msgpack-lite](https://www.npmjs.com/package/msgpack-lite)
- [msgpack5](https://www.npmjs.com/package/msgpack5)
- [notepack](https://www.npmjs.com/package/notepack)
- [notepack.io](https://www.npmjs.com/package/notepack.io)

Other serialization methods for comparison:

- [cbor](https://github.com/hildjj/node-cbor)
- [cbor-js](https://github.com/paroga/cbor-js)

## Benchmarks

Results are using Node v12.6.0 on Macbook Air (1.3 GHz Intel Core i5)

**sample-datatypes.json:**

```
(encode) @msgpack/msgpack x 73,250 ops/sec ±4.02% (84 runs sampled)
(encode) msgpack-js-v5 x 5,252 ops/sec ±64.69% (83 runs sampled)
(encode) msgpack-lite x 54,577 ops/sec ±1.25% (87 runs sampled)
(encode) msgpack5 x 20,250 ops/sec ±2.63% (86 runs sampled)
(encode) notepack x 88,114 ops/sec ±1.16% (86 runs sampled)
(encode) notepack.io x 98,604 ops/sec ±0.89% (88 runs sampled)
(encode) notepack.io (browser) x 78,205 ops/sec ±0.96% (89 runs sampled)
(encode) what-the-pack x 81,710 ops/sec ±1.22% (89 runs sampled)
(encode) what-the-pack (browser) x 88,860 ops/sec ±1.10% (90 runs sampled)
(encode) cbor (node) x 3,221 ops/sec ±8.20% (66 runs sampled)
(encode) cbor (browser) x 25,194 ops/sec ±31.59% (85 runs sampled)
(encode) JSON x 115,313 ops/sec ±2.95% (82 runs sampled)
```

```
(decode) @msgpack/msgpack x 100,391 ops/sec ±4.35% (79 runs sampled)
(decode) msgpack-js-v5 x 50,949 ops/sec ±2.55% (85 runs sampled)
(decode) msgpack-lite x 35,883 ops/sec ±3.05% (82 runs sampled)
(decode) msgpack5 x 22,285 ops/sec ±1.15% (88 runs sampled)
(decode) notepack x 79,268 ops/sec ±0.54% (91 runs sampled)
(decode) notepack.io x 78,732 ops/sec ±0.63% (90 runs sampled)
(decode) notepack.io (browser) x 47,999 ops/sec ±0.85% (88 runs sampled)
(decode) what-the-pack x 78,420 ops/sec ±0.87% (90 runs sampled)
(decode) what-the-pack (browser) x 79,134 ops/sec ±0.66% (90 runs sampled)
(decode) cbor (node) x 9,124 ops/sec ±1.87% (84 runs sampled)
(decode) cbor (browser) x 22,871 ops/sec ±1.55% (88 runs sampled)
(decode) JSON x 51,345 ops/sec ±0.67% (88 runs sampled)
```

**sample-small.json:**

```
(encode) @msgpack/msgpack x 352,441 ops/sec ±3.55% (70 runs sampled)
(encode) msgpack-js-v5 x 169,915 ops/sec ±0.80% (89 runs sampled)
(encode) msgpack-lite x 240,873 ops/sec ±4.15% (77 runs sampled)
(encode) msgpack5 x 105,880 ops/sec ±1.03% (82 runs sampled)
(encode) notepack x 741,710 ops/sec ±1.02% (78 runs sampled)
(encode) notepack.io x 764,812 ops/sec ±1.09% (88 runs sampled)
(encode) notepack.io (browser) x 467,300 ops/sec ±1.92% (83 runs sampled)
(encode) what-the-pack x 604,700 ops/sec ±1.08% (90 runs sampled)
(encode) what-the-pack (browser) x 652,032 ops/sec ±1.20% (86 runs sampled)
(encode) cbor (node) x 13,675 ops/sec ±21.24% (41 runs sampled)
(encode) cbor (browser) x 191,798 ops/sec ±2.12% (81 runs sampled)
(encode) JSON x 862,382 ops/sec ±1.36% (85 runs sampled)
```

```
(decode) @msgpack/msgpack x 544,406 ops/sec ±1.50% (86 runs sampled)
(decode) msgpack-js-v5 x 467,387 ops/sec ±1.87% (84 runs sampled)
(decode) msgpack-lite x 294,329 ops/sec ±1.51% (87 runs sampled)
(decode) msgpack5 x 151,611 ops/sec ±1.11% (87 runs sampled)
(decode) notepack x 723,601 ops/sec ±1.23% (84 runs sampled)
(decode) notepack.io x 706,255 ops/sec ±1.54% (85 runs sampled)
(decode) notepack.io (browser) x 558,507 ops/sec ±1.16% (89 runs sampled)
(decode) what-the-pack x 721,209 ops/sec ±4.55% (84 runs sampled)
(decode) what-the-pack (browser) x 741,658 ops/sec ±1.78% (84 runs sampled)
(decode) cbor (node) x 15,100 ops/sec ±18.13% (44 runs sampled)
(decode) cbor (browser) x 230,116 ops/sec ±2.84% (81 runs sampled)
(decode) JSON x 832,659 ops/sec ±1.92% (86 runs sampled)
```

**sample-medium.json:**

```
(encode) @msgpack/msgpack x 226,817 ops/sec ±4.56% (75 runs sampled)
(encode) msgpack-js-v5 x 55,856 ops/sec ±1.14% (79 runs sampled)
(encode) msgpack-lite x 128,716 ops/sec ±3.89% (84 runs sampled)
(encode) msgpack5 x 55,259 ops/sec ±1.50% (81 runs sampled)
(encode) notepack x 210,541 ops/sec ±1.96% (79 runs sampled)
(encode) notepack.io x 268,267 ops/sec ±1.50% (71 runs sampled)
(encode) notepack.io (browser) x 202,576 ops/sec ±5.18% (73 runs sampled)
(encode) what-the-pack x 220,986 ops/sec ±1.96% (85 runs sampled)
(encode) what-the-pack (browser) x 244,145 ops/sec ±1.75% (88 runs sampled)
(encode) cbor (node) x 4,578 ops/sec ±31.70% (31 runs sampled)
(encode) cbor (browser) x 67,524 ops/sec ±19.29% (66 runs sampled)
(encode) JSON x 431,845 ops/sec ±2.64% (81 runs sampled)
```

```
(decode) @msgpack/msgpack x 213,183 ops/sec ±2.41% (79 runs sampled)
(decode) msgpack-js-v5 x 132,800 ops/sec ±0.86% (79 runs sampled)
(decode) msgpack-lite x 79,803 ops/sec ±2.05% (80 runs sampled)
(decode) msgpack5 x 53,390 ops/sec ±2.31% (77 runs sampled)
(decode) notepack x 206,825 ops/sec ±2.77% (81 runs sampled)
(decode) notepack.io x 215,628 ops/sec ±2.36% (87 runs sampled)
(decode) notepack.io (browser) x 139,792 ops/sec ±4.76% (66 runs sampled)
(decode) what-the-pack x 192,191 ops/sec ±6.14% (77 runs sampled)
(decode) what-the-pack (browser) x 213,425 ops/sec ±2.60% (84 runs sampled)
(decode) cbor (node) x 10,379 ops/sec ±42.83% (48 runs sampled)
(decode) cbor (browser) x 8,610 ops/sec ±69.21% (72 runs sampled)
(decode) JSON x 235,999 ops/sec ±1.91% (74 runs sampled)
```

**sample-large.json:**

```
(encode) @msgpack/msgpack x 7,988 ops/sec ±2.79% (77 runs sampled)
(encode) msgpack-js-v5 x 756 ops/sec ±2.06% (45 runs sampled)
(encode) msgpack-lite x 5,487 ops/sec ±2.54% (82 runs sampled)
(encode) msgpack5 x 622 ops/sec ±3.46% (65 runs sampled)
(encode) notepack x 1,730 ops/sec ±1.57% (37 runs sampled)
(encode) notepack.io x 1,728 ops/sec ±1.57% (41 runs sampled)
(encode) notepack.io (browser) x 1,731 ops/sec ±1.54% (72 runs sampled)
(encode) what-the-pack x 8,144 ops/sec ±1.56% (74 runs sampled)
(encode) what-the-pack (browser) x 8,047 ops/sec ±3.52% (72 runs sampled)
(encode) cbor (node) x 101 ops/sec ±19.44% (33 runs sampled)
(encode) cbor (browser) x 285 ops/sec ±14.09% (42 runs sampled)
(encode) JSON x 2,162 ops/sec ±2.54% (20 runs sampled)
```

```
(decode) @msgpack/msgpack x 666 ops/sec ±2.52% (72 runs sampled)
(decode) msgpack-js-v5 x 1,288 ops/sec ±1.86% (71 runs sampled)
(decode) msgpack-lite x 684 ops/sec ±2.05% (71 runs sampled)
(decode) msgpack5 x 443 ops/sec ±2.21% (68 runs sampled)
(decode) notepack x 3,143 ops/sec ±1.24% (81 runs sampled)
(decode) notepack.io x 3,004 ops/sec ±1.26% (84 runs sampled)
(decode) notepack.io (browser) x 362 ops/sec ±1.78% (66 runs sampled)
(decode) what-the-pack x 3,159 ops/sec ±2.39% (74 runs sampled)
(decode) what-the-pack (browser) x 3,210 ops/sec ±1.22% (45 runs sampled)
(decode) cbor (node) x 284 ops/sec ±0.65% (71 runs sampled)
(decode) cbor (browser) x 411 ops/sec ±1.96% (31 runs sampled)
(decode) JSON x 3,013 ops/sec ±1.76% (49 runs sampled)
```

## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
