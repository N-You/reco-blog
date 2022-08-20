---
title: Vue2.0 v-slot解析
date: 2022-08-20
tags:
 - Vue2.0
---

## Vue2.0 v-slot解析
v-slot用于子组件通过插槽向父组件传递参数,v-slot ,冒号(:)后面没有接收参数的时候默认为default，写入参数后为具名插槽
```vue
//子组件
<template>
  <div>
    <div>
      <slot name="header" :user="userName">{{ userName.lastName }}</slot>
    </div>
    <div>
      <slot :user2="userName">{{ userName.lastName }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: {
        firstName: "小",
        lastName: "明",
      },
    };
  },
};
</script>
```
```vue
//父组件
    <p>v-slot测试</p>
    <slotTest>
      <template v-slot:header="slotProps">
        <h1>Here might be a page title || {{ slotProps.user.firstName }}</h1>
      </template>
      <template v-slot="slotProps2">
        123{{ slotProps2.user2.firstName }}
      </template>
    </slotTest>
```
!['这是一个v-slot图片'](/assets/img/v-slot.jpg 'v-slot图片')
 > 子组件通过v-bind(:user="userName")传入参数后，父组件可以随便定义个数(slotProps)来接收子组件传过来的数据，
 通过 . 能接收到子组件传递过来的数据 (slotProps.user.firstName)，这样父组件就能直接显示出来了。

