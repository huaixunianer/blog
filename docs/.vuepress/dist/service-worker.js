/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "69df8ae0ed8ac8b9c04888daac9d7650"
  },
  {
    "url": "about/index.html",
    "revision": "af28b0269e8a3590636da4a7d0221367"
  },
  {
    "url": "assets/css/0.styles.21661197.css",
    "revision": "12b9f7dea6f7bcc7233c95c2280ea99f"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c160e9a8.js",
    "revision": "f42d62aa4e929ea48f59d7453496a1f3"
  },
  {
    "url": "assets/js/10.1c40da61.js",
    "revision": "2671ecfdb588465437f1eb3db161a553"
  },
  {
    "url": "assets/js/11.0b98041d.js",
    "revision": "9abd0aab3c85d9345a0640d32a916f49"
  },
  {
    "url": "assets/js/12.50396c2f.js",
    "revision": "fc8093539fec4e57af899b24395e7d97"
  },
  {
    "url": "assets/js/13.4b2c1763.js",
    "revision": "38b0cdf945f79c742cedc3c6a5e686d3"
  },
  {
    "url": "assets/js/14.44706d3b.js",
    "revision": "ee3d9129ad99b69536593be35384db4b"
  },
  {
    "url": "assets/js/15.c00cbbec.js",
    "revision": "1dda84b5b59e3e0175e6dfdfe76aa056"
  },
  {
    "url": "assets/js/16.2a589994.js",
    "revision": "d4bf60aec7275016b5df58439172d6be"
  },
  {
    "url": "assets/js/17.a7f303af.js",
    "revision": "6b73ccd0bc524d144a3aab55ffe3b750"
  },
  {
    "url": "assets/js/18.cfb428d0.js",
    "revision": "551b449b8173f5e4384e650ff8d6b6ff"
  },
  {
    "url": "assets/js/19.4d620a28.js",
    "revision": "675e9c8e5929cd157c68abfc7bb5640a"
  },
  {
    "url": "assets/js/20.5aa6d293.js",
    "revision": "ce25f3db80772ca22c9b604658f219a7"
  },
  {
    "url": "assets/js/21.a7fb73cb.js",
    "revision": "1393f0ed4d48cd13a52595c361065fb3"
  },
  {
    "url": "assets/js/22.ebd6b5af.js",
    "revision": "656a6d2f96f18fa72aab894d251b0b27"
  },
  {
    "url": "assets/js/23.0bcc58d9.js",
    "revision": "d0f6f3ab6f1fad01101d799f4e1f0f60"
  },
  {
    "url": "assets/js/24.db4f0abf.js",
    "revision": "ffd54ea883efb14920bc0edc071d8fbc"
  },
  {
    "url": "assets/js/25.055fd8db.js",
    "revision": "3b119c7d6c10fa85b31b8192fe7c79c9"
  },
  {
    "url": "assets/js/26.a68f7e94.js",
    "revision": "f250d0ee7c6a67bbf57c5ece94b53384"
  },
  {
    "url": "assets/js/27.5f8ace8d.js",
    "revision": "b923b3a4225c6d089b6f32aaa2802956"
  },
  {
    "url": "assets/js/28.b80bb454.js",
    "revision": "32aae95768b627c57a3d6421483cf97a"
  },
  {
    "url": "assets/js/29.e5efaf28.js",
    "revision": "720c953178d6547a41559d473eca4eda"
  },
  {
    "url": "assets/js/3.4377fe4c.js",
    "revision": "f53308c5850e411d1a769ad7f40e7a6c"
  },
  {
    "url": "assets/js/30.855e533d.js",
    "revision": "42e4cfb9b1b615b9ecd3c31b49cdb0f6"
  },
  {
    "url": "assets/js/31.d13f3200.js",
    "revision": "374b93f969a51eaea1792132f41243f3"
  },
  {
    "url": "assets/js/32.aaa13e3d.js",
    "revision": "8796df87a10c60e7480dacbee01bacea"
  },
  {
    "url": "assets/js/33.168ae05b.js",
    "revision": "e278d4bedd0b97eb3ec6c9629e9e11b9"
  },
  {
    "url": "assets/js/34.ecdd999a.js",
    "revision": "ca371a687988f9b683f5baf432515335"
  },
  {
    "url": "assets/js/35.b104c483.js",
    "revision": "1f0c8ce110ea75a43f2a1153c336bc53"
  },
  {
    "url": "assets/js/36.3d6cea4a.js",
    "revision": "307bbb02ca6a6accdf84ea36be48472b"
  },
  {
    "url": "assets/js/37.4e210439.js",
    "revision": "b724290ae6ad3e5134feddea8a8a49c0"
  },
  {
    "url": "assets/js/4.c4e5d9a9.js",
    "revision": "54e5b8191e6070236b2fce7a0f46123c"
  },
  {
    "url": "assets/js/5.ec268fae.js",
    "revision": "18b0a97e14a52ecd5c4c6db30a8c0708"
  },
  {
    "url": "assets/js/6.9e97a624.js",
    "revision": "942006bc21c75e9995476e1f2c33f35d"
  },
  {
    "url": "assets/js/7.dc5bb097.js",
    "revision": "2457afde5d06b7019fd2f433837bf6a6"
  },
  {
    "url": "assets/js/8.b0f3eb4d.js",
    "revision": "3d9c46cf8f79b14f36f51c23f3f4b932"
  },
  {
    "url": "assets/js/9.776a7064.js",
    "revision": "cee4b3c0c542effffda8a3fbe6c51610"
  },
  {
    "url": "assets/js/app.9ad76fd5.js",
    "revision": "0dc1453cbc65b1bf4c090323871364e9"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "387ce66aa900acfa07e24b3612f0118a"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "6b1dad42a257bc1fa8117faf75a670b5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ba7ab48da86901b73ad4cbbb8c1a317a"
  },
  {
    "url": "categories/专业课/index.html",
    "revision": "84ec52273941c2328bddc2f11eb786bc"
  },
  {
    "url": "categories/index.html",
    "revision": "8499864a7aab6c189b884f1c163e1f4c"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/moon.png",
    "revision": "4b2bc184828d4ec6a7d985a9a8872c05"
  },
  {
    "url": "icons/Moon.svg",
    "revision": "05166da7f87e1e45bfc4b41448a24e32"
  },
  {
    "url": "icons/moon16.png",
    "revision": "f2e7731202eb9f11c9d8f0c38a4dfb6e"
  },
  {
    "url": "icons/moon48.png",
    "revision": "71a6c1026c4ec451b8b7fd89e5c189e1"
  },
  {
    "url": "index.html",
    "revision": "8c9309971227225bd22625f8d23fbb2b"
  },
  {
    "url": "moonBg.jpg",
    "revision": "33eaaf6768d8b268baa5a682722a5be9"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "fac6bd60e75c619c03fa8ea880b02136"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "0415446039cec7c94a25454a0f54ab88"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "fe2c82f16e0fe49efba511672d8b65ef"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "4fba6d801b216e6c6a330d517253b76f"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "718f3d34b16282e2c78024ab0fb558e3"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "93784d20282c4ba1b219e939f0f998da"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "2fbdec0a3158f7816d3d5e997d68edf1"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "b9599280e60fa94ef099299cc0534c5f"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "742ff45521d96f7fa41e3cb6fd5421c0"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "74945a95a455532868f0927b169e8288"
  },
  {
    "url": "note/index.html",
    "revision": "0507c7405f7bcbb038de66d5d24ed595"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "4333f01803755911da8d76a22948af06"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "e54213b7f5eb9087a2bf70062b03d20e"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "0a6a8c082405e339daa61420a0b03848"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "0aa8faab1c84944524cc887bcc94ec88"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "f1d97133defa81d83b0d700757d629a4"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "f70a631f5b783ec491c9ab7e922b3ed0"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "150bed521095426d7d796defeb42528c"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "0f4fd799ac1b156d368ced5c096bb238"
  },
  {
    "url": "photo.jpg",
    "revision": "c2d5c0db634c332b24c1735dcbf7891a"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "d0d33d1f330ae974f6f33f370511af10"
  },
  {
    "url": "tag/数据库系统原理/index.html",
    "revision": "fcaf90a816660d8f16cb88b30c9b3317"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "39c45c1ab59727faa14739e8d5babae1"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "317cd76a1ab3899a4eccbcfe233f25e3"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "ec5674c8f3597e020492ce42e5d1147e"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "e90123416382858a88e8001a9879db26"
  },
  {
    "url": "tag/index.html",
    "revision": "2ae9089be7de26a744f2b0fd6347e8e9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "b16626957227adeae3fd823610f7e6ac"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "6474566ebc79ace40cd42f9b2a8bff56"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5f69f7f96e59a12f1118ff80a7f40dd6"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc3c0a060dafcea90e1ca19d2aa263af"
  },
  {
    "url": "views/ji-suan-ji/2022/shu-ju-ku-xi-tong.html",
    "revision": "69d062240c3dfd9bc79ca9bd07b3fdd7"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "8d1fcf1d00376e3dae0784b0bae38a2c"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "89d05de622b613a376809c1ea9acab58"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "76a5a4c764ec7f34b3444a5403b93004"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "b24d31008425429adeac97a6608599c5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
