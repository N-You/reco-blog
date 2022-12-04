---
title: git 笔记
date: 2022-12-3 00:00:00
categories: 
  - GIT
---

# GIT命令笔记
## 初始化和连接远程仓库
```git 
git init //初始化git
git branch -M master//创建主分支为master
git remote add origin [url] //连接远程仓库origin
git remote -v //查看连接信息
git status //查看文件提交状态
git add ./git add --all //提交所有文件到暂存区
git commit -m 'xxx'//设置版本信息到本地仓库
git push origin master //提交项目到远程仓库到远程的master分支上
git pull//拉取远程仓库上的项目
git fetch//拉取远程仓库上的项目，对比pull少了一个merge合并
```

## 分支管理
```git
git branch//查看本地分支
git branch -a //查看本地及远程仓库的分支
git checkout //选择分支
git checkout -b //创建并选择该分支
git merge //合并哪个分支
git rebase //变基 和merge的区别是merge是合并，rebase是忽略自己提交的一些版本然后合并,可以解决一些冲突
git push origin --delete //删除远程分支
git branch -d //删除分支
```

## 版本管理
```git
git log //查看所有版本
git log --oneline //查看本分支上的版本信息
git reset HEAD~//放弃本次版本回到上次
git reset HEAD~ [file] //回退文件到上一个版本
git reset //回退到指定版本
git diff //显示当前代码和暂存区的区别
git diff HEAD //显示和最新版本的差别
```