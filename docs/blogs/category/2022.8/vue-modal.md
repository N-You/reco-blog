---
title: Vue模态窗口
date: 2022-08-18
tags:
 - Vue
categories:
 - Vue案例
---

## Vue2.0模态窗口
主要通过Vue提供的$mount挂载,以及extend创建子类来实现
创建好extend后,可以通过$mount挂载到页面上,并且可以通过$el获取到挂载的元素

创建一个模态窗口组件，并且定义几个方法来控制组件显隐
```js
//vue组件
    <script>
export default {
  data() {
    return {
      showFlag: true,
      cancelBtnText: "关闭",
      ConfirmBtnText: "确定",
    };
  },
  methods: {
    show() {
      this.showFlag = true;
      return new Promise((resolve,reject)=>{
        this.resolve = resolve
        this.reject = reject
      })
    },
    hide() {
      this.showFlag = false;
      document.body.removeChild(this.$el);//移除挂载的元素
      this.$destroy();//销毁组件
      //这里可以使用v-if来进行代替，v-show只是用display:none来隐藏的，v-if直接删除了
    },
    cancel() {
      this.hide();
      this.resolve("关闭成功")
    },
    confirm() {
      this.reject("提交")
    },
  },
};
</script>
```

第二步是创建一个模态窗口组件的实例，并且通过$mount挂载到页面上
```js
import Confirm from './confirm.vue'

let newInstance;
const ConfirmInstance = Vue.extend(Confirm) //创建一个子类

//初始化实例
const initInstance = () =>{
  newInstance = new ConfirmInstance()
  document.body.appendChild(newInstance.$mount().$el);//$mount 不传值表示渲染为模板外的函数
  //newInstance..$mount().$el 方法可以获取子类实例的元素,$mount未传参数的时候需要用原生的方法进行挂载
}
```

第三部我们可以通过insatll自定义插件来将组件放到vue实例上
```js
import Confirm from './confirm.vue'
import Vue from 'vue'

let newInstance;
const ConfirmInstance = Vue.extend(Confirm)

const initInstance = () =>{
  newInstance = new ConfirmInstance()
  document.body.appendChild(newInstance.$mount().$el);//$mount 不传值表示渲染为模板外的函数
}

//这里可以直接在main.js中引入然后使用vue.use来安装插件
export default {
  install(Vue){
     let option = (options) =>{
      if(!newInstance) initInstance()
      Object.assign(newInstance, options);//实例化过后放回一个对象，可以合并数据
      //可以传入一些数据来代替data中定义的一些值
      
      return newInstance.show().then((comfirm)=>{
        newInstance = null
        console.log("success",comfirm);
      }).catch((comfirm)=>{
        newInstance = null
        console.log('error',comfirm);
      })//这里因为之前show返回了一个promise异步对象，可以打印信息
      }
    Vue.prototype.$confirm = option
  }
}
```

最后进行测试,通过绑定一个button可以直接调用
```js
    showConfirm() {
      this.$confirm({
        title: "just go go",
      })
    },
```

!['这是一个vue2模态窗图片'](/assets/img/Vue2模态窗.jpg 'vue2模态窗图片')




## Vue3.0模态窗口
Vue3.0引入了一个内置的Teleport组件，我们就可以直接使用to prop来指定传送的目标
```vue
<!--
可定制插槽和 CSS 过渡效果的模态框组件。
-->

<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>
```