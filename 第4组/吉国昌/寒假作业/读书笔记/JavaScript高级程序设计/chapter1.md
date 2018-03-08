### JavaScript高级程序设计读书笔记	2018.02.01

[TOC]

##### 1. JavaScript实现
- 核心 (ECMAScript)
- 文档对象模型 (DOM)
- 浏览器文档模型 (BOM)

###### 1.1 ECMAScript
** ECMAScript是JavaScript的标准(规格)，JavaScript则是ECMAScript的一种实现 **

- ECMAScript与Web浏览器没有依赖关系。实际上，这门语言本身并不包含输入和输出定义，仅是定义了这门语言的基础。Web浏览器仅是可能实现的宿主环境之一，其他的宿主环境包括Node和Adobe Flash等。
- ECMAScript规定的内容：
  - 语法
  - 类型
  - 语句
  - 关键字
  - 保留字
  - 操作符
  - 对象
- ECMAScript的版本
  - 第三版标志着ECMAScript成为了一门真正的编程语言

###### 1.2 文档对象模型(DOM)
** DOM把整个页面映射为一个多层次节点结构 **

```
<html>
	<head>
    	<title>Sample Page</title>
    </head>
    <body>
    	<p>Hello World!</p>
    </body>
</html>
```
```
html
  |------head
  |		 |------title
  |		   		|------Sample Page
  |------body
  	 	 |-------  p
  					|------Hello World!
```

###### 1.3 浏览器对象模型(BOM)
** 从根本上讲，BOM只处理浏览器窗口和框架；但人们习惯上也把所有针对浏览器的JavaScript扩展算作BOM的一部分。 **
- 下面是一些典型的扩展：
  - 弹出新浏览器窗口的功能
  - 移动、缩放和关闭浏览器窗口的功能
  - 提供浏览器详细信息的navigatior对象
  - 提供浏览器所加载页面的详细信息的location对象
  - 提供用户显示器分辨率详细信息的screen对象
  - 对cookies的支持
  - 像XMLHttpRequest和IE的ActiveXObject这样的自定义对象

##### 2. 小结
** JavaScript是一种专为与网页交互而设计的脚本语言， 由下列三个不同的部分组成 **

- ECMAScript，由ECMA-262定义，提供核心语言功能
- 文档对象模型（DOM），提供访问和操作网页内容的方法和接口
- 浏览器对象模型（BOM），提供与浏览器交互的方法和接口