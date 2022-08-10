module.exports = {
  title: "N-You",
  theme: "reco",
  description: "知识总结",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/avatar.jpg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    type: "blog",
    mode: 'dark',
    noFoundPageByTencent: true,
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      { text: "GitHub", link: "https://github.com/N-You", icon: "reco-github" },
    ],
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "N-You的博客",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: "auto",
    sidebarDepth: 1,
    displayAllHeaders: false,
    lastUpdated: "Last Updated",
    author: "N-You",
    authorAvatar: "/avatar.jpg",
    record: "xxxx",
    startYear: "2017",
  },
  sidebar: {
    "/note/": [
      {
        title: "ComputerPrinciples",
        collapsable: true,
        children: ["ComputerPrinciples/Http"],
      },
      {
        title: "DataStructureAlgorithms",
        collapsable: true,
      },
      {
        title: "CSS",
        collapsable: true,
      },
      {
        title: "HTML",
        collapsable: true,
      },
      {
        title: "DOM",
        collapsable: true,
      },
      {
        title: "JavaScript",
        collapsable: true,
      },
      {
        title: "TypeScript",
        collapsable: true,
        children: ["TypeScript/ts-notes"],
      },
      {
        title: "NodeJS",
        collapsable: true,
      },
      {
        title: "Vue",
        collapsable: true,
      },
      {
        title: "React",
        collapsable: true,
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "sakura",
      {
        num: 50, // 默认数量
        show: true, //  是否显示
        zIndex: 9999999, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: "...", // 绝对路径
        },
      },
    ],
    ["@vuepress-reco/vuepress-plugin-bgm-player",
    {
      audios: [
        // 网络文件示例
        {
          name: '年轮',
          artist: '张碧晨',
          url: 'https://cdn.jsdelivr.net/gh/fudalijunyi/cdn/MP3/年轮.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200715154924.png'
        },
        {
          name: '我再没见过 像你一般的星空',
          artist: 'Seto',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '萤火之森',
          artist: 'CMJ',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ] ,
      // 自动缩小
      autoShrink:true ,
      // 悬浮窗模式，吸边
      shrinkMode: 'float' ,
      // 悬浮窗位置
      floatStyle:{ bottom: '100px', 'z-index': '999999' },

    }],
    [
      "ribbon-animation",
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true,
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true, // 滑动彩带
      },
    ],
    ["go-top"],
    [
      "dynamic-title",
      {
        showText: "欢迎回来 O(∩_∩)O~",
        hideText: "失联中。。。快回来~",
        recoverTime: 2000,
      },
    ],
  ],
};
