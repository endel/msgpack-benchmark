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
(encode) msgpack x 33,815 ops/sec ±1.35% (85 runs sampled)
(encode) msgpack-javascript x 56,970 ops/sec ±1.15% (81 runs sampled)
(encode) msgpack-js-v5 x 19,806 ops/sec ±4.91% (83 runs sampled)
(encode) msgpack-lite x 54,287 ops/sec ±2.69% (82 runs sampled)
(encode) msgpack5 x 7,306 ops/sec ±3.65% (74 runs sampled)
(encode) notepack x 60,525 ops/sec ±0.74% (92 runs sampled)
(encode) notepack.io x 66,944 ops/sec ±0.96% (91 runs sampled)
(encode) notepack.io (browser) x 21,037 ops/sec ±0.85% (89 runs sampled)
(encode) what-the-pack x 83,786 ops/sec ±1.29% (92 runs sampled)
(encode) what-the-pack (browser) x 84,443 ops/sec ±1.22% (89 runs sampled)
(encode) JSON x 157,358 ops/sec ±0.96% (87 runs sampled)
```

```
(decode) msgpack x 47,141 ops/sec ±1.20% (89 runs sampled)
(decode) msgpack-javascript x 34,551 ops/sec ±0.98% (90 runs sampled)
(decode) msgpack-js-v5 x 42,301 ops/sec ±1.60% (87 runs sampled)
(decode) msgpack-lite x 33,193 ops/sec ±1.08% (89 runs sampled)
(decode) msgpack5 x 17,483 ops/sec ±2.07% (85 runs sampled)
(decode) notepack x 51,040 ops/sec ±1.30% (90 runs sampled)
(decode) notepack.io x 53,141 ops/sec ±0.77% (87 runs sampled)
(decode) notepack.io (browser) x 18,295 ops/sec ±1.15% (87 runs sampled)
(decode) what-the-pack x 52,460 ops/sec ±0.82% (90 runs sampled)
(decode) what-the-pack (browser) x 52,286 ops/sec ±0.94% (89 runs sampled)
(decode) JSON x 82,450 ops/sec ±1.91% (90 runs sampled)
```

**sample-small.json:**

```
(encode) msgpack x 216,997 ops/sec ±2.38% (87 runs sampled)
(encode) msgpack-javascript x 1,097,536 ops/sec ±1.25% (89 runs sampled)
(encode) msgpack-js-v5 x 160,075 ops/sec ±1.29% (85 runs sampled)
(encode) msgpack-lite x 224,021 ops/sec ±7.48% (66 runs sampled)
(encode) msgpack5 x 53,388 ops/sec ±4.12% (70 runs sampled)
(encode) notepack x 500,881 ops/sec ±6.20% (79 runs sampled)
(encode) notepack.io x 504,074 ops/sec ±5.14% (79 runs sampled)
(encode) notepack.io (browser) x 236,221 ops/sec ±4.42% (75 runs sampled)
(encode) what-the-pack x 645,819 ops/sec ±2.71% (82 runs sampled)
(encode) what-the-pack (browser) x 642,243 ops/sec ±3.03% (82 runs sampled)
(encode) JSON x 944,469 ops/sec ±2.71% (84 runs sampled)
```

```
(decode) msgpack x 279,907 ops/sec ±2.75% (85 runs sampled)
(decode) msgpack-javascript x 419,532 ops/sec ±6.40% (68 runs sampled)
(decode) msgpack-js-v5 x 472,422 ops/sec ±2.83% (84 runs sampled)
(decode) msgpack-lite x 284,901 ops/sec ±3.92% (78 runs sampled)
(decode) msgpack5 x 113,081 ops/sec ±3.60% (78 runs sampled)
(decode) notepack x 672,428 ops/sec ±1.33% (90 runs sampled)
(decode) notepack.io x 634,355 ops/sec ±2.47% (84 runs sampled)
(decode) notepack.io (browser) x 250,547 ops/sec ±3.83% (77 runs sampled)
(decode) what-the-pack x 649,283 ops/sec ±2.26% (80 runs sampled)
(decode) what-the-pack (browser) x 645,680 ops/sec ±2.43% (80 runs sampled)
(decode) JSON x 759,013 ops/sec ±3.17% (81 runs sampled)
```

**sample-medium.json:**

```
(encode) msgpack x 92,610 ops/sec ±3.27% (77 runs sampled)
(encode) msgpack-javascript x 325,205 ops/sec ±2.15% (88 runs sampled)
(encode) msgpack-js-v5 x 50,741 ops/sec ±3.12% (84 runs sampled)
(encode) msgpack-lite x 110,897 ops/sec ±8.36% (68 runs sampled)
(encode) msgpack5 x 31,182 ops/sec ±6.63% (66 runs sampled)
(encode) notepack x 153,360 ops/sec ±2.25% (86 runs sampled)
(encode) notepack.io x 182,295 ops/sec ±2.00% (84 runs sampled)
(encode) notepack.io (browser) x 89,838 ops/sec ±8.01% (78 runs sampled)
(encode) what-the-pack x 213,880 ops/sec ±8.24% (75 runs sampled)
(encode) what-the-pack (browser) x 199,619 ops/sec ±8.03% (74 runs sampled)
(encode) JSON x 492,400 ops/sec ±4.89% (78 runs sampled)
```

```
(decode) msgpack x 137,794 ops/sec ±3.00% (83 runs sampled)
(decode) msgpack-javascript x 142,750 ops/sec ±1.79% (87 runs sampled)
(decode) msgpack-js-v5 x 103,457 ops/sec ±3.78% (79 runs sampled)
(decode) msgpack-lite x 79,554 ops/sec ±3.64% (83 runs sampled)
(decode) msgpack5 x 50,292 ops/sec ±2.62% (83 runs sampled)
(decode) notepack x 133,891 ops/sec ±4.88% (77 runs sampled)
(decode) notepack.io x 151,741 ops/sec ±2.47% (82 runs sampled)
(decode) notepack.io (browser) x 67,632 ops/sec ±4.93% (75 runs sampled)
(decode) what-the-pack x 145,433 ops/sec ±2.98% (86 runs sampled)
(decode) what-the-pack (browser) x 138,663 ops/sec ±4.27% (80 runs sampled)
(decode) JSON x 379,436 ops/sec ±2.24% (85 runs sampled)
```

**sample-large.json:**

```
(encode) msgpack x 6,778 ops/sec ±1.78% (88 runs sampled)
(encode) msgpack-javascript x 7,536 ops/sec ±2.56% (85 runs sampled)
(encode) msgpack-js-v5 x 2,851 ops/sec ±3.42% (80 runs sampled)
(encode) msgpack-lite x 7,250 ops/sec ±3.73% (75 runs sampled)
(encode) msgpack5 x 2,579 ops/sec ±4.38% (72 runs sampled)
(encode) notepack x 6,686 ops/sec ±5.91% (75 runs sampled)
(encode) notepack.io x 7,868 ops/sec ±3.18% (82 runs sampled)
(encode) notepack.io (browser) x 2,487 ops/sec ±4.39% (77 runs sampled)
(encode) what-the-pack x 9,747 ops/sec ±2.21% (81 runs sampled)
(encode) what-the-pack (browser) x 8,093 ops/sec ±9.52% (69 runs sampled)
(encode) JSON x 29,245 ops/sec ±2.80% (88 runs sampled)
```

```
(decode) msgpack x 8,291 ops/sec ±4.50% (78 runs sampled)
(decode) msgpack-javascript x 4,288 ops/sec ±3.62% (80 runs sampled)
(decode) msgpack-js-v5 x 5,381 ops/sec ±4.31% (77 runs sampled)
(decode) msgpack-lite x 4,268 ops/sec ±2.89% (85 runs sampled)
(decode) msgpack5 x 3,058 ops/sec ±3.94% (83 runs sampled)
(decode) notepack x 7,829 ops/sec ±3.70% (83 runs sampled)
(decode) notepack.io x 7,922 ops/sec ±2.09% (85 runs sampled)
(decode) notepack.io (browser) x 2,138 ops/sec ±3.44% (78 runs sampled)
(decode) what-the-pack x 7,698 ops/sec ±3.22% (81 runs sampled)
(decode) what-the-pack (browser) x 7,303 ops/sec ±3.86% (76 runs sampled)
(decode) JSON x 8,295 ops/sec ±13.97% (57 runs sampled)
```

## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
