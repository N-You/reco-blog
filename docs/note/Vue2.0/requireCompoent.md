---
title: Vue2.0 动态路由注册
date: 2022-08-20
tags:
 - Vue2.0
---

## 动态路由注册
动态路由注册可以使用 require.context 访问到目录文件夹中的匹配信息，返回的信息中default元素中存储这每个组件通过export default暴露出来的信息。
```js
//reuqireCompent.js
import Vue from 'vue'

const componentContext = require.context('../components',true,/index.vue$/)//获取目录下的所有
//index.vue，文件，true表示会递归查找

componentContext.keys().forEach(componentPath=>{
  console.log(componentContext(componentPath));
  const componentConfig = componentContext(componentPath).default

  Vue.component(componentConfig.name,componentConfig)
})

```
!['reuqireComponentone'](/assets/img/requireComponentone.jpg 'reuqireComponentone')

获取到了返回之后我们可以在每个组件的name中定义一个组件的名称，和components定义名称类似.

接下来在main.js中引入js文件，在每个组件中用驼峰命名法直接使用标签即可使用.
```js
//main.js
import Vue from 'vue'
import App from './App.vue'
import './utils/reuqireCompent'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
```vue
<template>
  <div id="app">
    <CompA />
    <CompB/>
    <CompC/>
  </div>
</template>

<script>
</script>

<style>
</style>
```