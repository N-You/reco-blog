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
  //注意这里不能使用箭头函数
  window.addEventListener("scroll",function(){
    _.throttle(lazyLoad,1000)()
  })
    function lazyLoad(){
    let images = document.getElementsByTagName('img')  //不是数组，htmlCollection遍历时要注意      
    // console.log("🚀 ~ file: 图片懒加载.html ~ line 34 ~ setTimeout ~ document.body.clientHeight", document.documentElement.clientHeight)
    // console.log("🚀 ~ file: 图片懒加载.html ~ line 28 ~ lazyLoad ~ images", images[1].getBoundingClientRect().top)
    // console.log("🚀 ~ file: 图片懒加载.html ~ line 28 ~ lazyLoad ~ images", images[2].getBoundingClientRect().top)
      // 加定时器的目的是为了让images能够遍历到
      setTimeout(()=>{
        for(let i =0;i<images.length;i++){
          console.log(`${i}`,images[i].getBoundingClientRect().top < document.documentElement.clientHeight);
          if(images[i].getBoundingClientRect().top < document.documentElement.clientHeight){   //getBoundingClientRect().top 元素的上边相对浏览器视窗的位置如果小于可视窗口的高度
            images[i].src = images[i].dataset.src;
          }
        }
      },3000)
```

 > document.documentElement属性给你的是html元素，而document.body属性给你的是body元素,window.innerHeight属性返回窗口的高度，而不是内容的高度

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

### 4.img标签的loading="lazy"属性

### 5.vue-lazyload 插件实现

## 二.浏览器中如何实现剪切板复制内容的功能,如何监听剪切板中内容
通过Clipboard API 进行实现
剪切板的内容可以通过navigator.clipboard.readText()来监听

## 三.localhost:3000 与 localhost:5000 的 cookie 信息是否共享
是共享的，cookie是区分端口的，不过浏览器的cookie区分域，不区分端口，也就是说同一个ip下多个端口的cookie是共享的。

## 四.什么是 CSRF 攻击
CSRF就是跨站请求伪造，通过挟持cookie获取信息来进行攻击，攻击者可以通过创建一个ajax请求按钮或者表单。
 - 减轻CSRF攻击可以只使用JSON-api,js发送ajax请求时限制跨域的，一般不能通过简单的from标签来发送JSON,
 - 二是可以禁止跨域请求，
 - 还可以通过检查头部信息来确认是不是你的服务器
XSS攻击通过插入脚本来攻击，CSRF利用的是网站对用户浏览器的信任，XSS攻击利用的是用户对网站的信任。

## 五.如何把 json 数据转化为 demo.json 并下载文件
使用a标签配合download属性来实现,url可以接收一个DataUrl或者ObjectUrl
 > Data URLs，即前缀为 data: 协议的 URL，其允许内容创建者向文档中嵌入小文件。
 URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的 URL,需要传入File，
 blob或者MediaSource
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button class="btn">下载</button>
    <script>
      const btn = document.getElementsByClassName("btn")[0];
      const json = {
        a: 3,
        b: 4,
        c: 5,
      };
      const str = JSON.stringify(json, null, 2);

      function download(url, name) {
        const a = document.createElement("a");
        a.download = name;
        a.rel = "noopener";
        a.href = url;
        // 触发模拟点击
        a.dispatchEvent(new MouseEvent("click"));
        // 或者 a.click()
      }

      btn.onclick = function () {
        // 方案一：Text -> DataURL
        // const dataUrl = `data:,${str}`;
        // download(dataUrl, "demo.json");

        // 方案二：Text -> Blob -> ObjectURL
        const url = URL.createObjectURL(new Blob(str.split("")));
        download(url, "demo1.json");
      };
    </script>
  </body>
</html>

```