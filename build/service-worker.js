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
    "revision": "2b3048d26d536879741c1e2a69095f20"
  },
  {
    "url": "about/index.html",
    "revision": "4cb16710f9a9df66afc48951ec108f6e"
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
    "url": "assets/js/12.762a0aab.js",
    "revision": "bd69181b3e2e07f5ad34aaf83f27e41e"
  },
  {
    "url": "assets/js/13.db78432c.js",
    "revision": "3c89e0c06bda114126489d08d84eddca"
  },
  {
    "url": "assets/js/14.ae2abd77.js",
    "revision": "3de6603c0651679c63cba6cd3f69dd25"
  },
  {
    "url": "assets/js/15.0ce6d925.js",
    "revision": "8012241f8160c4124e676bf16762fc6a"
  },
  {
    "url": "assets/js/16.8278d9c4.js",
    "revision": "bda74624ed6d33e63a25f6198dd8d0c9"
  },
  {
    "url": "assets/js/17.03c18283.js",
    "revision": "3d47449326af02bee9f12f4f0e59c836"
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
    "url": "assets/js/20.a517a3cc.js",
    "revision": "3f34143ebad36d14e896a05a6b71999e"
  },
  {
    "url": "assets/js/21.c0130995.js",
    "revision": "747650b3df85007648a90b8c44ff9488"
  },
  {
    "url": "assets/js/22.ae03fe82.js",
    "revision": "92524abd65390b58c2b201c866bff210"
  },
  {
    "url": "assets/js/23.49b4238f.js",
    "revision": "3edbf96ac1021dbd14f302d6a236daff"
  },
  {
    "url": "assets/js/24.b82e7d0e.js",
    "revision": "436cbcd0d21996e30ca8a5c654330d09"
  },
  {
    "url": "assets/js/25.055fd8db.js",
    "revision": "3b119c7d6c10fa85b31b8192fe7c79c9"
  },
  {
    "url": "assets/js/26.4f72321b.js",
    "revision": "52cbed7f7a12bc4d388fe475538833c5"
  },
  {
    "url": "assets/js/27.960b168e.js",
    "revision": "6a46e08ff2a823ab780fb6e9a50a8cbd"
  },
  {
    "url": "assets/js/28.80820874.js",
    "revision": "acb804a33fc615fc5e961b6955f722b5"
  },
  {
    "url": "assets/js/29.505c54b1.js",
    "revision": "dfbc6f2be791808b31e516def9051bc1"
  },
  {
    "url": "assets/js/3.4377fe4c.js",
    "revision": "f53308c5850e411d1a769ad7f40e7a6c"
  },
  {
    "url": "assets/js/30.fed9af43.js",
    "revision": "fcf1fdc991921802e0472a973a076cc3"
  },
  {
    "url": "assets/js/31.2b153863.js",
    "revision": "65e9f3c877f4b500a951e6f78873ccb9"
  },
  {
    "url": "assets/js/32.bee0d123.js",
    "revision": "754f7b608a50434e1088782e573561d1"
  },
  {
    "url": "assets/js/33.7c718f3f.js",
    "revision": "2567c765e8a94d7f51f391e5b85f8cef"
  },
  {
    "url": "assets/js/34.6702efb9.js",
    "revision": "628325c718933f1dc7bc7dd1be2bb135"
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
    "url": "assets/js/app.49a8a8e7.js",
    "revision": "a93008d29c905904b823bc3a9d39b4ec"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "3210d2044b1e93fe48ea72e213457810"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "64230487fe653be7e804d39e86ba9955"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ac89d35545da6950e04e360c1e5b7222"
  },
  {
    "url": "categories/专业课/index.html",
    "revision": "00f04577759334134fe9c70ec838dc4b"
  },
  {
    "url": "categories/index.html",
    "revision": "4333af5f7683ef9b980993c1455b2800"
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
    "revision": "569ccd623256c714c88cd907bb2b6a12"
  },
  {
    "url": "moonBg.jpg",
    "revision": "33eaaf6768d8b268baa5a682722a5be9"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "0f5a2adf542ce2a446bd7e840489643b"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "67f2b1774f283450557d4b7a2f91279d"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "1f023d001bc1b6ee7f800804e055e99d"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "612d777116318395b2e3aa3f1f5f76dd"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "bdd99f0d4ecead66b2b37affc3d368aa"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "5ef4faa193b0334a2bfedc64664652ad"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "dadb9d5661cfb7421f3cf610ad12be7f"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "c5ba03d07f650102e254142d1ada954b"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "4d46aab889bcb5132f6b6b86041b6844"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "47b01c1dd3a2750b79dcba77d44631b3"
  },
  {
    "url": "note/index.html",
    "revision": "e5b58b4b133e73ea970d1204aa435794"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "c97a6b6111a27e2fb780658de2efc132"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "4bfa90f5060855b8c7308478eff724a7"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "2d7b42d05d909d367ad5567f08e7e1ff"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "b19e35cbe45f3b233caa303ee27eafe9"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "52092747ed0bc3323e88f93b627b32c1"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "9805430235d69c9136d545da665c386e"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "bcc554f44942753be50cf979eb73c136"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "f38f0e691ab85a8340860faab0ee2e01"
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
    "revision": "13ca29449e3696d30c38a2a6b5eb4414"
  },
  {
    "url": "tag/数据库系统原理/index.html",
    "revision": "6521faadaf90efc9d0b91ad17f3950f5"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "8e31c202def36ccef325628d8ee0f70f"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "7a54fc306e2a62673c213810f92d6ff8"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "41f4219ca7f3339c8716249bb6eeb3ab"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "a70a00bb4fe16f1c670ee3a77b314ee4"
  },
  {
    "url": "tag/index.html",
    "revision": "4fa8e211a91111e23ce1426494f6cccc"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3a759193f935e6b11286735e8401b843"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "d2222c3d27e39be165d1fcd000d0301d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "055e129a033c4bcee687b5476b03f0f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ca470e15566d931d2e9db6657bf51ad"
  },
  {
    "url": "views/ji-suan-ji/2022/shu-ju-ku-xi-tong.html",
    "revision": "72f7fd78ea2f62dc8434447e5d62be70"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "d58ed796e09a01f567fc2d8a4da37eb0"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "ac3cb6f6c33e32affb8683f58b88985c"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "5b5661c7c8f93503bd8f2a0d596ea819"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "c890240c028a7c27ea311ea6cbf415ce"
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
