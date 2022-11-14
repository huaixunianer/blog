module.exports = {
  base:'/blog/',//github地址
  dest: './build',// 输出目录
  theme: 'reco',
  title: '望月的研习室',
  description: 'study programs and record life',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF66CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/moon.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/Moon.svg', color: '#FF66CC' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/moon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    type: 'blog',
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Notes', link: '/note/', icon: 'reco-document' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'About', link: '/about/', icon: 'reco-account' },
      { text: 'GitHub', link: 'https://github.com/smallsunnyfox', icon: 'reco-github' }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/note/': [
        {
          title: 'HTML5',
          collapsable: true,
          children: ['html5/HTML5的语义元素', 'html5/HTML5多媒体标签', 'html5/HTML5表单元素', 'html5/HTML5中的API', 'html5/Canvas']
        },
        {
          title: 'CSS',
          collapsable: true,
          children: ['css/css3新特性', 'css/css3Flip']
        },
        {
          title: 'JS',
          collapsable: true,
          children: ['js/js数据类型', 'js/js对象', 'js/js继承', 'js/js原型链、闭包', 'js/js函数的四种调用方式']
        },
        {
          title: 'Vue.js',
          collapsable: true,
          children: ['Vue/Vue基础笔记', 'Vue/Vue组件']
        },
        {
          title: '前端单元测试',
          collapsable: true,
          children: ['fe-unit-test/chai', 'fe-unit-test/mocha', 'fe-unit-test/vueTestUtils']
        },
        {
          title: '微信小程序',
          collapsable: true,
          children: ['wechat-mini-program/初识微信小程序']
        }
      ]
    },
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '望月',
    logo:'/photo.jpg',
    authorAvatar: '/photo.jpg',
    // 项目开始时间
    startYear: '2022',
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ],
    [
      'permalink-pinyin',
      {
        lowercase: true,
        separator: '-'
      }
    ]
  ]
}
