# 正则表达式

## 1. 介绍

> 用来匹配特定的字符串，常用于'密码强度'、'邮箱格式'、'手机号格式'、'身份证格式'......



## 2. JavaScript使用正则

~~~js
let regexp = /ab/;	// 正则表达式

let xuan = 'ab abc abbc'		//	需要检索的字符串

console.log(xuan.match(regexp));	// 检索字符串.match(正则表达式)

// Console Print
//	['ab', index: 0, input: 'ab abc abbc', groups: undefined]
~~~



## 3. 正则表达式

### 3.1 g

它是一个正则修饰符，表示全局匹配，在目标字符串按顺序查找所有满足匹配模式的所有子串，强调的是`所有`而不只是`第一个`。g是单词global(全球的；全世界的；整体的) 的首字母



我们将上一个例子后面加个g试试看



```js
let regexp = /ab/g;

let xuan = 'ab abc abbc acb'

console.log(xuan.match(regexp));

// Console Print
// (3) ['ab', 'ab', 'ab']
```



可以看到正则不再只是匹配第一个满足条件的，而是将后面所有满足条件的都匹配出来



### 3.2 {m,n}

表示连续出现最少m次，最多n次



~~~js
let xuan = 'ab abc abbc abbbc abbbbc'
~~~



我们希望得到里面第一个字符是`a`，接下来是2到4个字符`b`，最后字符是`c`

```js	
let regexp = /ab{2,4}c/g;

let xuan = 'ab abc abbc abbbc abbbbc'

console.log(xuan.match(regexp));

// Console Print
//	(3) ['abbc', 'abbbc', 'abbbbc']
```



### 3.2[abc]

表示某个位置的字符可以是abc中任意一个



~~~js
let xuan = 'a1 a2c a3c a4c'
~~~



我们希望得到里面第一个字符是`a`，接下来的字符可以是1、2、3中任意一个，最后字符是`c`，

~~~js
let regexp = /a[123]c/g;

let xuan = 'a1 a2c a3c a4c'

console.log(xuan.match(regexp));

// Console Print
//	(2) ['a2c', 'a3c']
~~~



~~~js
let xuan = 'a1 a2c a3c a8c aac abc acc ahc'
~~~



但是我们希望得到第二个字符可以是1-8、a-h里的任意字符怎么办?难道要写[12345678abcdefgh]吗。不用怕，如果字符组里面的字符特别多的话，可以使用范围表示法`[1-8a-h]`



~~~js
let regexp = /a[1-8a-h]c/g;

let xuan = 'a1 a2c a3c a8c aac abc acc ahc'

console.log(xuan.match(regexp));

// Console Print
//	(7) ['a2c', 'a3c', 'a8c', 'aac', 'abc', 'acc', 'ahc']
~~~



~~~js
let xuan = 'a1 a8c aac ahc apc'
~~~



我们希望得到得到第二个字符除了是1-8、a-h里的任意字符怎么办？我们可以用到排除字符组[^abc]，表示一个除了a、b、b之外的任意一个字符。字符组第一位放^（脱字符），表示求反的概念。

当然也有相应的范围表示法。

~~~js
let regexp = /a[^1-8a-h]c/g;

let xuan = 'a1 a8c aac ahc apc'

console.log(xuan.match(regexp));

// Console Print
//	['apc']
~~~

