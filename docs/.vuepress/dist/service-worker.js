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
    "revision": "e08e156f833fceaaad820e73cf5835f1"
  },
  {
    "url": "about/index.html",
    "revision": "43d24cd5298001298b4ba2c6aa5b4cf1"
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
    "url": "assets/js/12.b4eb06c1.js",
    "revision": "6c4036e5c6cde3a5e093ea30b3aacdef"
  },
  {
    "url": "assets/js/13.4b2c1763.js",
    "revision": "38b0cdf945f79c742cedc3c6a5e686d3"
  },
  {
    "url": "assets/js/14.ae2abd77.js",
    "revision": "3de6603c0651679c63cba6cd3f69dd25"
  },
  {
    "url": "assets/js/15.927d2f02.js",
    "revision": "715c0b907b25c87c3ddfc8ef48be3d28"
  },
  {
    "url": "assets/js/16.698c0681.js",
    "revision": "5ed71edb495b19ca03a47b8c652eb6e2"
  },
  {
    "url": "assets/js/17.cfea5e35.js",
    "revision": "7ea5f149dccd76e1ab28dd02888c7581"
  },
  {
    "url": "assets/js/18.f02edc12.js",
    "revision": "ddb22cce3f9170fd86d93bc15b738a3c"
  },
  {
    "url": "assets/js/19.96d59e44.js",
    "revision": "7b0dfe409beddd796cb5ef5787162b23"
  },
  {
    "url": "assets/js/20.85e1d84b.js",
    "revision": "e2e6d5db11fdb84f73d6ce3c14e64801"
  },
  {
    "url": "assets/js/21.a7fb73cb.js",
    "revision": "1393f0ed4d48cd13a52595c361065fb3"
  },
  {
    "url": "assets/js/22.16946786.js",
    "revision": "300df333d8104ddcb3efc87c92370578"
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
    "url": "assets/js/25.402616e0.js",
    "revision": "b8dbef44ea43dcbc3ad1ad2b01365976"
  },
  {
    "url": "assets/js/26.4f72321b.js",
    "revision": "52cbed7f7a12bc4d388fe475538833c5"
  },
  {
    "url": "assets/js/27.0ec59c24.js",
    "revision": "9716d96b1b272be9b73fb1e0fe26824e"
  },
  {
    "url": "assets/js/28.b430669c.js",
    "revision": "c305b0caea95326addb278957a11d361"
  },
  {
    "url": "assets/js/29.8600644c.js",
    "revision": "c1c927bf7f188eabcf54a9c81b6dd87b"
  },
  {
    "url": "assets/js/3.4377fe4c.js",
    "revision": "f53308c5850e411d1a769ad7f40e7a6c"
  },
  {
    "url": "assets/js/30.6c013520.js",
    "revision": "a15aae09f008be94272f326981d5d164"
  },
  {
    "url": "assets/js/31.50ba35e3.js",
    "revision": "a52f54fd5f0a99fba1c3140a7d4d321f"
  },
  {
    "url": "assets/js/32.bee0d123.js",
    "revision": "754f7b608a50434e1088782e573561d1"
  },
  {
    "url": "assets/js/33.0a687c3e.js",
    "revision": "009ae21ddf9cdffe297fe676e4ebdf69"
  },
  {
    "url": "assets/js/34.ecdd999a.js",
    "revision": "ca371a687988f9b683f5baf432515335"
  },
  {
    "url": "assets/js/35.718f871d.js",
    "revision": "c2b1ee6e06ba2f9a91c7e56dece602d7"
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
    "url": "assets/js/app.d14cf44c.js",
    "revision": "fac53e6b5264b0a2f8ae2838109e3ef3"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "a6fcf72e02d450c58e8a3c03eeae2372"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "184ec9733a5aa212f334e9c7e89ea29b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cac2e763692fa796361490e21fecabde"
  },
  {
    "url": "categories/专业课/index.html",
    "revision": "ddd1433e164f1632df3a142074afed94"
  },
  {
    "url": "categories/index.html",
    "revision": "7f92ccf3e3363441b30335347d9a8628"
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
    "revision": "54cf2cef8712fe309810093c06e39d27"
  },
  {
    "url": "moonBg.jpg",
    "revision": "33eaaf6768d8b268baa5a682722a5be9"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "fb003419f4705642103aa7fe2d8a7767"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "fe59d043052262e83a967d435f471c91"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "634f74444cd7c4ab32a02464b247455d"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "7d561cca48156a673dd3008e2f95fd63"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "4db55923793cad38cb86692b14bf5ae4"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "0de97b2530ac9dd437a7e853a066dee5"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "3fac7a749b633094fa9d1aa8e68923b6"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "209c847054eecf90273e1aaca288a31d"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "7fcd2a92effdd43198cda00a77c86abc"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "af3a737f62f64f8d574ab3b47f3b8f81"
  },
  {
    "url": "note/index.html",
    "revision": "d3429fc3ba6ebdf86e939d1de2b83459"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "22b37b2ab0a422ad6163af0bd66b42d6"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "6abcd62f1f7bdac8f1a0c899b795503b"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "f4f60049e15b582279d14ecf768ede7c"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "b6d61c85440a82410b95f6d13d5d96ac"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "df0422a4525cc3db00a5c8abd5fa0c92"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "40508e76ecb0cb360e73b3b351f8dd32"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "6be9cc217ac5b2e046212411f2e80f02"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "6fbd2d162594ee80359e406a1f81e142"
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
    "revision": "541287e4a08266241f03b5e4f528aadb"
  },
  {
    "url": "tag/数据库系统原理/index.html",
    "revision": "98b7cd88ed771f803fe391371528c7b6"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "904dcf93e3b7b66af69006c85b213b55"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "0303dd7383036fbc25990f36294bb22c"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "f1259ce3933702a6a24ef656ec6f9692"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "7f03924088ba51cbf0647a1a99b365a3"
  },
  {
    "url": "tag/index.html",
    "revision": "f72cb5d5c89c45582c3e618234cb3184"
  },
  {
    "url": "tag/js/index.html",
    "revision": "16b4e8a778364b844519edba0f7d1d59"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "791b7d0341966734dcb46d83b64c88b4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "81332ac333c4a97c1306f03ef4c371a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "15ab46ae7564a0b7a52f15ebe7f6bcce"
  },
  {
    "url": "views/ji-suan-ji/2022/shu-ju-ku-xi-tong.html",
    "revision": "57de66f983f69af02539b3ef87c2f2ed"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "6351fe34dc2d1a404c6422dbe4202912"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "e8555725666e6eee8c838e8e4c160f63"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "db815f557f74658116d498409e47da4a"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "8f27d24317b5cd2020533f564c6719bf"
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
