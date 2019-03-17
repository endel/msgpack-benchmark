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

**sample-datatypes.json:**

```
(encode) msgpack x 26,478 ops/sec ±4.51% (70 runs sampled)
(encode) msgpack-javascript x 82,793 ops/sec ±3.06% (78 runs sampled)
(encode) msgpack-js-v5 x 2,978 ops/sec ±66.06% (74 runs sampled)
(encode) msgpack-lite x 38,610 ops/sec ±5.17% (74 runs sampled)
(encode) msgpack5 x 10,988 ops/sec ±4.48% (67 runs sampled)
(encode) notepack x 73,908 ops/sec ±4.21% (82 runs sampled)
(encode) notepack.io x 29,824 ops/sec ±31.37% (34 runs sampled)
(encode) notepack.io (browser) x 1,730 ops/sec ±31.09% (24 runs sampled)
(encode) what-the-pack x 8,821 ops/sec ±23.78% (32 runs sampled)
(encode) what-the-pack (browser) x 53,331 ops/sec ±10.90% (60 runs sampled)
(encode) cbor (node) x 2,313 ops/sec ±26.50% (39 runs sampled)
(encode) cbor (browser) x 10,874 ops/sec ±15.24% (61 runs sampled)
(encode) JSON x 87,570 ops/sec ±13.60% (59 runs sampled)
```

```
(decode) msgpack x 24,027 ops/sec ±12.18% (58 runs sampled)
(decode) msgpack-javascript x 32,030 ops/sec ±8.40% (72 runs sampled)
(decode) msgpack-js-v5 x 40,365 ops/sec ±6.45% (74 runs sampled)
(decode) msgpack-lite x 24,061 ops/sec ±13.18% (65 runs sampled)
(decode) msgpack5 x 16,149 ops/sec ±22.90% (78 runs sampled)
(decode) notepack x 52,856 ops/sec ±6.05% (80 runs sampled)
(decode) notepack.io x 54,484 ops/sec ±2.91% (84 runs sampled)
(decode) notepack.io (browser) x 20,127 ops/sec ±2.65% (85 runs sampled)
(decode) what-the-pack x 53,705 ops/sec ±4.80% (78 runs sampled)
(decode) what-the-pack (browser) x 52,484 ops/sec ±6.29% (78 runs sampled)
(decode) cbor (node) x 5,132 ops/sec ±27.81% (55 runs sampled)
(decode) cbor (browser) x 14,335 ops/sec ±4.36% (81 runs sampled)
(decode) JSON x 61,737 ops/sec ±1.94% (85 runs sampled)
```

**sample-small.json:**

```
(encode) msgpack x 71,465 ops/sec ±3.70% (72 runs sampled)
(encode) msgpack-javascript x 1,246,449 ops/sec ±3.98% (85 runs sampled)
(encode) msgpack-js-v5 x 129,291 ops/sec ±7.21% (69 runs sampled)
(encode) msgpack-lite x 97,097 ops/sec ±89.82% (67 runs sampled)
(encode) msgpack5 x 33,702 ops/sec ±28.12% (46 runs sampled)
(encode) notepack x 510,337 ops/sec ±2.92% (81 runs sampled)
(encode) notepack.io x 873,969 ops/sec ±3.91% (84 runs sampled)
(encode) notepack.io (browser) x 201,658 ops/sec ±12.31% (59 runs sampled)
(encode) what-the-pack x 424,542 ops/sec ±11.78% (66 runs sampled)
(encode) what-the-pack (browser) x 545,802 ops/sec ±6.06% (68 runs sampled)
(encode) cbor (node) x 12,047 ops/sec ±40.03% (39 runs sampled)
(encode) cbor (browser) x 126,956 ops/sec ±5.45% (72 runs sampled)
(encode) JSON x 735,995 ops/sec ±3.35% (75 runs sampled)
```

```
(decode) msgpack x 228,218 ops/sec ±5.16% (73 runs sampled)
(decode) msgpack-javascript x 450,144 ops/sec ±3.58% (76 runs sampled)
(decode) msgpack-js-v5 x 477,871 ops/sec ±2.27% (79 runs sampled)
(decode) msgpack-lite x 297,834 ops/sec ±4.30% (77 runs sampled)
(decode) msgpack5 x 49,690 ops/sec ±43.41% (40 runs sampled)
(decode) notepack x 532,946 ops/sec ±9.38% (68 runs sampled)
(decode) notepack.io x 763,670 ops/sec ±1.30% (87 runs sampled)
(decode) notepack.io (browser) x 286,114 ops/sec ±4.99% (76 runs sampled)
(decode) what-the-pack x 719,832 ops/sec ±3.95% (79 runs sampled)
(decode) what-the-pack (browser) x 669,415 ops/sec ±5.73% (75 runs sampled)
(decode) cbor (node) x 16,988 ops/sec ±39.79% (39 runs sampled)
(decode) cbor (browser) x 63,145 ops/sec ±36.05% (77 runs sampled)
(decode) JSON x 523,947 ops/sec ±6.76% (70 runs sampled)
```

**sample-medium.json:**

```
(encode) msgpack x 36,046 ops/sec ±4.54% (63 runs sampled)
(encode) msgpack-javascript x 111,416 ops/sec ±117.78% (27 runs sampled)
(encode) msgpack-js-v5 x 45,471 ops/sec ±6.49% (76 runs sampled)
(encode) msgpack-lite x 98,251 ops/sec ±4.81% (65 runs sampled)
(encode) msgpack5 x 12,771 ops/sec ±35.44% (31 runs sampled)
(encode) notepack x 157,706 ops/sec ±39.76% (57 runs sampled)
(encode) notepack.io x 258,999 ops/sec ±5.13% (67 runs sampled)
(encode) notepack.io (browser) x 80,662 ops/sec ±40.59% (69 runs sampled)
(encode) what-the-pack x 150,353 ops/sec ±95.44% (87 runs sampled)
(encode) what-the-pack (browser) x 258,605 ops/sec ±3.84% (78 runs sampled)
(encode) cbor (node) x 4,012 ops/sec ±47.59% (30 runs sampled)
(encode) cbor (browser) x 23,954 ops/sec ±43.31% (72 runs sampled)
(encode) JSON x 265,379 ops/sec ±53.11% (67 runs sampled)
```

```
(decode) msgpack x 128,048 ops/sec ±6.74% (77 runs sampled)
(decode) msgpack-javascript x 84,550 ops/sec ±72.07% (51 runs sampled)
(decode) msgpack-js-v5 x 110,126 ops/sec ±6.74% (73 runs sampled)
(decode) msgpack-lite x 85,681 ops/sec ±4.56% (79 runs sampled)
(decode) msgpack5 x 23,520 ops/sec ±68.92% (38 runs sampled)
(decode) notepack x 51,270 ops/sec ±18.47% (59 runs sampled)
(decode) notepack.io x 105,626 ops/sec ±12.16% (56 runs sampled)
(decode) notepack.io (browser) x 46,016 ops/sec ±12.61% (57 runs sampled)
(decode) what-the-pack x 73,518 ops/sec ±17.56% (36 runs sampled)
(decode) what-the-pack (browser) x 107,988 ops/sec ±16.12% (53 runs sampled)
(decode) cbor (node) x 4,274 ops/sec ±55.20% (19 runs sampled)
(decode) cbor (browser) x 17,887 ops/sec ±5.57% (70 runs sampled)
(decode) JSON x 258,267 ops/sec ±5.02% (75 runs sampled)
```

**sample-large.json:**

```
(encode) msgpack x 4,512 ops/sec ±2.42% (79 runs sampled)
(encode) msgpack-javascript x 737 ops/sec ±4.75% (77 runs sampled)
(encode) msgpack-js-v5 x 1,230 ops/sec ±2.35% (81 runs sampled)
(encode) msgpack-lite x 6,626 ops/sec ±2.53% (80 runs sampled)
(encode) msgpack5 x 220 ops/sec ±65.18% (24 runs sampled)
(encode) notepack x 3,269 ops/sec ±4.77% (46 runs sampled)
(encode) notepack.io x 2,800 ops/sec ±8.20% (66 runs sampled)
(encode) notepack.io (browser) x 1,902 ops/sec ±4.62% (78 runs sampled)
(encode) what-the-pack x 10,376 ops/sec ±5.57% (75 runs sampled)
(encode) what-the-pack (browser) x 10,444 ops/sec ±4.15% (76 runs sampled)
(encode) cbor (node) x 82.23 ops/sec ±52.53% (14 runs sampled)
(encode) cbor (browser) x 705 ops/sec ±3.55% (77 runs sampled)
(encode) JSON x 5,164 ops/sec ±1.24% (46 runs sampled)
```

```
(decode) msgpack x 4,581 ops/sec ±1.44% (58 runs sampled)
(decode) msgpack-javascript x 963 ops/sec ±1.43% (61 runs sampled)
(decode) msgpack-js-v5 x 2,139 ops/sec ±5.81% (74 runs sampled)
(decode) msgpack-lite x 1,276 ops/sec ±1.38% (63 runs sampled)
(decode) msgpack5 x 620 ops/sec ±20.91% (62 runs sampled)
(decode) notepack x 2,705 ops/sec ±23.55% (67 runs sampled)
(decode) notepack.io x 8,729 ops/sec ±4.09% (76 runs sampled)
(decode) notepack.io (browser) x 2,114 ops/sec ±9.02% (70 runs sampled)
(decode) what-the-pack x 8,795 ops/sec ±9.30% (72 runs sampled)
(decode) what-the-pack (browser) x 6,296 ops/sec ±67.19% (52 runs sampled)
(decode) cbor (node) x 1,307 ops/sec ±39.68% (67 runs sampled)
(decode) cbor (browser) x 493 ops/sec ±33.49% (72 runs sampled)
(decode) JSON x 8,646 ops/sec ±1.65% (79 runs sampled)
```

## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
