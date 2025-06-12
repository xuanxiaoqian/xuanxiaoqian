

# JavaScript进阶

## 1. 介绍

> JavaScript高级进阶语法



## 2. Promise

### 2.1 介绍

>  简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果

~~~js
const promise = new Promise(function(resolve, reject) {
    // ... some code

    if (/* 异步操作成功 */){
        resolve(value);
} else {
                            reject(error);
}
});
~~~



### 2.2 场景

我们`喝酒`需要20分钟，`洗澡`需要10分钟，代码模拟



~~~js
function drink(fn){
    setTimeout(() => {
        fn("我喝酒了")
    }, 2000);
}

function shower(fn){
    setTimeout(() => {
        fn("我洗澡了")
    }, 1000);
}


drink(function (value){
    console.log(value);
})
shower(function (value){
    console.log(value);
})

// Console Print
//	我洗澡了
//	我喝酒了
~~~



如果我们需要先`喝完酒`才能`洗澡`，聪明的小伙伴会这么写



~~~js
function drink(fn) {
    setTimeout(() => {
        fn("我喝酒了")
    }, 2000);
}

function shower(fn) {
    setTimeout(() => {
        fn("我洗澡了")
    }, 1000);
}


drink(function (value) {
    console.log(value);
    shower(function (value) {
        console.log(value);
    })
})

// Console Print
//	我喝酒了
//	我洗澡了
~~~



这确实是一个解决办法，但是我们后面希望`洗完澡`再`刷视频`，`刷完视频`再`关灯`



~~~js
// ...

function video(fn) {
    setTimeout(() => {
        fn("我刷视频了")
    }, 500);
}

function ulights(fn) {
    setTimeout(() => {
        fn("我关灯了")
    }, 700);
}


drink(function (value) {
    console.log(value);
    shower(function (value) {
        console.log(value);
        video(function (value) {
            console.log(value);
            ulights(function (value) {
                console.log(value);
            })
        })
    })
})

// Console Print
//	我喝酒了
//	我洗澡了
//	我刷视频了
//	我关灯了
~~~



这时候你会发现这些的啥啊，套娃嘛这不是。出现这种情况就叫做`回调地狱`，代码难以维护，但是别担心，我们今天的主角`Promise`就是解决这个的，将上面的代码用Promise替换



~~~js
function drink() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("我喝酒了")
        }, 2000);
    })
}

function shower() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("我洗澡了")
        }, 1000);
    })
}

function video() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("我刷视频了")
        }, 500);
    })
}

function ulights() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("我关灯了")
        }, 700);
    })
}

drink().then(function (res) {
    console.log(res);
    return shower()
}).then(function (res) {
    console.log(res);
    return video()
}).then(function (res) {
    console.log(res);
    return ulights()
}).then(function (res) {
    console.log(res);
})

// Console Print
//	我喝酒了
//	我洗澡了
//	我刷视频了
//	我关灯了
~~~



输出结果跟上面不用Promise一样，小伙伴自己分析一下有什么不一样。首先是方法里面不再需要回调方法了，取而代之的是返回一个`Promise对象`而`Promise对象`里面通过`resolve`将值传递出来



调用则是通过`drink`方法里面返回的Promise的`then`链式调用，多个`then`里面接收的值为上一个`then` return出来的值



### 2.3 基本用法

~~~js
function exercise(time){
    return new Promise(function(resolve,reject){
        if(time > 50){
            resolve("加油锻炼！！！")
        }
        reject("你这个锻炼可不正常啊，得节制")
    })
}

exercise(100).then(function(value){
    console.log(value);
},function(err){
    console.log(err);
})

// Console Print
//	加油锻炼！！！

// 当time = 40
// Console Print：你这个锻炼可不正常啊，得节制
~~~



catch的用法

~~~js
function exercise(time) {
    return new Promise(function (resolve, reject) {
        if (time > 50) {
            resolve("加油锻炼！！！")
        }
        reject("你这个锻炼可不正常啊，得节制")
    })
}

exercise(40).then(function (value) {
    console.log(value);
}).catch(function(err){
    console.log(err);
})

// Console Print
//	你这个锻炼可不正常啊，得节制
~~~



效果和写在`then`的第二个参数里面一样。不过它还有另外一个作用：在执行`resolve`的回调（也就是上面`then`中的第一个参数）时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个`catch`方法中



~~~js
exercise(100).then(function (value) {
    console.log(value);
    console.log(xuanxiaoqian);  // 未定义这个参数
}).catch(function (err) {
    console.log(err);
})

console.log("123");

// Console Print
//	123
//	加油锻炼！！！
//	eferenceError: xuanxiaoqian is not definedat promise_xuan.html:34
~~~



可以看到123还是输出了，这与我们的`try/catch`语句有相同的作用



因为我们都知道JavaScript是从上往下执行，所以这里有小伙伴发现为什么`123`先输出而`加油锻炼`却在后面输出？这里渗透到`任务队列`、`宏观任务`、`微观任务`。我们来看这样一段代码:

~~~js
//	https://www.cnblogs.com/rogerwu/p/10757069.html
console.log("轩小浅");

setTimeout(() => {
    console.log("我肯定先执行!!!");
}, 0);

console.log("那我就应该是后执行");

// Console Print
//	轩小浅
//	那我就应该是后执行
//	我肯定先执行!!!
~~~



理论上延迟时间为0表示的是不延迟、立即执行。但是JS 引擎在执行这段代码时，首先把第一行和第三行代码存入`执行栈`，把第二行代码存入 `任务队列`，只有当执行栈清空以后，主线程才会读取 “任务队列”，这里的 0毫秒实际上表示的意思是：`执行栈`清空以后，主线程立即读取存放在 `任务队列”`中的该段代码，所以输出的结果才这样



~~~js
function xuan1(time) {
    return new Promise((resolve, reject) => {
        time > 10 ? resolve(time) : reject(time)
    })
}


xuan1(20).then(value => {
    console.log(value);
    return xuan1(5)	// 产生错误
}).then(value => {
    console.log(value);
    return xuan1(50)
}).then(value => {
    console.log(value);
}).catch(err => {
    console.error(err);
})

// Console Print
//	20
//	error 5
~~~



它们之中任何一个抛出的错误，都会被最后一个`catch()`捕获。





## 3. var

只要接触过JavaScript的人都知道尽量使用let、const替换掉var，但你真的了解它吗。我们来看这么一段代码

~~~js
if(true){
    var a = 10
    }

function method1(){
    var b = 20
    }

console.log(a);
console.log(b);

//	Console Print
// 	10
//	Uncaught ReferenceError: b is not defined at test.html:37
~~~

你会发现为什么报错了？因为很多人只知道var不支持块级作用域，误把函数作用域也当做块级作用域。var不支持块级作用域，它只支持函数作用域。



那么我们该如何使var拥有块级作用域呢？是否还记得，在一个函数中定义的变量，当这个函数调用完后，变量会被`销毁`，我们是否可以用这个特性来模拟出var的块级作用域呢

~~~js
if(true){
    (function(){
        var a = 10
        })();
}
console.log(a);

//	Console Print
//	Uncaught ReferenceError: a is not defined at test.html:39
~~~



我们把变量定义放到了一个闭包之中，然后调用这个函数，当函数调用完毕，变量a自动销毁，因此，我们在块外便无法访问了。





## 4. 运算符扩展

### ?.

> 左侧的对象是否为`null`或`undefined`。如果是的，就不再往下运算，而是返回`undefined`

~~~js
let xuan ={
    xuan2:{
        xuan3 :123
    }
};

console.log(xuan.xuan2.xuan3);  // 不安全，因为需要判断一下，属性的上层对象是否存在
console.log(xuan && xuan.xuan2 && xuan.xuan2.xuan3);    // 安全
console.log(xuan?.xuan2?.xuan3);    // 安全
~~~



### ??

> 如果某个属性的值是`null`或`undefined`，有时候需要为它们指定默认值

~~~js
console.log(undefined || 123);  // 123
console.log(false || 123);  // 123
console.log(0 || 123);  // 123

console.log(undefined ?? 123);  // 123
console.log(false ?? 123);  // false
console.log(0 ?? 123);  // 0

console.log(xuan?.xuan2?.xuan3 ?? 123);    //  配合?.使用
~~~











































## X. 常用API

### X.1 split

> 将字符串以指定格式或者正则分割并且返回新数组	不影响原字符串

~~~js
let xuan = 'xuan|xiao|qian'

// string.split(a,b)	// a：必需 字符串或正则表达式	|	b：可选 限制数组内容最大长度以1开始

console.log(xuan.split('|',2));

//	Console Print
//	(2) ['xuan', 'xiao']
~~~





### X.2 splice

> 删除指定索引元素并在该处插入新元素	操作原数组

~~~js
let xuan = [1,2,3,4,5]

// array.splice(a,b,itme1,item2...)	// 从a索引开始，截取b个元素，并插入item1、item2...到原数组里

xuan.splice(2,3,    7,8,9);

console.log(xuan);

//	Console Print
//	(5) [1, 2, 7, 8, 9]
~~~



### X.3 slice

> 截取数组索引元素并生成新数组	不影响原数组

~~~js
let xuan = [1,2,3,4,5]

// array.slice(a,b)	// 从a开始，截取到b，如果不写b，则截取到最后面

console.log(xuan.slice(1,3));
console.log(xuan);

//	Console Print
//	(2) [2, 3]
//	(5) [1, 2, 3, 4, 5]
~~~



### X.4 every

> 对数组中每一项运行给定函数，如果该函数对**每一项**返回true,则返回true

~~~js
var ages = [32, 33, 16, 40];

ages.every(function (e){ // 如果里面返回的都是true那么就为true，如果有一个不是则为false
    console.log(e);	// 32
    return false;	// 惰性
})

ages.every(function (e){
    console.log(e);	// 32 33 16 40
    return true;
})
~~~





### X.5 replace

> 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串

~~~js
let str1 = 'xxuan xxiao qian'
let str2 = str1.replace('xx', 'x')
let str3 = str1.replace('xx', 'x').replace('xx', 'x')
let str4= str1.replace(/xx/g, 'x')

console.log(str2);	// xuan xxiao qian
console.log(str3);	// xuan xiao qian
console.log(str4);	// xuan xiao qian
~~~



### X.6 repeat

> 复制字符串

~~~js
let str = 'xuan'
console.log(str.repeat(5));	// 复制五次

//	Console Print
//	xuanxuanxuanxuanxuan
~~~





### X.7 eval

> 如果参数是表达式，则 eval() 计算表达式。如果参数是一个或多个 JavaScript 语句，则 eval() 执行这些语句。

~~~js
let xuan = 'console.log(1+2)'
eval(xuan)

//	Console Print
//	xuan
~~~



妙用：数组求和

~~~js
let xuan = [1,2,3,4,5]

console.log(eval(xuan.join("+")));

//	Console Print
//	15
~~~







## D. 代码技巧

### D.1 判断数值类型

~~~js
let xuan = 123;
let duan = '123';

Console.log(xuan === +xuan) // true
Console.log(duan === +duan) // false


// 判断字符串
Console.log(xuan === xuan+'')

// 判断布尔类型
Console.log(xuan === !!xuan)
~~~





## L. 辨别

### L.1 Map()和Filter()区别

> 不同点在于：当返回值为【布尔函数】时

~~~js
var arr = [1, 2, 3, 4, 5, 6];
var mapArr = arr.map(item => item > 5);
var filterArr = arr.filter(item => item > 5);

console.log(mapArr);	//  [false, false, false, false, false, true]
console.log(filterArr);	//	[6]
~~~

