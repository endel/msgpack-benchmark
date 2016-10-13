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

## Benchmarks

**sample-datatypes.json:**

```
(encode) msgpack x 20,544 ops/sec ±2.35% (87 runs sampled)
(encode) msgpack-javascript x 34,755 ops/sec ±1.77% (89 runs sampled)
(encode) msgpack-js-v5 x 5,239 ops/sec ±2.57% (87 runs sampled)
(encode) msgpack-lite x 43,949 ops/sec ±2.09% (86 runs sampled)
(encode) msgpack5 x 2,684 ops/sec ±6.19% (73 runs sampled)
(encode) notepack x 15,695 ops/sec ±1.81% (86 runs sampled)
(encode) JSON x 109,709 ops/sec ±2.15% (84 runs sampled)
```

```
(decode) msgpack x 21,305 ops/sec ±11.79% (67 runs sampled)
(decode) msgpack-javascript x 14,871 ops/sec ±6.03% (75 runs sampled)
(decode) msgpack-js-v5 x 16,210 ops/sec ±7.96% (81 runs sampled)
(decode) msgpack-lite x 22,447 ops/sec ±3.32% (88 runs sampled)
(decode) msgpack5 x 5,161 ops/sec ±4.62% (73 runs sampled)
(decode) notepack x 26,303 ops/sec ±4.48% (81 runs sampled)
(decode) JSON x 59,100 ops/sec ±1.92% (86 runs sampled)
```

**sample-small.json:**

```
(encode) msgpack x 103,540 ops/sec ±2.61% (87 runs sampled)
(encode) msgpack-javascript x 361,330 ops/sec ±3.29% (86 runs sampled)
(encode) msgpack-js-v5 x 40,701 ops/sec ±4.95% (84 runs sampled)
(encode) msgpack-lite x 136,678 ops/sec ±4.69% (73 runs sampled)
(encode) msgpack5 x 15,615 ops/sec ±4.56% (70 runs sampled)
(encode) notepack x 108,910 ops/sec ±5.88% (73 runs sampled)
(encode) JSON x 588,158 ops/sec ±4.00% (83 runs sampled)
```

```
(decode) msgpack x 165,569 ops/sec ±1.75% (89 runs sampled)
(decode) msgpack-javascript x 322,141 ops/sec ±2.17% (87 runs sampled)
(decode) msgpack-js-v5 x 177,955 ops/sec ±7.40% (72 runs sampled)
(decode) msgpack-lite x 108,522 ops/sec ±23.51% (44 runs sampled)
(decode) msgpack5 x 32,440 ops/sec ±5.69% (76 runs sampled)
(decode) notepack x 232,057 ops/sec ±17.46% (54 runs sampled)
(decode) JSON x 553,004 ops/sec ±5.62% (77 runs sampled)
```

**sample-medium.json:**

```
(encode) msgpack x 37,261 ops/sec ±12.06% (62 runs sampled)
(encode) msgpack-javascript x 160,540 ops/sec ±5.88% (77 runs sampled)
(encode) msgpack-js-v5 x 12,968 ops/sec ±1.87% (87 runs sampled)
(encode) msgpack-lite x 57,964 ops/sec ±5.16% (70 runs sampled)
(encode) msgpack5 x 9,162 ops/sec ±4.27% (74 runs sampled)
(encode) notepack x 45,717 ops/sec ±2.42% (87 runs sampled)
(encode) JSON x 412,854 ops/sec ±1.53% (89 runs sampled)
```

```
(decode) msgpack x 93,455 ops/sec ±2.04% (85 runs sampled)
(decode) msgpack-javascript x 82,544 ops/sec ±1.63% (89 runs sampled)
(decode) msgpack-js-v5 x 57,114 ops/sec ±3.94% (89 runs sampled)
(decode) msgpack-lite x 64,820 ops/sec ±2.44% (85 runs sampled)
(decode) msgpack5 x 20,396 ops/sec ±2.90% (87 runs sampled)
(decode) notepack x 98,098 ops/sec ±4.08% (84 runs sampled)
(decode) JSON x 322,837 ops/sec ±1.49% (89 runs sampled)
```

**sample-large.json:**

```
(encode) msgpack x 3,914 ops/sec ±3.13% (71 runs sampled)
(encode) msgpack-javascript x 6,300 ops/sec ±1.47% (88 runs sampled)
(encode) msgpack-js-v5 x 701 ops/sec ±2.93% (84 runs sampled)
(encode) msgpack-lite x 4,045 ops/sec ±3.79% (72 runs sampled)
(encode) msgpack5 x 484 ops/sec ±7.61% (70 runs sampled)
(encode) notepack x 2,392 ops/sec ±2.51% (80 runs sampled)
(encode) JSON x 22,414 ops/sec ±2.65% (85 runs sampled)
```

```
(decode) msgpack x 5,895 ops/sec ±1.65% (88 runs sampled)
(decode) msgpack-javascript x 2,914 ops/sec ±2.29% (87 runs sampled)
(decode) msgpack-js-v5 x 2,707 ops/sec ±3.16% (84 runs sampled)
(decode) msgpack-lite x 3,597 ops/sec ±1.94% (89 runs sampled)
(decode) msgpack5 x 1,552 ops/sec ±2.68% (86 runs sampled)
(decode) notepack x 5,641 ops/sec ±1.38% (90 runs sampled)
(decode) JSON x 10,237 ops/sec ±1.98% (84 runs sampled)
```
## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
