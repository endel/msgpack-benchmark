# msgpack benchmarks for JavaScript

[![Build Status](https://travis-ci.org/endel/msgpack-benchmark.svg?branch=master)](https://travis-ci.org/endel/msgpack-benchmark)

This repository aims to benchmark each msgpack implementation for JavaScript.

There is four input files to encode/decode.

- [datatypes](sample-datatypes.json) - 1305 bytes
- [small](sample-small.json) - 68 bytes
- [medium](sample-medium.json) - 250 bytes
- [large](sample-large.json) - 9237 bytes

MsgPack implementations:

- [json-joy](https://www.npmjs.com/package/json-joy)
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

 - Encoding winner: `json-joy`
 - Decoding winner: `json-joy`
<table>
<tr><th>Encoding</th><th>Decoding</th></tr>
<tr><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `json-joy` | 660,519 |
| `msgpackr` | 543,668 |
| `notepack.io` | 297,895 |
| `@msgpack/msgpack` | 276,703 |
| `notepack` | 260,247 |
| `what-the-pack (browser)` | 253,199 |
| `what-the-pack` | 249,037 |
| `JSON` | 216,015 |
| `notepack.io (browser)` | 203,143 |
| `msgpack-lite` | 153,727 |
| `msgpack5` | 46,241 |
| `msgpack-js-v5` | 33,647 |

</td><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `json-joy` | 345,355 |
| `JSON` | 303,160 |
| `@msgpack/msgpack` | 289,358 |
| `msgpackr` | 269,867 |
| `notepack.io` | 182,685 |
| `what-the-pack (browser)` | 182,600 |
| `what-the-pack` | 181,455 |
| `notepack` | 180,001 |
| `notepack.io (browser)` | 153,735 |
| `msgpack-js-v5` | 131,938 |
| `msgpack-lite` | 100,549 |
| `msgpack5` | 53,422 |

</td></tr> </table>

### sample-small.json

 - Encoding winner: `json-joy`
 - Decoding winner: `msgpackr`
<table>
<tr><th>Encoding</th><th>Decoding</th></tr>
<tr><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `json-joy` | 4,900,968 |
| `msgpackr` | 3,354,447 |
| `notepack.io` | 2,821,393 |
| `notepack` | 2,419,810 |
| `what-the-pack (browser)` | 1,956,804 |
| `JSON` | 1,761,681 |
| `what-the-pack` | 1,726,668 |
| `notepack.io (browser)` | 1,444,101 |
| `@msgpack/msgpack` | 1,344,524 |
| `msgpack-lite` | 765,941 |
| `msgpack-js-v5` | 625,410 |
| `msgpack5` | 288,228 |

</td><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `msgpackr` | 4,168,419 |
| `json-joy` | 2,685,832 |
| `notepack` | 2,269,496 |
| `JSON` | 2,190,008 |
| `what-the-pack (browser)` | 2,165,320 |
| `notepack.io` | 2,157,822 |
| `what-the-pack` | 2,149,319 |
| `@msgpack/msgpack` | 2,083,927 |
| `notepack.io (browser)` | 1,946,342 |
| `msgpack-js-v5` | 1,359,728 |
| `msgpack-lite` | 949,306 |
| `msgpack5` | 399,200 |

</td></tr> </table>

### sample-medium.json

 - Encoding winner: `json-joy`
 - Decoding winner: `json-joy`
<table>
<tr><th>Encoding</th><th>Decoding</th></tr>
<tr><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `json-joy` | 1,863,131 |
| `msgpackr` | 1,265,100 |
| `notepack.io` | 978,609 |
| `JSON` | 904,582 |
| `notepack.io (browser)` | 755,540 |
| `what-the-pack (browser)` | 754,026 |
| `@msgpack/msgpack` | 729,451 |
| `notepack` | 705,566 |
| `what-the-pack` | 644,219 |
| `msgpack-lite` | 365,645 |
| `msgpack-js-v5` | 182,467 |
| `msgpack5` | 154,998 |

</td><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `json-joy` | 1,288,165 |
| `JSON` | 1,146,031 |
| `msgpackr` | 1,140,870 |
| `@msgpack/msgpack` | 863,936 |
| `notepack.io` | 631,896 |
| `what-the-pack` | 627,725 |
| `notepack` | 624,421 |
| `what-the-pack (browser)` | 623,304 |
| `notepack.io (browser)` | 580,655 |
| `msgpack-js-v5` | 410,604 |
| `msgpack-lite` | 303,541 |
| `msgpack5` | 175,024 |

</td></tr> </table>

### sample-large.json

 - Encoding winner: `json-joy`
 - Decoding winner: `msgpackr`
<table>
<tr><th>Encoding</th><th>Decoding</th></tr>
<tr><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `json-joy` | 70,003 |
| `msgpackr` | 53,742 |
| `notepack.io` | 34,894 |
| `JSON` | 33,162 |
| `notepack` | 31,755 |
| `what-the-pack (browser)` | 30,386 |
| `@msgpack/msgpack` | 29,746 |
| `notepack.io (browser)` | 28,096 |
| `what-the-pack` | 27,906 |
| `msgpack-lite` | 22,590 |
| `msgpack5` | 8,695 |
| `msgpack-js-v5` | 8,081 |

</td><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `msgpackr` | 65,731 |
| `json-joy` | 54,277 |
| `JSON` | 47,965 |
| `@msgpack/msgpack` | 30,613 |
| `what-the-pack (browser)` | 29,995 |
| `what-the-pack` | 29,931 |
| `notepack` | 29,896 |
| `notepack.io` | 29,126 |
| `notepack.io (browser)` | 20,192 |
| `msgpack-js-v5` | 18,738 |
| `msgpack-lite` | 14,318 |
| `msgpack5` | 9,950 |

</td></tr> </table>

## Running the benchmarks:

```
npm install
npm start
```

## License

MIT
