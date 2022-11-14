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
    "revision": "6493088f9f74d3d63915b3aacbd659b9"
  },
  {
    "url": "about/index.html",
    "revision": "ed0e9940b6babdab47921760ff9ef55f"
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
    "url": "assets/js/13.2fba0e9c.js",
    "revision": "1142909e376e6ada768341b253227ef3"
  },
  {
    "url": "assets/js/14.5baaf7b9.js",
    "revision": "9db17363c48c930368d2b22078523255"
  },
  {
    "url": "assets/js/15.a88e4d2f.js",
    "revision": "8012241f8160c4124e676bf16762fc6a"
  },
  {
    "url": "assets/js/16.a01711e0.js",
    "revision": "4e569c85c6956faefff6b74d2ad96942"
  },
  {
    "url": "assets/js/17.bddf298b.js",
    "revision": "71a1eeac2c0227dd64b6b740afa0eea3"
  },
  {
    "url": "assets/js/18.82bfd776.js",
    "revision": "4e59fd772358fc3a731ca86fe37dd1ab"
  },
  {
    "url": "assets/js/19.1831d819.js",
    "revision": "675e9c8e5929cd157c68abfc7bb5640a"
  },
  {
    "url": "assets/js/20.0d7082cf.js",
    "revision": "5a91777b5db1505bb1b501c73b33be17"
  },
  {
    "url": "assets/js/21.51a4da02.js",
    "revision": "dfde4da6bee99d1d0d360a0dad15e447"
  },
  {
    "url": "assets/js/22.f37d4e20.js",
    "revision": "9a2db3efe33462f36b90498166172717"
  },
  {
    "url": "assets/js/23.3cba75e7.js",
    "revision": "f04b22b13a25bfc64b2d73f6c9d62852"
  },
  {
    "url": "assets/js/24.5f0cec41.js",
    "revision": "6cbee4ae15af00073d057e669591eb42"
  },
  {
    "url": "assets/js/25.a5d71ddf.js",
    "revision": "f680f79c454764d9ee4b09da60d8e6b6"
  },
  {
    "url": "assets/js/26.3589e96f.js",
    "revision": "a6099af0699574fed6b7660a7b585954"
  },
  {
    "url": "assets/js/27.b45a191f.js",
    "revision": "3513d2736e6d124f5c1b6cd62e94523f"
  },
  {
    "url": "assets/js/28.3a6b8362.js",
    "revision": "303f34cf17f5a48a33ded0b44008e082"
  },
  {
    "url": "assets/js/29.6ad2c611.js",
    "revision": "dfbc6f2be791808b31e516def9051bc1"
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
    "url": "assets/js/31.6a3edfec.js",
    "revision": "65e9f3c877f4b500a951e6f78873ccb9"
  },
  {
    "url": "assets/js/32.39b1a948.js",
    "revision": "754f7b608a50434e1088782e573561d1"
  },
  {
    "url": "assets/js/33.c91fee2f.js",
    "revision": "76124a6682f7b462b7e5a4ff58d8c678"
  },
  {
    "url": "assets/js/34.ee75bfcb.js",
    "revision": "bd355078a15c0dec31823724e321bf2c"
  },
  {
    "url": "assets/js/35.906341ee.js",
    "revision": "84cb24efd80bcaa380ab2aa451b46e34"
  },
  {
    "url": "assets/js/36.3379fae1.js",
    "revision": "8da4094849919be405d2bb34522c8bfb"
  },
  {
    "url": "assets/js/37.d615c615.js",
    "revision": "2b42e91f8db3a35689da62d0f77a5f7d"
  },
  {
    "url": "assets/js/38.61ab8142.js",
    "revision": "6d98b8a7d33a6dafeb596f0fcfb087eb"
  },
  {
    "url": "assets/js/39.bdc0bcea.js",
    "revision": "79b28a64b3e55533de426f53e6068628"
  },
  {
    "url": "assets/js/4.43cf2407.js",
    "revision": "54e5b8191e6070236b2fce7a0f46123c"
  },
  {
    "url": "assets/js/40.fffac276.js",
    "revision": "4dd87affacb14e0e0d0a43eacca8c028"
  },
  {
    "url": "assets/js/41.84270566.js",
    "revision": "59b4dad9b49b842159b5e0a5c4f76e43"
  },
  {
    "url": "assets/js/42.e20f9b93.js",
    "revision": "f89ece2dcd0e994c300ae9bdbcb3c1f3"
  },
  {
    "url": "assets/js/43.dbfdf696.js",
    "revision": "d932018ed5574a0529a00165d52671c7"
  },
  {
    "url": "assets/js/44.0436a1c2.js",
    "revision": "17690465ac69b03b312b9d748ceda344"
  },
  {
    "url": "assets/js/45.2d7f6f11.js",
    "revision": "d460bac8277336de04d64a0316a722f5"
  },
  {
    "url": "assets/js/46.7dbfd018.js",
    "revision": "49321a99a90b3bc355fd796714ebba5f"
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
    "url": "assets/js/app.c60a2b3a.js",
    "revision": "eefe1c8e039f360245b1807bc6c48e31"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "c5f63ac8ca61329a68d046ca6c654dd5"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "2c32a0fac5b479a082dac65e9382cab9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "be9fb1b2a39ceedd965bd7ccb8e23752"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "fe68caaba7d818e1fb26acadcbb44a64"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "c37a1b1b728068a7ec97a05a93c9abbf"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "1ac34815d301da38f3eb675372bb644c"
  },
  {
    "url": "categories/index.html",
    "revision": "1849355cbdd02e57af66a56b532018d4"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "d427de009383358edfbe186d1513e91e"
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
    "revision": "3246ab0a6cf17988d801d0e087eaa0c8"
  },
  {
    "url": "moonBg.jpg",
    "revision": "33eaaf6768d8b268baa5a682722a5be9"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "435da4e1954678b32b3eb8a3d42b314b"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "1421d8231f2e0f3765d1865e17bf7789"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "ca63baa0d3910266f2b903a0bccd9fdf"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "5cf8aed303b74864b14b25cf869ab68b"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "bf18f5843224c0eed8e0a862228983a5"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "604f1fa4c18a414b6f19fc55b4695ab9"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "59bc5f4dbadb258ec869cb1b2e4f38ae"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "e107d5df33d47ff5e1751519dc3a6a54"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "6048cdde4230499f51e77bf1d3d6d673"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "b0fddce167fb0ad441ce822a6ae74595"
  },
  {
    "url": "note/index.html",
    "revision": "bc030ae410059b986ea842cad0250fcb"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "61ac0c1c47061c6287557adde1efafc1"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "b332af110ab23fca0339f548a33bd733"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "9ce6bad069332fb0ebd550aff87783fd"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "1996c1217a97660d7dd4b2f5943519d9"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "36d33e798c275c604891542cc2078a72"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "db4ff6c28b7aa9d5564efec9547050eb"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "e86de5b2ad76ff436b0c69b62c268f19"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "5cd4b8f1624ee2dc785f4d87e7441f5d"
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
    "revision": "e8b77177ab1e3236e06cb6e40db086da"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "eef7dc799ae07e2b18cd2163340490fa"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "427f00f78195ab6987b347af5eca539b"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "88ba9d60fd4391c783a292b62038008d"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "c118be06a88287c1a750cdf1c042eb04"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "13674336961c86cf6e8c2f95033920f2"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "5d74f0df918ba9fe909582bf98c614a2"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "3def3a298cabad505f07bdbba2146560"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "8cc434ccbbeac47f916553a84e30a04f"
  },
  {
    "url": "tag/index.html",
    "revision": "e53287c6a90ce1e43718ec6989fbb73c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e3352f972750f4ea129c5dbbbf7e0202"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "ae2a8d648ef8e42fe37f843f7a7957db"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a519cb98f318bb1a1ca2590bd2b276b5"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "71a9f9e65f9168f9ba580e96927a51ff"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b86f21471622d98b04c1293f39fa0bf8"
  },
  {
    "url": "timeline/index.html",
    "revision": "914e70ddba7028a9fc23c9b36ac99739"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "65d82807889736a09ca99e771cbf462b"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "60d30fa3c18065ad51c66ca80ca4227a"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "ddfbb32c8a7f593838ada26cef263c24"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "b5834ad4100f1d4ab2c1e3ea17010190"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "eb209e44b13b70d0e31917468126ee12"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "a417fa43e27d43aae851dc3170eccc32"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "eaa4a362d43434ca708d2a7308e0cbe5"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "054919eaf7ff111f55e90d4f270b7914"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "d9e7294db51351fed2c99d31bc2a9bad"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "4de1a488f021534aa9f2a88482877325"
  },
  {
    "url": "views/sui-bi/2020/ji-wo-de-da-xue.html",
    "revision": "6376ad30c03d2eeada5a2191bf3e260c"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "a926ffcca0f6a0ff501262f6f5561c12"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "d77fe603f117a91939ce1def765c9e4e"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "766026eefe1ae0d0ff5ac7565a6a0540"
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
