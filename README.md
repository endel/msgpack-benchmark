# msgpack benchmarks for JavaScript

[![Build Status](https://travis-ci.org/endel/msgpack-benchmark.svg?branch=master)](https://travis-ci.org/endel/msgpack-benchmark)

This repository aims to benchmark each msgpack implementation for JavaScript.

There is four input files to encode/decode.

- [datatypes](sample-datatypes.json) - 1305 bytes
- [small](sample-small.json) - 68 bytes
- [medium](sample-medium.json) - 250 bytes
- [large](sample-large.json) - 9237 bytes

MsgPack implementations:

- [msgpackr](https://www.npmjs.com/package/msgpackr)
- [@msgpack/msgpack](https://www.npmjs.com/package/@msgpack/msgpack)
- [msgpack](https://www.npmjs.com/package/msgpack)
- [msgpack-js-v5](https://www.npmjs.com/package/msgpack-js-v5)
- [msgpack-lite](https://www.npmjs.com/package/msgpack-lite)
- [msgpack5](https://www.npmjs.com/package/msgpack5)
- [notepack](https://www.npmjs.com/package/notepack)
- [notepack.io](https://www.npmjs.com/package/notepack.io)
- [what-the-pack](https://www.npmjs.com/package/what-the-pack)

## Benchmarks

Results are using Node v16.14.0 on MacBook Pro (M1, 2020).

### sample-datatypes.json

 - Encoding winner: `msgpackr`
 - Decoding winner: `JSON`

**encoding**

| Implementation | ops/sec |
| ------------- | ------- |
| `msgpackr` | 519,030 |
| `JSON` | 328,367 |
| `notepack.io` | 285,528 |
| `what-the-pack (browser)` | 284,308 |
| `@msgpack/msgpack` | 260,240 |
| `what-the-pack` | 254,762 |
| `notepack` | 238,226 |
| `notepack.io (browser)` | 199,181 |
| `msgpack-lite` | 155,759 |
| `msgpack5` | 73,907 |
| `msgpack-js-v5` | 37,626 |

**decoding**

| Implementation | ops/sec |
| ------------- | ------- |
| `JSON` | 489,645 |
| `msgpackr` | 274,537 |
| `@msgpack/msgpack` | 210,725 |
| `what-the-pack (browser)` | 159,898 |
| `what-the-pack` | 159,527 |
| `notepack.io (browser)` | 149,917 |
| `notepack.io` | 149,272 |
| `notepack` | 142,453 |
| `msgpack-js-v5` | 134,128 |
| `msgpack-lite` | 92,610 |
| `msgpack5` | 66,461 |

### sample-small.json

 - Encoding winner: `msgpackr`
 - Decoding winner: `msgpackr`

**encoding**

| Implementation | ops/sec |
| ------------- | ------- |
| `msgpackr` | 3,296,833 |
| `notepack.io` | 2,754,635 |
| `JSON` | 2,447,656 |
| `notepack` | 2,380,863 |
| `what-the-pack (browser)` | 2,356,787 |
| `what-the-pack` | 1,994,327 |
| `@msgpack/msgpack` | 1,454,569 |
| `notepack.io (browser)` | 1,453,012 |
| `msgpack-lite` | 628,253 |
| `msgpack-js-v5` | 617,212 |
| `msgpack5` | 425,951 |

**decoding**

| Implementation | ops/sec |
| ------------- | ------- |
| `msgpackr` | 4,037,031 |
| `JSON` | 2,498,714 |
| `notepack` | 2,390,280 |
| `@msgpack/msgpack` | 2,256,549 |
| `notepack.io (browser)` | 2,076,171 |
| `what-the-pack` | 1,809,675 |
| `what-the-pack (browser)` | 1,795,122 |
| `notepack.io` | 1,768,158 |
| `msgpack-js-v5` | 1,487,882 |
| `msgpack-lite` | 872,539 |
| `msgpack5` | 629,429 |

### sample-medium.json

 - Encoding winner: `JSON`

 - Decoding winner: `JSON`

**encoding**

| Implementation | ops/sec |
| ------------- | ------- |
| `JSON` | 1,452,513 |
| `msgpackr` | 1,319,836 |
| `notepack.io` | 910,529 |
| `what-the-pack (browser)` | 802,090 |
| `notepack.io (browser)` | 743,235 |
| `notepack` | 701,198 |
| `what-the-pack` | 680,024 |
| `@msgpack/msgpack` | 651,136 |
| `msgpack-lite` | 324,384 |
| `msgpack5` | 207,193 |
| `msgpack-js-v5` | 169,692 |

**decoding**

| Implementation | ops/sec |
| ------------- | ------- |
| `JSON` | 1,302,597 |
| `msgpackr` | 1,148,712 |
| `@msgpack/msgpack` | 908,896 |
| `notepack.io (browser)` | 622,931 |
| `what-the-pack (browser)` | 500,688 |
| `notepack.io` | 495,854 |
| `what-the-pack` | 490,752 |
| `notepack` | 482,038 |
| `msgpack-js-v5` | 417,884 |
| `msgpack-lite` | 268,590 |
| `msgpack5` | 236,800 |

### sample-large.json

 - Encoding winner: `JSON`
 - Decoding winner: `JSON`

**encoding**

| Implementation | ops/sec |
| ------------- | ------- |
| `JSON` | 68,796 |
| `msgpackr` | 51,768 |
| `notepack.io` | 32,315 |
| `what-the-pack (browser)` | 31,649 |
| `notepack` | 29,389 |
| `notepack.io (browser)` | 29,194 |
| `what-the-pack` | 28,273 |
| `@msgpack/msgpack` | 28,154 |
| `msgpack-lite` | 22,422 |
| `msgpack5` | 13,324 |
| `msgpack-js-v5` | 8,006 |

**decoding**

| Implementation | ops/sec |
| ------------- | ------- |
| `JSON` | 77,276 |
| `msgpackr` | 67,232 |
| `@msgpack/msgpack` | 26,583 |
| `notepack.io` | 25,326 |
| `what-the-pack` | 24,755 |
| `what-the-pack (browser)` | 24,589 |
| `notepack` | 23,734 |
| `msgpack-js-v5` | 21,752 |
| `notepack.io (browser)` | 19,927 |
| `msgpack-lite` | 12,912 |
| `msgpack5` | 12,315 |


## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
