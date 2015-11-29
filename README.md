# msgpack benchmarks for JavaScript

This repository aims to benchmark each msgpack implementation for JavaScript.

There is three input files to encode/decode.

- [datatypes](sample-datatypes.json) - 1305 bytes
- [small](sample-small.json) - 68 bytes
- [medium](sample-medium.json) - 250 bytes
- [large](sample-large.json) - 9237 bytes

## Benchmarks

```
sample-datatypes.json:
(encode) msgpack x 26,342 ops/sec ±2.04% (85 runs sampled)
(encode) msgpack-javascript x 38,069 ops/sec ±2.10% (85 runs sampled)
(encode) msgpack-js-v5 x 10,078 ops/sec ±2.23% (79 runs sampled)
(encode) msgpack-lite x 47,654 ops/sec ±2.29% (76 runs sampled)
(encode) JSON x 117,245 ops/sec ±2.24% (83 runs sampled)

(decode) msgpack x 26,586 ops/sec ±2.00% (80 runs sampled)
(decode) msgpack-javascript x 22,098 ops/sec ±2.33% (82 runs sampled)
(decode) msgpack-js-v5 x 19,293 ops/sec ±2.34% (84 runs sampled)
(decode) msgpack-lite x 29,961 ops/sec ±2.43% (84 runs sampled)
(decode) JSON x 74,616 ops/sec ±3.06% (80 runs sampled)
```

```
sample-small.json:
(encode) msgpack x 150,926 ops/sec ±2.78% (80 runs sampled)
(encode) msgpack-javascript x 493,379 ops/sec ±4.30% (78 runs sampled)
(encode) msgpack-js-v5 x 72,179 ops/sec ±7.77% (76 runs sampled)
(encode) msgpack-lite x 212,355 ops/sec ±5.03% (69 runs sampled)
(encode) JSON x 718,284 ops/sec ±1.66% (85 runs sampled)

(decode) msgpack x 216,853 ops/sec ±1.85% (84 runs sampled)
(decode) msgpack-javascript x 311,626 ops/sec ±1.76% (85 runs sampled)
(decode) msgpack-js-v5 x 200,418 ops/sec ±2.30% (79 runs sampled)
(decode) msgpack-lite x 364,748 ops/sec ±1.95% (85 runs sampled)
(decode) JSON x 745,807 ops/sec ±1.73% (84 runs sampled)
```

```
sample-medium.json:
(encode) msgpack x 83,400 ops/sec ±2.32% (81 runs sampled)
(encode) msgpack-javascript x 237,101 ops/sec ±1.84% (83 runs sampled)
(encode) msgpack-js-v5 x 26,079 ops/sec ±2.69% (81 runs sampled)
(encode) msgpack-lite x 115,029 ops/sec ±3.17% (79 runs sampled)
(encode) JSON x 442,284 ops/sec ±2.74% (85 runs sampled)

(decode) msgpack x 105,937 ops/sec ±2.03% (81 runs sampled)
(decode) msgpack-javascript x 82,900 ops/sec ±2.20% (81 runs sampled)
(decode) msgpack-js-v5 x 54,719 ops/sec ±2.11% (78 runs sampled)
(decode) msgpack-lite x 92,451 ops/sec ±2.16% (81 runs sampled)
(decode) JSON x 348,690 ops/sec ±2.28% (86 runs sampled)
```

```
sample-large.json:
(encode) msgpack x 5,358 ops/sec ±2.64% (78 runs sampled)
(encode) msgpack-javascript x 7,075 ops/sec ±2.05% (83 runs sampled)
(encode) msgpack-js-v5 x 1,330 ops/sec ±2.18% (76 runs sampled)
(encode) msgpack-lite x 7,697 ops/sec ±3.34% (79 runs sampled)
(encode) JSON x 23,592 ops/sec ±2.06% (83 runs sampled)

(decode) msgpack x 5,718 ops/sec ±5.91% (76 runs sampled)
(decode) msgpack-javascript x 2,979 ops/sec ±1.77% (77 runs sampled)
(decode) msgpack-js-v5 x 2,732 ops/sec ±2.03% (84 runs sampled)
(decode) msgpack-lite x 5,139 ops/sec ±2.07% (80 runs sampled)
(decode) JSON x 13,142 ops/sec ±1.79% (83 runs sampled)
```

## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
