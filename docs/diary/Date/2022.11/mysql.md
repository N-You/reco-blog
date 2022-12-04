---
title: node-mysql
date: 2022-12-4 12:21:00
tags: 
  - Node.js
categories: 
  - 全栈
---

# Node MySQL部分笔记
## mysql常用命令介绍
首先mysql是一个关系型数据库，它以预定义的关系组织数据，数据存储在一个或多个由列和行构成的表（或“关系”）中，用户可以轻松查看和理解不同数据结构之间的关系。 
 > 在工具中输入SQL命令时要注意大写，并且加分号表示一段命令结束<br/>

 > <font color="red">DML（Data Manipulation Language，数据操作语言）：用于检索或者修改数据。</font><br/>
 >   
    DML包括：  SELECT：用于检索数据；
        INSERT：用于增加数据到数据库；
        UPDATE：用于从数据库中修改现存的数据 
        DELETE：用于从数据库中删除数据。

  > <font color="red"> DDL（Data Definition Language，数据定义语言）： 用于定义数据的结构，比如 创建、修改或者删除数据库对象。</font><br/>
  >  
     DDL包括：DDL语句可以用于创建用户和重建数据库对象。下面是DDL命令：
        CREATE TABLE：创建表
        ALTER TABLE
        DROP TABLE：删除表
        CREATE INDEX
        DROP INDEX

  > <font color="red">DCL（Data Control Language，数据控制语言）：用于定义数据库用户的权限。</font><br/>
  > 
    DCL包括：
        ALTER PASSWORD 
        GRANT 
        REVOKE 
        CREATE SYNONYM

### 一般的执行步骤
登录mysql
 ```
  mysql -u (用户名) -p (输入密码) -h localhost
  //-h指定地址,可以指定本地的localhost，要连接远程服务器时输入ip地址
 ```

 列出所有的数据仓库
 ```
 show databases
 ```

 创建数据仓库
 ```
 create database xxx;
 ```

 删除某个数据仓库
 ```DDL
 drop database xxx;
 ```

 连接某个数据仓库
 ```
 use xxx;
 ```

 进入某个数据仓库后
 展示所有的表格
 ```
 show tables;
 ```

### 数据表格相关操作
创建一个数据表格
```DDL
CREATE TABLE `xxx`(
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `xxx` VARCHAR(255) NOT NULL UNIQUE KEY,
  `xxx` LONGTEXT
) DEFAULT CHARSET=utf8mb4 COLLATE = utf8mb4_unicode_ci

```
> "id"一般设置为组件AUTO-~~~自动增加的意思，PRIMARY KEY表示主键</br>
> "NOT NULL"不为空</br>
> "INT，VARCHAR，LONGTEXT"定义类型长短，longtext比varchar长</br>
> "LONGTEXT"需要设置字符集和整理方法
> "DEFAULT CHARSET=utf8mb4 COLLATE = utf8mb4_unicode_ci"是默认的配置，可以自己更改</br>

向表中添加数据（插入数据）
```DML
INSERT INTO `xxx`(`xxx`,`xxx`)//哪个表的某几项
VALUES
('xxxx','xxx'),
('xxx','xxx');//一一对应
```

查询数据
```DML
SELECT * FROM `xxx` LIMIT xx OFFSET xxx;
```
>  "*" 表示所有<br/>
> LIMIT 设置显示条数，第一个开始<br/>
> OFFSET 偏移量,设置为一就从二开始

```DML
SELECT `xxx` from `xxx` WHERE `xxx`= xx ORDER BY `xxx` DESC
```
> WHERE 设置判断条件 <br/>
> ORDER 排序
> DESC/ASC 降序/升序


更新数据
```DML
UPDATE `xxx`
  SET `xxx` = xxx
  WHERE `xxx` = xxx;
```

删除数据
```DML
DELETE FROM `XXX`
  WHERE `XXX` = XXX
```

修改数据表结构
```DDL 
ALTER TABLE `XXX`
  ADD `XXX` INT(11) DEFAULT NULL;
```

### 定义数据表之间的关系
 添加一个外键并关联其他表(建立关系)
 ```DML
 ALTER TABLE `XXX`
  ADD FOREING KEY ('XXX')//字段名，添加外键
      REFERENCES `XXX`('xxx')//其他表名字段名 关联其他表
      ON DELETE NO ACTION
      ON UPDATE NO ACTION;//删除和更新动作设置为没有动作
 ```

 利用数据关系 首先外键设置初始值
 查找相关数据
 ```DDL
  SELECT * FROM `XXX`
  LEFT JOIN `XXX`//拼接表 外键表名
      ON 'XXX'.'XXX'(外键表名，字段) = 'XXX'.'XXX'(表名，外键对应字段)
 ```