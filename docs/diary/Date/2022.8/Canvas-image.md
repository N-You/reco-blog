---
title: Canvas-img图片上传显示
date: 2022-08-23 00:00:00
tags: 
  - HTML5
  - Canvas
categories: 
  - HTML5
---

## 使用canvas实现图片展示功能
### 一.基本介绍
主要的原理是创建一个canvas画布，通过drawImage方法来将图片绘制到画布上<br/>
主要步骤：
 - 创建cavans画布
 - 设置id选择器，通过css来设置画布的显示样式，可以填加背景图来设置一个初始的图片
 - 给canvas标签添加一个点击事件，当我们点击画布区域的时候，通过createElement来创建一个input标签<br/>
   将它挂载到body上，这里可以设置input的type属性为file，样式为display：none，这样就实现了一个点击画布上传的错觉,<br/>
   通过addEventListener('change',fun)给input添加一个监听事件，当有东西上传的时候，可以及时的触发相关的渲染工作，这里<br/>
   需要提醒的是及时的去清除body上的input标签和移除事件的监听
 - 接下来就是定义方法来处理数据并绘制到画布上

### 二.input type="file"
```html
<input type="file" id="input">
```
通过input type=file属性会返回一个FileList对象，FileList对象有一个files属性，用来存储用户上传的文件
```js
document.getElementById('fileItem').files[0];
```
通过files[0]获取被选择的文件

### 三.FileReader.readAsDataURL()
readAsDataURL 方法会读取指定的 Blob 或 File 对象。读取操作完成的时候，readyState 会变成已完成DONE，并触发 loadend（onloadend事件已废除，使用onload代替） 事件，同时 result 属性将包含一个data:URL 格式的字符串（base64 编码）以表示所读取文件的内容。
FileReader.onload，该事件在读取操作完成时触发。这样就可以得到返回的一个data:URL字符串，接下来我们就可以创建一个Image对象，将
data：URL赋值给它的src属性，这样就成功创建了一个图片.

### 四.CanvasRenderingContext2D.drawImage()
 > https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage

### 最后上代码
```js
//创建input标签实现上传功能
function GetImg() {
  inputElement.value = document.createElement('input')
  inputElement.value.setAttribute('type', 'file')
  inputElement.value.style.display = 'none'
  inputElement.value.addEventListener('change', uploadImage, false)
  inputElement && document.body.appendChild(inputElement.value as any)
  inputElement.value.click()
}

function uploadImage(e: any) {
  const reader = new FileReader()
  reader.readAsDataURL(e.target.files[0])
  reader.onload = function (evt: any) {
    // console.log(evt.target.result)
    let image = new Image()
    image.src = evt.target.result
    let canvas: any = document.querySelector('#canvas')
    let context = canvas.getContext('2d')
    image.onload = function () {
      formData.avatarUrl = evt.target.result
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
  }
}
```



