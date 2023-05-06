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
    "revision": "57ffe44c42b2fbba86f3faf98c53aa06"
  },
  {
    "url": "about/index.html",
    "revision": "b8f69ff0c62678b054ab7264f6cb7cba"
  },
  {
    "url": "assets/css/0.styles.bf2498e4.css",
    "revision": "34e7ed9a6c323e6c8b95036447538f2e"
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
    "url": "assets/js/1.74e4947e.js",
    "revision": "0a9cc8c6a39a7096d55772d8c383ddf2"
  },
  {
    "url": "assets/js/10.55b69ec4.js",
    "revision": "4b24230108230473575c14e3c99d8b9f"
  },
  {
    "url": "assets/js/11.129d4251.js",
    "revision": "58cdc0f2205436cd6cb85d191721af8a"
  },
  {
    "url": "assets/js/12.4ed75d96.js",
    "revision": "b0be69f3cdccbb92caf4af03762de31c"
  },
  {
    "url": "assets/js/13.115fcaa5.js",
    "revision": "93359a3d3cc35785d12968396f6848af"
  },
  {
    "url": "assets/js/14.63942818.js",
    "revision": "b1fb53d5165d5cdfcce1e81207175f66"
  },
  {
    "url": "assets/js/15.c7abb706.js",
    "revision": "e6ceec430cb0dbf8f2793da845ae7985"
  },
  {
    "url": "assets/js/16.93976454.js",
    "revision": "ecfeeb908f43409f3b7398b44a761dc5"
  },
  {
    "url": "assets/js/17.e828c08d.js",
    "revision": "8a9affec991efedbcacd8f2d184b9dbd"
  },
  {
    "url": "assets/js/18.229446a7.js",
    "revision": "b8ec2814845959bc417e18037fe5966a"
  },
  {
    "url": "assets/js/19.ad9209ce.js",
    "revision": "f4b7f9d6b7401c7f7a3bbc99a09b898b"
  },
  {
    "url": "assets/js/20.84088ba4.js",
    "revision": "c6b2d7b26bcf956474e60e100262ded6"
  },
  {
    "url": "assets/js/21.df86aa31.js",
    "revision": "607ebff0bd033935609bbf2f25c0222d"
  },
  {
    "url": "assets/js/22.73818939.js",
    "revision": "7e28aa03c08510c8f431c1ce44410fcc"
  },
  {
    "url": "assets/js/23.faad4ccc.js",
    "revision": "dcf71d056dad9fb6120fd74cdd893e1c"
  },
  {
    "url": "assets/js/24.e69a874e.js",
    "revision": "6aeace05e1e0d32c7d9d62e38b8b1bb1"
  },
  {
    "url": "assets/js/25.b7e2f4ee.js",
    "revision": "5f36200a206a4837705c99ee2981a8ab"
  },
  {
    "url": "assets/js/26.b4332770.js",
    "revision": "df05e39dad5e3cfd0dd8e5da76d2e3ca"
  },
  {
    "url": "assets/js/27.b4acdc31.js",
    "revision": "07183f03a763ef51e51b401eeedfd347"
  },
  {
    "url": "assets/js/28.5bfb2a4c.js",
    "revision": "273dd468910f2bb83f1ca71d15ee6d87"
  },
  {
    "url": "assets/js/29.6775a208.js",
    "revision": "ec192faa46eb96a23e79e8e2a28d8218"
  },
  {
    "url": "assets/js/3.b7850394.js",
    "revision": "0ef4634ced366b48405bc24cd4036379"
  },
  {
    "url": "assets/js/30.7ea6c67c.js",
    "revision": "6467be17e4d187bade3ed6dc73eb848b"
  },
  {
    "url": "assets/js/31.2b40be13.js",
    "revision": "c90db629f84eb764dbea8477209730be"
  },
  {
    "url": "assets/js/32.7600fd9d.js",
    "revision": "f3bcdce2191fd10f73d73dbeabb7b375"
  },
  {
    "url": "assets/js/33.8aa0ac22.js",
    "revision": "ecae0a06cb61a768172457bed4559154"
  },
  {
    "url": "assets/js/34.e3320db3.js",
    "revision": "a9d0e73bc19b91556c9dc81aae1a1018"
  },
  {
    "url": "assets/js/35.4fd720c2.js",
    "revision": "8dad7b215760496188e5488954337d5f"
  },
  {
    "url": "assets/js/36.0a16ed7a.js",
    "revision": "2b08a86bb1fd3529fe3d253f477c9fb1"
  },
  {
    "url": "assets/js/37.ae46e0d0.js",
    "revision": "bd573e8568f808da75a9b83e27311408"
  },
  {
    "url": "assets/js/4.cd2968f4.js",
    "revision": "c5930cc5987f1967ff9e5a748f6daadb"
  },
  {
    "url": "assets/js/5.30271ec2.js",
    "revision": "a281181d15b703a0fe47a7dc313149a6"
  },
  {
    "url": "assets/js/6.5b59aefe.js",
    "revision": "57519ef2dab27526c722c1f4ad2b7eaf"
  },
  {
    "url": "assets/js/7.62a988ce.js",
    "revision": "c9749a4dfdd02002d4c0fb8e03489e38"
  },
  {
    "url": "assets/js/8.684f096b.js",
    "revision": "8e77b242146737e125d3fd5c28e033f4"
  },
  {
    "url": "assets/js/9.b25dfd56.js",
    "revision": "0656f370631827616329f5732344ce44"
  },
  {
    "url": "assets/js/app.eb660ad5.js",
    "revision": "f5696b7ba86cf8d496f89b835ab616f1"
  },
  {
    "url": "categories/index.html",
    "revision": "b53f984460f79b63b098317ddd17f018"
  },
  {
    "url": "categories/专业课/index.html",
    "revision": "cfed4ea94ef711c0472b864c678e06b2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b42ca7d570159c4cec9aefef2e2dbdf5"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "c732d9740ea8d6a5ae2769943726d59e"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "dec0d82369502b9fe9d359f96f027829"
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
    "revision": "7d5919706382684757096c1c8dd4dd34"
  },
  {
    "url": "moonBg.jpg",
    "revision": "33eaaf6768d8b268baa5a682722a5be9"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "35fa295cd3601e9f0855e4cc5609bf74"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "66127937dd030f985540f312860d9f5a"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "ff4e75016c8674ae95d4c941f6249f83"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "cc1c909df3f2794e1e74bb6bd81e44df"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "373b6324901402d66b851686a6941eff"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "2f55a9856d0e9a87f31909a90248f861"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "6e4d254187bd8b0529b0adf7848fd590"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "bf970ec986824941e5b13c8fab93ac3f"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "c12e52097dcb9965322741cc3c9c676c"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "7b2e7c58d8dc7956c3307c5a6a5714a3"
  },
  {
    "url": "note/index.html",
    "revision": "f4bb5cb11dbb27c45c85088650ce57c2"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "3f9e674cd9af6d311794e1ab512b84ca"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "2bdf5df7aaf1b41df304077e8219b998"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "7de2800ce90dbd48a18f1963507da9b7"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "f5e308c1a808efe8897cd69609d7e327"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "1fce739bc3d68f8d162c57ab2e1cfb7f"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "f455e991397ed98c9e949bda0c75877a"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "17ce4d4aad962871c368bb6bee5cbaa6"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "053517a71c17da403467da0a5080aed1"
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
    "url": "tag/Canvas/index.html",
    "revision": "552434b2fe8c9c3c7edbe89f0ac37745"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "c0fd5a29627d9eb3d4ca10b7a113443b"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "93b576758e987e66340e8c5d0f7af8ac"
  },
  {
    "url": "tag/index.html",
    "revision": "3edb32c5909fc820499dceec8622d3e9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "620cf47d701bded9df9eb04d875a844b"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "66a17e86641a7941213bacc34c1c3c89"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ee74ee2869bffe593f8cbc9ea6fc18cb"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "f868e12ae543a545416115b120db567a"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "25ecac8362055cc72780d175a76a9732"
  },
  {
    "url": "tag/数据库系统原理/index.html",
    "revision": "ffae80a67400c36b2c57746728f8cef7"
  },
  {
    "url": "timeline/index.html",
    "revision": "23b8fd38e200254e8fa090d358210df7"
  },
  {
    "url": "views/ji-suan-ji/2022/shu-ju-ku-xi-tong.html",
    "revision": "c57150bf0a85cfb484d2af86716501c9"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "008bbdef4fda8c83e270c8db177b651e"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "92c3b7f1287ec98e15fe47b03fe6fe84"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "69e3c14522dd92518b82cc5482bcea29"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "2053f141f8a8663f4b95c83801d5cbd2"
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
