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
(encode) msgpack x 36,137 ops/sec ±1.02% (96 runs sampled)
(encode) msgpack-javascript x 60,000 ops/sec ±0.98% (95 runs sampled)
(encode) msgpack-js-v5 x 21,824 ops/sec ±0.53% (98 runs sampled)
(encode) msgpack-lite x 56,664 ops/sec ±2.05% (93 runs sampled)
(encode) msgpack5 x 7,052 ops/sec ±5.04% (75 runs sampled)
(encode) notepack x 62,564 ops/sec ±0.76% (97 runs sampled)
(encode) notepack.io x 68,818 ops/sec ±1.09% (97 runs sampled)
(encode) what-the-pack x 86,155 ops/sec ±1.12% (95 runs sampled)
(encode) JSON x 158,738 ops/sec ±0.90% (95 runs sampled)
```

```
(decode) msgpack x 47,903 ops/sec ±0.74% (100 runs sampled)
(decode) msgpack-javascript x 35,288 ops/sec ±0.81% (99 runs sampled)
(decode) msgpack-js-v5 x 42,214 ops/sec ±1.37% (91 runs sampled)
(decode) msgpack-lite x 32,044 ops/sec ±1.23% (99 runs sampled)
(decode) msgpack5 x 17,649 ops/sec ±1.42% (91 runs sampled)
(decode) notepack x 52,600 ops/sec ±0.68% (99 runs sampled)
(decode) notepack.io x 52,481 ops/sec ±1.04% (94 runs sampled)
(decode) what-the-pack x 52,910 ops/sec ±0.76% (96 runs sampled)
(decode) JSON x 81,521 ops/sec ±0.95% (98 runs sampled)
```

**sample-small.json:**

```
(encode) msgpack x 213,783 ops/sec ±3.24% (91 runs sampled)
(encode) msgpack-javascript x 1,155,057 ops/sec ±0.83% (97 runs sampled)
(encode) msgpack-js-v5 x 157,175 ops/sec ±1.34% (95 runs sampled)
(encode) msgpack-lite x 248,210 ops/sec ±4.56% (74 runs sampled)
(encode) msgpack5 x 60,948 ops/sec ±2.63% (67 runs sampled)
(encode) notepack x 622,046 ops/sec ±0.89% (98 runs sampled)
(encode) notepack.io x 614,405 ops/sec ±0.99% (96 runs sampled)
(encode) what-the-pack x 708,745 ops/sec ±2.06% (97 runs sampled)
(encode) JSON x 1,021,835 ops/sec ±3.66% (97 runs sampled)
```

```
(decode) msgpack x 299,782 ops/sec ±0.82% (94 runs sampled)
(decode) msgpack-javascript x 547,010 ops/sec ±0.95% (99 runs sampled)
(decode) msgpack-js-v5 x 495,856 ops/sec ±1.05% (97 runs sampled)
(decode) msgpack-lite x 319,632 ops/sec ±0.83% (96 runs sampled)
(decode) msgpack5 x 118,704 ops/sec ±2.52% (86 runs sampled)
(decode) notepack x 673,675 ops/sec ±0.83% (99 runs sampled)
(decode) notepack.io x 686,725 ops/sec ±1.23% (94 runs sampled)
(decode) what-the-pack x 693,388 ops/sec ±0.77% (96 runs sampled)
(decode) JSON x 852,372 ops/sec ±0.76% (99 runs sampled)
```

**sample-medium.json:**

```
(encode) msgpack x 107,674 ops/sec ±1.04% (97 runs sampled)
(encode) msgpack-javascript x 336,931 ops/sec ±0.97% (95 runs sampled)
(encode) msgpack-js-v5 x 58,043 ops/sec ±0.70% (94 runs sampled)
(encode) msgpack-lite x 136,709 ops/sec ±3.13% (84 runs sampled)
(encode) msgpack5 x 38,069 ops/sec ±1.81% (73 runs sampled)
(encode) notepack x 167,706 ops/sec ±1.07% (97 runs sampled)
(encode) notepack.io x 202,016 ops/sec ±1.00% (99 runs sampled)
(encode) what-the-pack x 285,752 ops/sec ±0.53% (95 runs sampled)
(encode) JSON x 614,931 ops/sec ±0.98% (98 runs sampled)
```

```
(decode) msgpack x 157,733 ops/sec ±0.93% (98 runs sampled)
(decode) msgpack-javascript x 148,347 ops/sec ±0.85% (98 runs sampled)
(decode) msgpack-js-v5 x 123,625 ops/sec ±0.84% (97 runs sampled)
(decode) msgpack-lite x 85,386 ops/sec ±1.20% (100 runs sampled)
(decode) msgpack5 x 50,776 ops/sec ±2.72% (87 runs sampled)
(decode) notepack x 166,608 ops/sec ±1.00% (98 runs sampled)
(decode) notepack.io x 167,376 ops/sec ±0.82% (100 runs sampled)
(decode) what-the-pack x 166,595 ops/sec ±0.94% (97 runs sampled)
(decode) JSON x 422,145 ops/sec ±0.87% (97 runs sampled)
```

**sample-large.json:**

```
(encode) msgpack x 7,347 ops/sec ±0.94% (98 runs sampled)
(encode) msgpack-javascript x 7,879 ops/sec ±0.66% (97 runs sampled)
(encode) msgpack-js-v5 x 3,212 ops/sec ±0.71% (96 runs sampled)
(encode) msgpack-lite x 8,361 ops/sec ±2.17% (91 runs sampled)
(encode) msgpack5 x 2,501 ops/sec ±5.11% (74 runs sampled)
(encode) notepack x 8,716 ops/sec ±0.73% (99 runs sampled)
(encode) notepack.io x 8,889 ops/sec ±0.76% (98 runs sampled)
(encode) what-the-pack x 10,983 ops/sec ±1.01% (96 runs sampled)
(encode) JSON x 30,333 ops/sec ±0.96% (95 runs sampled)
```

```
(decode) msgpack x 9,936 ops/sec ±0.87% (99 runs sampled)
(decode) msgpack-javascript x 5,000 ops/sec ±1.01% (95 runs sampled)
(decode) msgpack-js-v5 x 6,511 ops/sec ±0.90% (98 runs sampled)
(decode) msgpack-lite x 4,494 ops/sec ±0.90% (99 runs sampled)
(decode) msgpack5 x 3,481 ops/sec ±1.03% (97 runs sampled)
(decode) notepack x 9,162 ops/sec ±0.75% (99 runs sampled)
(decode) notepack.io x 9,053 ops/sec ±0.69% (99 runs sampled)
(decode) what-the-pack x 9,102 ops/sec ±0.76% (97 runs sampled)
(decode) JSON x 13,780 ops/sec ±0.93% (95 runs sampled)
```

## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
