---
title: 前端面试100道题
date: 2022-08-15
tags:
 - interview
categories:
 - 面试题集中测试
---

 > 题目作者:https://github.com/Advanced-Frontend/Daily-Interview-Question

 ### 第 1 题：写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
总的来说，结论有多个方面<br/>
#### Vue不使用key：
 - 就地复用节点，每个节点都默认为旧的节点，改变后就单方面的对属性就行对比更改，就简单的不复杂的节点来讲，这种方式会在渲染的性能上
  有所提升，因为每个节点都是通过遍历来进行对比更改的，但是如果复用的节点和旧的节点差别太多，涉及顺序之类的不同，就地复用的性能就会下降，它控制的增删节点会比携带key值增加
 - 无法维持组件已有的状态，列如给了一个开关，但是有变更后状态会重置
Vue使用key：
 - 这里有一点，key如果使用index作为比较值的话其实和没有携带差不多，key需要的是唯一的标识，然而index的话代表的是一个位置值，不会跟着
   节点进行更改，同时当使用多个v-for的时候，会出现index重复的情况
 - 维持组件的状态，方便组件的复用，有了唯一的key值以后不会默认的将同一位置的节点认为是就节点，它会通过一个map的遍历去映射出来，如果没有相同的key就会增加节点，它不会将每一个节点都进行比较，这提高了diff的性能
 - 查找节点的性能提升，因为每个节点都有它的唯一key值
 - 节点复用能提高性能，有了节点的复用就不会频繁的去操作每个节点
#### React它的每个节点都必须携带一个key，因为React的每个节点有很小的一个变动整个虚拟节点，Vue使用key不同的是它会对每个属性进行遍历对比更改，Vue的diff更加的细度