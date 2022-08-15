---
title: HTML问题解析
date: 2022-06-17
tags:
 - interview
categories:
 - 面试题集中测试
---

 > 面试题地址：https://q.shanyue.tech/

## 一.网站开发中，如何实现图片的懒加载
在当前网页，滑动页面到能看到图片的时候再加载图片<br>
    图片懒加载拆分为两个问题：<font color="red">1.图片所在的位置  2.控制图片的加载</font>

### 1.通过getBoundingClientRect().top < document.documentElement.clientHeight 获取每个图片距离页面顶部的距离判断
!['通过getBoundingClientRect'](/assets/img/getBoundingClientRect.jpg '通过getBoundingClientRect')
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<div>
  <h6>图片懒加载</h6>
  <img data-src="/static/images/4.jpg" src="/static/images/hero.jpg"><br>
  <img data-src="/static/images/4.jpg" src="/static/images/hero.jpg"><br>
  <img data-src="/static/images/4.jpg" src="/static/images/hero.jpg"><br>
  <img data-src="/static/images/4.jpg" src="/static/images/hero.jpg"><br>
  <img data-src="/static/images/4.jpg" src="/static/images/hero.jpg"><br>
  <img data-src="/static/images/4.jpg" src="/static/images/hero.jpg"><br>
  <img data-src="/static/images/4.jpg" src="/static/images/hero.jpg"><br>
</div>
<script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
<script>
  window.addEventListener("scroll",function(){
    console.log(111);
    _.throttle(lazyLoad,1000)()
  })
    function lazyLoad(){
    let images = document.getElementsByTagName('img')  //不是数组，htmlCollection遍历时要注意      
    console.log("🚀 ~ file: 图片懒加载.html ~ line 34 ~ setTimeout ~ document.body.clientHeight", document.documentElement.clientHeight)
    console.log("🚀 ~ file: 图片懒加载.html ~ line 28 ~ lazyLoad ~ images", images[1].getBoundingClientRect().top)
    console.log("🚀 ~ file: 图片懒加载.html ~ line 28 ~ lazyLoad ~ images", images[2].getBoundingClientRect().top)
      加定时器的目的是为了让images能够遍历到
      setTimeout(()=>{
        for(let i =0;i<images.length;i++){
          console.log(`${i}`,images[i].getBoundingClientRect().top < document.documentElement.clientHeight);
          if(images[i].getBoundingClientRect().top < document.documentElement.clientHeight){   //getBoundingClientRect().top 元素的上边相对浏览器视窗的位置如果小于可视窗口的高度
            images[i].src = images[i].dataset.src;
          }
        }
      },3000)
```

### 2.通过offsetTop < document.documentElement.clientHeight + document.documentElement.scrollTop来实现判断显示时机
!['通过offsetTop'](/assets/img/窗口位置.jpg '通过offsetTop')
```js
      setTimeout(()=>{
        for(let i =0;i<images.length;i++){
          console.log(`${i}`,images[i].offsetTop < document.documentElement.clientHeight + document.documentElement.scrollTop);  
          if(images[i].offsetTop < document.documentElement.clientHeight + document.documentElement.scrollTop){   //getBoundingClientRect().top 元素的上边相对浏览器视窗的位置如果小于可视窗口的高度
            images[i].src = images[i].dataset.src;
          }
        }
      },3000)
```

### 3.通过IntersectionObserver判断交叉阀值来实现
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3.IntersectionObserver API + DataSet API</title>
    <style>

      * {
        margin: 0px;
        padding: 0px;
      }

      body {
        margin: 0px;
        padding: 0px;
      }

      img{
        width: 100%;
        height: 700px;
      }
    </style>
  </head>
  <body>
    <img src="/static/images/hero.jpg" alt="1" />
    <img src="/static/images/hero.jpg" alt="2" />
    <img data-src="/static/images/4.jpg" alt="3" />
    <img data-src="/static/images/4.jpg" alt="4" />
    <img data-src="/static/images/4.jpg" alt="5" />
    <img data-src="/static/images/4.jpg" alt="6" />
    <img data-src="/static/images/4.jpg" alt="7" />
    <script>
      const images = document.querySelectorAll('img')

      // 新的 api  IntersectionObserver
      const observer = new IntersectionObserver((changes) => {
        changes.forEach(change => {
          if (change.isIntersecting) {
            const img = change.target
            // if (img.dataset.src && img.src == "") {
            //   img.src = img.dataset.src
            // }
            setTimeout(()=>{
              img.dataset.src && img.src == "" && (img.src = img.dataset.src)
            },3000)
            observer.unobserve(img)
          }
        })
      })

      images.forEach(img => observer.observe(img))
    </script>
  </body>
</html>

```