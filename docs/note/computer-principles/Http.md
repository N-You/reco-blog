---
title: HTTP笔记
date: '2022-06-16 11:47:00'
categories:
 - 笔记
tags:
 - Http
---

## HTTP介绍
  首先，HTTP中文全称是叫做超文本传输协议，它的核心是一个请求/响应模型，简单来说它主要分为三层结构，<font color="red">超文本
  </font>，<font color="red">传输</font>，<font color="red">协议</font>。
  - 超文本：是一种文本格式，它的格式是一个统一的格式，可以用来表示文本，图片，音频，视频等。
  - 传输：传输就是将数据通过一些物理介质，将一个端的信息传输到另一个端。
  - 协议：协议简单来说就是一种规则，它约束了数据的格式，同时它也要求在进行通信是遵循一些网络规则协议。

### 网络模型
网络模型主要分为两种，一种是TCP/IP协议模型，一种是OSI的模型。

#### TCP/IP的网络模型
首先来介绍一下TCP/IP的网络模型，一般可以将它分为三层，<font color="red">应用层</font>，<font color="red">运输层</font>，<font color="red">网络层</font>，<font color="red">链路层</font>，<font color="red">物理层</font>;其中链路层和物理层可以统称为数据链路层。TCP,UDP发生在这个链路层上，HTTP发生在应用层上，TCP和UDP就是负责应用层产生的数据，在记忆这五层模型的顺序时可以简单理解为用户请求了接口，通过运输层将用户的请求以及服务器的数据进行一个交互，通过网络层来将数据传输到目的地，最后通过链路层以及物理层来将用户想要的数据显示到设备上。
![](https://pic4.zhimg.com/80/v2-a0eeeef2d69e44e1434c01f341660a0f_720w.jpg)
![](https://pic3.zhimg.com/80/v2-f3b2c4e97bb49eecd92d6946cc98bba6_720w.jpg)

#### OSI七层模型
OSI网络模型是在TCP/IP的五层模型上另外加了一个表现层和会话层，我个人理解为用来展示网络数据以及会话数据的层。
![](https://pic2.zhimg.com/80/v2-c7258ae8be7f1b3fcad3ec1897cc988d_720w.jpg)


