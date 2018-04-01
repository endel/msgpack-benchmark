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

## Benchmarks

**sample-datatypes.json:**

```
(encode) msgpack x 31,679 ops/sec ±2.30% (87 runs sampled)
(encode) msgpack-javascript x 76,229 ops/sec ±1.43% (92 runs sampled)
(encode) msgpack-js-v5 x 18,931 ops/sec ±1.78% (89 runs sampled)
(encode) msgpack-lite x 51,171 ops/sec ±1.68% (88 runs sampled)
(encode) msgpack5 x 7,101 ops/sec ±5.70% (68 runs sampled)
(encode) notepack x 61,799 ops/sec ±1.77% (90 runs sampled)
(encode) notepack.io x 62,923 ops/sec ±1.57% (89 runs sampled)
(encode) JSON x 144,031 ops/sec ±1.69% (88 runs sampled)
```

```
(decode) msgpack x 42,631 ops/sec ±1.74% (91 runs sampled)
(decode) msgpack-javascript x 31,360 ops/sec ±1.78% (90 runs sampled)
(decode) msgpack-js-v5 x 36,643 ops/sec ±1.83% (89 runs sampled)
(decode) msgpack-lite x 29,679 ops/sec ±1.45% (90 runs sampled)
(decode) msgpack5 x 15,890 ops/sec ±1.95% (88 runs sampled)
(decode) notepack x 46,356 ops/sec ±2.04% (90 runs sampled)
(decode) notepack.io x 46,797 ops/sec ±1.82% (91 runs sampled)
(decode) JSON x 76,760 ops/sec ±1.41% (92 runs sampled)
```

**sample-small.json:**

```
(encode) msgpack x 185,626 ops/sec ±3.45% (84 runs sampled)
(encode) msgpack-javascript x 1,264,032 ops/sec ±1.48% (89 runs sampled)
(encode) msgpack-js-v5 x 146,422 ops/sec ±1.41% (90 runs sampled)
(encode) msgpack-lite x 229,091 ops/sec ±3.43% (77 runs sampled)
(encode) msgpack5 x 42,217 ops/sec ±3.87% (67 runs sampled)
(encode) notepack x 717,337 ops/sec ±1.55% (89 runs sampled)
(encode) notepack.io x 735,478 ops/sec ±1.72% (88 runs sampled)
(encode) JSON x 957,782 ops/sec ±1.58% (89 runs sampled)
```

```
(decode) msgpack x 298,856 ops/sec ±1.78% (85 runs sampled)
(decode) msgpack-javascript x 517,181 ops/sec ±1.55% (89 runs sampled)
(decode) msgpack-js-v5 x 427,575 ops/sec ±1.93% (92 runs sampled)
(decode) msgpack-lite x 298,966 ops/sec ±1.73% (89 runs sampled)
(decode) msgpack5 x 94,500 ops/sec ±2.84% (80 runs sampled)
(decode) notepack x 633,236 ops/sec ±1.73% (88 runs sampled)
(decode) notepack.io x 615,991 ops/sec ±1.73% (91 runs sampled)
(decode) JSON x 763,951 ops/sec ±2.01% (86 runs sampled)
```

**sample-medium.json:**

```
(encode) msgpack x 93,360 ops/sec ±1.63% (87 runs sampled)
(encode) msgpack-javascript x 393,085 ops/sec ±2.33% (89 runs sampled)
(encode) msgpack-js-v5 x 51,569 ops/sec ±1.75% (92 runs sampled)
(encode) msgpack-lite x 124,507 ops/sec ±2.12% (82 runs sampled)
(encode) msgpack5 x 29,548 ops/sec ±3.82% (62 runs sampled)
(encode) notepack x 196,569 ops/sec ±1.75% (91 runs sampled)
(encode) notepack.io x 201,604 ops/sec ±1.62% (88 runs sampled)
(encode) JSON x 556,773 ops/sec ±2.02% (91 runs sampled)
```

```
(decode) msgpack x 141,954 ops/sec ±2.10% (86 runs sampled)
(decode) msgpack-javascript x 134,550 ops/sec ±1.90% (89 runs sampled)
(decode) msgpack-js-v5 x 110,269 ops/sec ±1.50% (89 runs sampled)
(decode) msgpack-lite x 76,993 ops/sec ±2.44% (86 runs sampled)
(decode) msgpack5 x 39,007 ops/sec ±4.17% (74 runs sampled)
(decode) notepack x 137,717 ops/sec ±1.90% (85 runs sampled)
(decode) notepack.io x 135,307 ops/sec ±2.30% (81 runs sampled)
(decode) JSON x 354,497 ops/sec ±3.27% (85 runs sampled)
```

**sample-large.json:**

```
(encode) msgpack x 6,312 ops/sec ±1.60% (88 runs sampled)
(encode) msgpack-javascript x 8,939 ops/sec ±1.39% (93 runs sampled)
(encode) msgpack-js-v5 x 2,800 ops/sec ±1.52% (90 runs sampled)
(encode) msgpack-lite x 7,558 ops/sec ±1.71% (88 runs sampled)
(encode) msgpack5 x 1,978 ops/sec ±3.77% (66 runs sampled)
(encode) notepack x 8,462 ops/sec ±5.63% (93 runs sampled)
(encode) notepack.io x 9,006 ops/sec ±1.62% (91 runs sampled)
(encode) JSON x 27,846 ops/sec ±1.64% (91 runs sampled)
```

```
(decode) msgpack x 8,621 ops/sec ±1.74% (90 runs sampled)
(decode) msgpack-javascript x 4,313 ops/sec ±1.99% (88 runs sampled)
(decode) msgpack-js-v5 x 5,584 ops/sec ±1.53% (90 runs sampled)
(decode) msgpack-lite x 3,924 ops/sec ±2.78% (85 runs sampled)
(decode) msgpack5 x 3,208 ops/sec ±1.80% (88 runs sampled)
(decode) notepack x 7,926 ops/sec ±1.76% (91 runs sampled)
(decode) notepack.io x 7,605 ops/sec ±1.78% (89 runs sampled)
(decode) JSON x 12,076 ops/sec ±1.75% (89 runs sampled)
```

## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
