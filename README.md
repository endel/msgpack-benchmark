# msgpack-benchmarks.js

This repository aims to benchmark each msgpack implementation for JavaScript.

There is three input files to encode/decode.

- [small](sample-small.json) - 68 bytes
- [medium](sample-medium.json) - 250 bytes
- [large](sample-large.json) - 9237 bytes

## Benchmarks

```
sample-small.json
(encode) msgpack-javascript x 1,114,230 ops/sec ±1.98% (87 runs sampled)
(encode) msgpack-node x 416,250 ops/sec ±12.49% (73 runs sampled)
(encode) msgpack-js-v5 x 408,559 ops/sec ±3.06% (85 runs sampled)
(encode) msgpack-lite x 422,053 ops/sec ±3.33% (72 runs sampled)
(encode) JSON x 1,666,567 ops/sec ±2.47% (84 runs sampled)
(decode) msgpack-javascript x 270,890 ops/sec ±20.55% (56 runs sampled)
(decode) msgpack-node x 73,104 ops/sec ±7.24% (77 runs sampled)
(decode) msgpack-js-v5 x 1,454,220 ops/sec ±1.56% (89 runs sampled)
(decode) msgpack-lite x 380,963 ops/sec ±7.35% (78 runs sampled)
(decode) JSON x 1,441,176 ops/sec ±5.32% (80 runs sampled)
```

```
sample-medium.json
(encode) msgpack-javascript x 333,223 ops/sec ±2.80% (83 runs sampled)
(encode) msgpack-node x 373,656 ops/sec ±7.24% (70 runs sampled)
(encode) msgpack-js-v5 x 231,094 ops/sec ±7.76% (70 runs sampled)
(encode) msgpack-lite x 241,129 ops/sec ±8.26% (66 runs sampled)
(encode) JSON x 636,787 ops/sec ±2.90% (87 runs sampled)
(decode) msgpack-javascript x 134,330 ops/sec ±1.95% (91 runs sampled)
(decode) msgpack-node x 21,948 ops/sec ±4.29% (86 runs sampled)
(decode) msgpack-js-v5 x 1,196,739 ops/sec ±3.60% (86 runs sampled)
(decode) msgpack-lite x 137,101 ops/sec ±2.35% (90 runs sampled)
(decode) JSON x 609,801 ops/sec ±1.73% (91 runs sampled)
```

```
sample-large.json
(encode) msgpack-javascript x 8,015 ops/sec ±2.68% (87 runs sampled)
(encode) msgpack-node x 15,157 ops/sec ±2.06% (91 runs sampled)
(encode) msgpack-js-v5 x 4,379 ops/sec ±24.02% (64 runs sampled)
(encode) msgpack-lite x 15,767 ops/sec ±9.52% (65 runs sampled)
(encode) JSON x 19,517 ops/sec ±4.64% (82 runs sampled)
(decode) msgpack-javascript x 3,897 ops/sec ±2.39% (88 runs sampled)
(decode) msgpack-node x 504 ops/sec ±11.59% (66 runs sampled)
(decode) msgpack-js-v5 x 22,941 ops/sec ±5.03% (74 runs sampled)
(decode) msgpack-lite x 3,299 ops/sec ±3.28% (87 runs sampled)
(decode) JSON x 15,511 ops/sec ±4.09% (82 runs sampled)
```

## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
