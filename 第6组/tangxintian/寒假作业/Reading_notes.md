## Reading notes

### chapter1

- JavaScript 与Java 没有关系，只是Netscape公司为了蹭Java的热度改的
- 为了统一标准，欧洲计算机制造商协会以JavaScript1.1为蓝本完成了ECMAScript成为业界实现JavaScript的标准
- 常说的JavaScript实际上包括ECMAScript、DOM与BOM
- ECMAScript没有输入与输出的定义，需要依靠宿主环境
- Netscape公司将JavaScript开源交给Mozilla项目
- ECMAScript提供核心语言功能、DOM提供访问和操作网页内容的方法和接口、BOM提供与浏览器交互的方法和接口。
- 不同浏览器对JavaScript版本的支持程度不一样、实现方法也不一样

### chapter2

- 用`<script>` 标签在HTML中引入JavaScript，有两种引入方式；
  - 用 ` <script>` ` </script>` 环绕JavaScript语句，放在HTML文档的任何地方都可以。但是推荐把JS文件放在页面底部。
  - 用 `<script src = "JavaScript文件路径"></script>`  引入外部的JavaScript文件。


- `<script>` 的`defer` 属性可以让JS文件在HTML加载完之后再加载，提高页面加载速度。

- 用`<noscript>` 提示浏览器不支持JavaScript或是禁用了JavaScript

###chapter3

- JavaScript区分大小写 变量a 与变量A是两个不同的变量。

- JavaScript的标识符的第一个字符必须是字母、下划线或者美元符号，其他字符可以是字母、下划线、美元符号或者数字。

- `//` 与 `/* …… */`  用来注释，`//` 是单行注释 `/* …… */` 是块级注释

- `;` 用来标识语句的结束

- 变量先声明后使用，声明用`var` 加变量名声明

- 变量的数据类型：`undefined`, `null` ,`boolean`,`string`,`number`,`object`,`function`

- 操作符有运算符、位操作符与逻辑运算符

- `===` 是全等操作符，不会出现强制类型转换

- `? :` 条件操作符

- ```javascript
  if(判断){};
  ```

- ```
  for( ;判断; ){}；
  ```

- ```JavaScript
  while(判断){}
  ```

- ```
  for (property in expression) statement
  ```

- ```
  with (expression) statement;
  ```

- ```
  switch (expression) {
  case value: statement
  break;
  case value: statement
  break;
  case value: statement
  break;
  case value: statement
  break;
  default:statement
  }
  ```

- ```
  function 函数名(参数名){statement}
  ```

- 函数用`return` 语句返回值

- 函数不能重载，因为函数的参数是以一个包含零或多个值的数组的形式传递

###chapter4

- 变量是动态的，可以不断改变类型
- 复制变量会新建一个变量，两个变量相互独立
- 由于对象变量储存的是引用，新旧变量的引用指向相同的内容，但是两个对象之间相互独立
- ​