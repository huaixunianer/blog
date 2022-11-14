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
    "revision": "799d125189f13b56a0b1008b69f17fdc"
  },
  {
    "url": "about/index.html",
    "revision": "eebc7ffa3a68b6e3e46f88990ffd0a28"
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
    "url": "assets/js/1.67db4a2f.js",
    "revision": "7146b4286c64892f46aeaad808869110"
  },
  {
    "url": "assets/js/10.60f934fb.js",
    "revision": "e7ceddcce4b1313105fa6cd9d6aeb0e3"
  },
  {
    "url": "assets/js/11.92ba16e8.js",
    "revision": "9abd0aab3c85d9345a0640d32a916f49"
  },
  {
    "url": "assets/js/12.00a4a65d.js",
    "revision": "bd69181b3e2e07f5ad34aaf83f27e41e"
  },
  {
    "url": "assets/js/13.baa6f895.js",
    "revision": "38b0cdf945f79c742cedc3c6a5e686d3"
  },
  {
    "url": "assets/js/14.03726d76.js",
    "revision": "46f9d45ad7e49e8251ba4f23b1536875"
  },
  {
    "url": "assets/js/15.a88e4d2f.js",
    "revision": "8012241f8160c4124e676bf16762fc6a"
  },
  {
    "url": "assets/js/16.311f86bf.js",
    "revision": "b224db1a48e757b2fb012895b41b53c4"
  },
  {
    "url": "assets/js/17.41185957.js",
    "revision": "9e665029568ab467ef1297822efa7584"
  },
  {
    "url": "assets/js/18.fa728a97.js",
    "revision": "39365421ae77b62fb367d502d9bfdf08"
  },
  {
    "url": "assets/js/19.1831d819.js",
    "revision": "675e9c8e5929cd157c68abfc7bb5640a"
  },
  {
    "url": "assets/js/20.3bb599a3.js",
    "revision": "3274d8399a17b0418a2c63a7ab1b86a6"
  },
  {
    "url": "assets/js/21.5a6c29ed.js",
    "revision": "747650b3df85007648a90b8c44ff9488"
  },
  {
    "url": "assets/js/22.57215378.js",
    "revision": "656a6d2f96f18fa72aab894d251b0b27"
  },
  {
    "url": "assets/js/23.f86d049b.js",
    "revision": "3edbf96ac1021dbd14f302d6a236daff"
  },
  {
    "url": "assets/js/24.5f0cec41.js",
    "revision": "6cbee4ae15af00073d057e669591eb42"
  },
  {
    "url": "assets/js/25.264530f1.js",
    "revision": "3b119c7d6c10fa85b31b8192fe7c79c9"
  },
  {
    "url": "assets/js/26.431862bf.js",
    "revision": "f250d0ee7c6a67bbf57c5ece94b53384"
  },
  {
    "url": "assets/js/27.19ecb540.js",
    "revision": "be93619215e328bc71af565782dbc8b1"
  },
  {
    "url": "assets/js/28.706319ac.js",
    "revision": "ea42c0874123cfdf87e309bde6ab5a6e"
  },
  {
    "url": "assets/js/29.98d73a4b.js",
    "revision": "fefbf0c4b255a446103c3d0d4138f2bf"
  },
  {
    "url": "assets/js/3.bb2d27ec.js",
    "revision": "f53308c5850e411d1a769ad7f40e7a6c"
  },
  {
    "url": "assets/js/30.cfa2a766.js",
    "revision": "45a39861026afcad3759d407b00a8554"
  },
  {
    "url": "assets/js/31.90e8823e.js",
    "revision": "4be685103b355c03c1393008a8e99820"
  },
  {
    "url": "assets/js/32.33cdac29.js",
    "revision": "8796df87a10c60e7480dacbee01bacea"
  },
  {
    "url": "assets/js/33.c91fee2f.js",
    "revision": "76124a6682f7b462b7e5a4ff58d8c678"
  },
  {
    "url": "assets/js/34.7da75958.js",
    "revision": "afc3269f4d9927e53165f95b10cbfa84"
  },
  {
    "url": "assets/js/35.66c91f70.js",
    "revision": "3a0ac3715c38febac6bbcaca3f7805b1"
  },
  {
    "url": "assets/js/36.1cc093d5.js",
    "revision": "a9b6e599430380718ef76d298fa465db"
  },
  {
    "url": "assets/js/37.cff18eb7.js",
    "revision": "dfa8a590e8e56929fdda46c87b157f57"
  },
  {
    "url": "assets/js/38.eb291d56.js",
    "revision": "d81aaeecbab510031f1ebc767d50c07a"
  },
  {
    "url": "assets/js/39.affc9e58.js",
    "revision": "f2bd6fbc954a65b6aef352f403a2b742"
  },
  {
    "url": "assets/js/4.43cf2407.js",
    "revision": "54e5b8191e6070236b2fce7a0f46123c"
  },
  {
    "url": "assets/js/40.73062e93.js",
    "revision": "f0e0d9a84ee9e85a2741163e9e9beea0"
  },
  {
    "url": "assets/js/41.3169fa9b.js",
    "revision": "e5210161183b29d74545e728c3db8aca"
  },
  {
    "url": "assets/js/42.2c9ef42a.js",
    "revision": "41efaad871c8aa1be5b4b28dfe82944a"
  },
  {
    "url": "assets/js/43.3354b2c4.js",
    "revision": "53d5e7617e61a059ffea1688f8b59322"
  },
  {
    "url": "assets/js/44.64cc20e4.js",
    "revision": "23875276e48832181bdd70bbcd601e5c"
  },
  {
    "url": "assets/js/45.b8ed1d67.js",
    "revision": "b871ef31881a8af9c478cb1f15afc676"
  },
  {
    "url": "assets/js/46.2e6c6fd0.js",
    "revision": "8a32419d202fb3b53b8d2d8e6710132a"
  },
  {
    "url": "assets/js/5.746e3783.js",
    "revision": "18b0a97e14a52ecd5c4c6db30a8c0708"
  },
  {
    "url": "assets/js/6.935c6e85.js",
    "revision": "942006bc21c75e9995476e1f2c33f35d"
  },
  {
    "url": "assets/js/7.0547d91b.js",
    "revision": "2457afde5d06b7019fd2f433837bf6a6"
  },
  {
    "url": "assets/js/8.fee8daab.js",
    "revision": "3d9c46cf8f79b14f36f51c23f3f4b932"
  },
  {
    "url": "assets/js/9.4536fd5e.js",
    "revision": "7d674d656d2e817a62707f14b9fa5268"
  },
  {
    "url": "assets/js/app.49012884.js",
    "revision": "843df2bc6becb94ee92a789e1f882161"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "029a6d470a66d7444230567041944f2f"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "f66f0727dfed25590782d2cd09919f4d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "815e88e7ecac95d0b870b05cc5697517"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "dd08c56eac905f627e923c831ad0bf58"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "7b5070dce61eae4de188524e3f1ad8e4"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "a4337ed218b319544416c223a753dd85"
  },
  {
    "url": "categories/index.html",
    "revision": "d11207c460e37d580c64f212f2f1239e"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "72005194116e3fe26ae353fb1a191198"
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
    "revision": "7e286cd3cc7839293ed161cd60b3bc99"
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
    "revision": "bf5f0f925cbb8218ce7ac942aba6232a"
  },
  {
    "url": "moonBg.jpg",
    "revision": "33eaaf6768d8b268baa5a682722a5be9"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "c58464a3ae905c59c07f367769bc8cb5"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "d5666e89ea4f947afc7c5b6985e01e02"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "3a496181a291540889376a9cc1cfa64b"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "a1fd68429fc926118f43b3c3e777d32a"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "59ddaba52b0dd60ea54c8b460d5b1f43"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "bc8069bd5bf745e0b235337e3a93a8e2"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "7b7f89c75562a29b4dccd63d7a035210"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "71d228314c8cf67afbb2461a6d7b1c04"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "7a211ab1e7f8658f40d08b420ea87c1e"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "888e53d38ba43b9255a4f957404a10d6"
  },
  {
    "url": "note/index.html",
    "revision": "76b132c961b3fd491ecc52fde171434f"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "a8afeb5f622b70ddd2badc82474b5513"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "be40fe299d7d8efd05f7fb31a641dc4e"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "52c553255705476592a6a9140d4e3169"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "df21efa349eaf98cbebc48507d2d1a8d"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "b441c9ef44b6527a020d7731e05ed665"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "05328740fe53444a83566d3730aafb56"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "a72f342145d8d3c52b5dfe56ca14c002"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "29bafaf8b04c739d468a6af54f0ebb80"
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
    "revision": "f9a4e119db59e521320ebad84fec9acc"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "33b609af08b455bfd8c290f61e2891b8"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "8293f558add90faae974c733c0a50aa1"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "6e26a5c014efc234d01693ef3e8f3406"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "d4341185c0499db28af9520ff23b6f1c"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "5c65aa7231518dd9988aea0f3777b393"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "5ef7f970e0f8ad5fadc910082efd8b8b"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "4b2db08e060d08b70999e6813eea7dac"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "5a5b5d5d626facc629aadc141efef53a"
  },
  {
    "url": "tag/index.html",
    "revision": "66c6381a84c736c155b21105c98a9e3d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8be5e2d20a5a2625d3215f26fa36bbcd"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "868dfb666512ccbc3d0c4152c9225081"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e2cf4420e074aeb066bc70305fca5767"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "a72e94729a790eae7d3a9f35b03b483f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "da7e78bf9c3e8d7b5bf2248d443e2cc7"
  },
  {
    "url": "timeline/index.html",
    "revision": "64157b0e31b677f34c8d94a953667fe7"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "7048d474b3e4e7071f58b8ae64ad25c9"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "a52d1194e8bf1a6b95b185ce59eb137b"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "921a4ed9a58898cb8fec18d8fe8c59e2"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "8e97712985a78cc712970405f65e645c"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "017703d18dd2fa00a9a7b8d1230b96c9"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "a039875f226b1084683b650eaa436fdd"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "eaf79821031b87aa07748ad4ce6f7584"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "4a59fff8ff5cda1f62224dfe142ada1c"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "cab6315ff3441eb84fca770a67e50e90"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "b4b8d5751307bb3204abb8da153428fb"
  },
  {
    "url": "views/sui-bi/2020/ji-wo-de-da-xue.html",
    "revision": "fe82522b260a8c8cab629971ac797b71"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "21a8c910c31da1fd2d180d54bbf281b9"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "4873e90753d48470db00f8073f9754ea"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "581e01eb877151491d9153df9c5d93f0"
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
