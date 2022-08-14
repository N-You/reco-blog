---
title: ts笔记
date: 2022-06-13
---

## 日常类型
一般情况下TypeScript中的类型是可以通过类型推断得到的，但是有时候我们需要明确的指定类型。
### 1.stirng
```TypeScript
let str:string = 'hello world'
```

### 2.number bigint
bigint和number都表示数字，但是这两个类型不兼容，会抛出错误。
```TypeScript
  let number:number = 123
  let big:bigint = 123
```


### 3.boolean
```TypeScript
  let bool:boolean = true
  let createNewBool:boolean = new Boolean(1)
```

```TypeScript
 let v:void = undefined//在--strinctNullChecks未指定时使用
 ```

 ### 4.undefined和null
undefined和null是所有类型的子类型，可以赋值给其他类型，与void的区别也再于此，void不能赋值给其他类型;当tsconfig.json中的strictNullChecks设置为true时，null和undefined只能赋值给void和他们各自。
```TypeScript
  let u:undefined = undefined
  let n:null = null

  let str:string = u
  let str:string = n

  let num:number = u
  let num:number = n
  ...
```

## 其他类型
### 1.Array
定义数组有两种方式，是否使用数组泛型
```TypeScript
let arr:number[] = [1,2,3]
let arr:Array<number> = [1,2,3]
```
定义多维数组时，同样拥有两种方式
```TypeScript
let arr:number[][] = [[1,2,3],[4,5,6]]
let arr:Array<Array<number>> = [[1,2,3],[4,5,6]]
```
定义联合数据类型
```TypeScript
let arr:(string|number)[] = [1,'2']
```
定义指定对象成员的数组
```TypeScript
interface ArrayObj{
  name:string
  age:number
}

let arr:ArrayObj[] = [{name:'张三',age:18}]
```
### 2.空值void
函数没有返回值的时候可以定义void类型的变量
```TypeScript
function warnUser():void{
  console.log('This is my warning message')
}
```

### 3.never
never 一般表示用户无法达到的类型，如抛出异常或者错误，或者更本没有返回值的函数
```TypeScript
function error(message:string):never{
  throw new Error(message)
}   //never类型的返回值，表示不会出现的值
```

### 4.any
任何类型都可以被归为any类型。any类型相当于类型系统里的顶级类型，对any类型的值执行任何操作都不会报错。一般使用在第三方类型文件的使用，或者任何不确定类型的地方，但建议少用any，它然TypeScript变得没有意义
```TypeScript
let ddd:any = document.getElementById('admin')
//这个其实是一个HTMLDivElement类型的变量，但是当我们不清楚他具体的类型，又不想要他报错，可以使用any类型
```

### 5.unknown
unknown和any主要区别是unknown会更加严格，unknown会对所有类型进行检查，any不会，所有类型都可以归为unknown类型，unkonwn只能赋给any类型和unknown类型本身，any可以分配给任何类型
```TypeScript
let a:unknown
a = 1//ok
a = '2'//ok
a = true//ok
a = Symbol()//ok
a = {}//ok
a = []//ok
a = null//ok
a = undefined//ok
a = document.getElementById('admin')//ok

let v:unknown = a//ok
let v:any = a//ok
let v:boolean = a//false
let v:number = a//false
...
```



## 函数
函数定义有两种方式，一种是函数声明，另一种是函数表达式
### 1.函数声明
```TypeScript
function add(x:number,y:number):number{
  return x+y
}
```
### 2.函数表达式
```TypeScript
let add:(x:number,y:number)=>number = function(x:number,y:number):number{
  return x+y
}
```
函数类型可以通过接口的方式去定义
```TypeScript
interface Add{
  (x:number,y:number):number
}

//使用接口类型
let add:Add = function(x:number,y:number):number{
  return x+y
}
```
### 3.函数可选参数
```TypeScript
//可选参数可以使用（?）来标识
function buildName(firstName:string,lastName?:string):string{
  if(lastName){
    return firstName+' '+lastName
  }elst{
    return firstName
  }
}

buildName('Bob','Adams') // Bob Adams
buildName('Bob') // Bob

//通过使用 ? 来标识一个参数，调用的时候可以不传入该参数，可选参数需要放在必须参数的后面

```
### 4.函数默认值
```TypeScript
  function buildName(firstName:string='Tom',lastName:string='Cat'):string{
    return firstName+' '+lastName
  }

  buildName() // Tom Cat
  buildName('Bob') // Bob Cat

  //默认参数的类型也是可以被推断的
```

### 5.剩余参数
```TypeScript
function push(array,...items:any[]):any[]{
  items.forEach(function(item){
    array.push(item)
  })
  return array
}
push([1,2,3],4,5,6) // [1,2,3,4,5,6]
```

### 6.函数重载
函数重载一般拿来解决想用一个函数实现不同的参数传入，通过不同的类型来实现不同的功能,也就是通过参数来判断返回的类型，这样就可以不用重复的定义多个函数了
```TypeScript
let obj:any = {},
function attr(val:string):void;
function attr(val:number):void;
function attr(val:any):void{
  if(typeof val === 'string'){
    obj.name = val
}else if(typeof val === 'number'){
    obj.age = val
  }else{
    throw new Error('参数类型错误')``
  }
}
```