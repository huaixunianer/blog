(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{539:function(v,_,s){"use strict";s.r(_);var a=s(11),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h2",{attrs:{id:"微信小程序是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序是什么"}},[v._v("#")]),v._v(" 微信小程序是什么")]),v._v(" "),s("ul",[s("li",[v._v("简介：小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。")]),v._v(" "),s("li",[v._v("发展史： JS API => JS-SDK => 微信小程序")]),v._v(" "),s("li",[v._v("小程序与普通网页开发的区别\n"),s("ul",[s("li",[v._v("网页开发渲染线程和脚本线程是互斥的，而在小程序中，二者是分开的，分别运行在不同的线程中。")]),v._v(" "),s("li",[v._v("网页开发者可以使用到各种浏览器暴露出来的 DOM API，进行 DOM 选中和操作。而如上文所述，小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的DOM API和BOM API。")]),v._v(" "),s("li",[v._v("运行环境也有较大的区别")])])])]),v._v(" "),s("h2",{attrs:{id:"小程序的代码构成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序的代码构成"}},[v._v("#")]),v._v(" 小程序的代码构成")]),v._v(" "),s("h3",{attrs:{id:"json-后缀的-json-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-后缀的-json-配置文件"}},[v._v("#")]),v._v(" "),s("code",[v._v(".json")]),v._v(" 后缀的 "),s("code",[v._v("JSON")]),v._v(" 配置文件")]),v._v(" "),s("ul",[s("li",[v._v("小程序配置 app.json\n"),s("ul",[s("li",[v._v("pages字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前你的小程序页面定义在哪个目录。")]),v._v(" "),s("li",[v._v("window字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等。")])])]),v._v(" "),s("li",[v._v("开发工具配置 project.config.json")]),v._v(" "),s("li",[v._v("页面配置 page.json")])]),v._v(" "),s("h3",{attrs:{id:"wxml-后缀的-wxml-模板文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxml-后缀的-wxml-模板文件"}},[v._v("#")]),v._v(" "),s("code",[v._v(".wxml")]),v._v(" 后缀的 "),s("code",[v._v("WXML")]),v._v(" 模板文件")]),v._v(" "),s("p",[v._v("和 HTML 非常相似，WXML 由标签、属性等等构成。但是也有很多不一样的地方")]),v._v(" "),s("ul",[s("li",[v._v("小程序的 WXML 用的标签是 view, button, text 等等")]),v._v(" "),s("li",[v._v("使用{{}}进行数据绑定")])]),v._v(" "),s("h3",{attrs:{id:"wxss-后缀的-wxss-样式文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxss-后缀的-wxss-样式文件"}},[v._v("#")]),v._v(" "),s("code",[v._v(".wxss")]),v._v(" 后缀的 "),s("code",[v._v("WXSS")]),v._v(" 样式文件")]),v._v(" "),s("ul",[s("li",[v._v("新增尺寸单位 "),s("code",[v._v("rpx")])]),v._v(" "),s("li",[v._v("提供了全局的样式app.wxss和局部样式page.wxss。")]),v._v(" "),s("li",[v._v("WXSS 仅支持部分 CSS 选择器")])]),v._v(" "),s("h3",{attrs:{id:"js-后缀的-js-脚本逻辑文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-后缀的-js-脚本逻辑文件"}},[v._v("#")]),v._v(" "),s("code",[v._v(".js")]),v._v(" 后缀的 "),s("code",[v._v("JS")]),v._v(" 脚本逻辑文件")]),v._v(" "),s("ul",[s("li",[v._v("用于和用户交互")]),v._v(" "),s("li",[v._v("可以在JS中调用小程序提供的API")])]),v._v(" "),s("h2",{attrs:{id:"小程序的宿主环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序的宿主环境"}},[v._v("#")]),v._v(" 小程序的宿主环境")]),v._v(" "),s("p",[v._v("小程序的宿主环境即为微信客户端给小程序所提供的环境。")]),v._v(" "),s("h3",{attrs:{id:"渲染层和逻辑层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染层和逻辑层"}},[v._v("#")]),v._v(" 渲染层和逻辑层")]),v._v(" "),s("ul",[s("li",[v._v("小程序的渲染层和逻辑层分别由2个线程管理：\n"),s("ul",[s("li",[v._v("渲染层的界面使用了WebView 进行渲染；")]),v._v(" "),s("li",[v._v("逻辑层采用JsCore线程运行JS脚本。")])])]),v._v(" "),s("li",[v._v("一个小程序存在多个界面，所以渲染层存在多个WebView线程，这两个线程的通信会经由微信客户端做中转，逻辑层发送网络请求也经由微信客户端转发")])]),v._v(" "),s("h3",{attrs:{id:"程序和页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序和页面"}},[v._v("#")]),v._v(" 程序和页面")]),v._v(" "),s("p",[v._v("程序的加载")]),v._v(" "),s("ul",[s("li",[v._v("微信客户端在打开小程序之前，会把整个小程序的代码包下载到本地。")]),v._v(" "),s("li",[v._v("紧接着通过 app.json 的 pages 字段就可以知道你当前小程序的所有页面路径。")]),v._v(" "),s("li",[v._v("写在 pages 字段的第一个页面就是这个小程序的首页。")]),v._v(" "),s("li",[v._v("微信客户端把首页的代码装载进来，通过小程序底层的一些机制，就可以渲染出这个首页")]),v._v(" "),s("li",[v._v("整个小程序只有一个 App 实例，是全部页面共享的")])]),v._v(" "),s("p",[v._v("页面的构建")]),v._v(" "),s("p",[v._v("微信客户端会先根据 json 文件中的配置生成一个界面，顶部的颜色和文字你都可以在这个 json 文件里边定义好。紧接着客户端就会装载这个页面的 WXML 结构和 WXSS 样式。最后客户端会装载 js 文件")]),v._v(" "),s("p",[v._v("Page 是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把 data 数据和 index.wxml 一起渲染出最终的结构，于是就得到了你看到的小程序的样子。")]),v._v(" "),s("h3",{attrs:{id:"组件和api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件和api"}},[v._v("#")]),v._v(" 组件和API")]),v._v(" "),s("ul",[s("li",[v._v("小程序提供了丰富的基础组件给开发者自由组合")]),v._v(" "),s("li",[v._v("小程序提供了很多 API 让开发者方便的调用微信提供的能力")]),v._v(" "),s("li",[v._v("多数 API 的回调都是异步")])])])}),[],!1,null,null,null);_.default=t.exports}}]);