/*
 * @Description:
 * @Date: 2022-06-07 10:05:47
 * @LastEditTime: 2022-06-16 14:54:05
 * @FilePath: \roce-test\docs\.vuepress\config.js
 */
module.exports = {
  title: "N-You",
  theme: "reco",
  description: "知识总结",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/avatar.jpg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#66ccff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/LatteAndCat.png" }],
    [
      "link",
      { rel: "mask-icon", href: "/icons/LatteAndCat.svg", color: "#66ccff" },
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icons/LatteAndCat.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  themeConfig: {
    type: "blog",
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
      { text: 'GitHub', link: 'https://github.com/N-You', icon: 'reco-github' }
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
};
