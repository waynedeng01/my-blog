--- 
title: Promise动手实现
date: 2020-01-31
categories: 
 - frontEnd
tags: 
 - js
---

> 手写`Promise`一直是各大厂的面试热门题，本文将一步一步实现一个简易版本的`Promise`，准备好了吗？要发车了哦！

## 一个常见的promise使用方法
```js
let p = new MyPromise(function(resolve, reject) {
	console.log('start')
	setTimeout(function() {
		resolve('data1')
	}, 2000)
})
p.then(
	(v) => {
		console.log('success： ' + v)
	},
	(v) => {
		console.log('error： ' + v)
	}
)
console.log('end')
```
从上面的代码中，相信能从中总结出几点
* Promise的本质就是一个函数（类）
* Promise的参数是一个包含两个参数的函数，它是立即执行的（可视为同步代码）
* resolve,reject为两个函数，它们的参数可以为任意的value
* Promise的实例对象拥有then()方法

好像暂时发掘不出其他有价值的信息了，那么我们先按照这样的思路开始动手吧

先把大致框架搭起来
```js
function MyPromise(fn) {
    // 在函数体内部首先创建了常量 that，因为代码可能会异步执行，用于获取正确的 this 对象
    const self = this
    // 接下来是一系列的初始化操作
    // value是resolve函数中传入的参数
    self.value = undefined
	self.reason = undefined
	self.status = 'pending'
	self.onResolvedCallbacks = []
	self.onRejectedCallbacks = []
    // 待完善 resolve 和 reject 函数
    // 他们的作用是将状态改变，并循环执行任务队列中的任务
	// 待完善执行 fn 函数
}
```
然后我们需要完善一下resolve()和reject()
```js
function resolve(value) {
		// 符合规范的做法，是只有'pending'状态能够变化成其他状态
		if (self.status === 'pending') {
			self.value = value
			self.status = 'resolved'
			self.onResolvedCallbacks.forEach((fn) => {
				fn()
			})
		}
}
function reject(reason) {
		if (self.status === 'pending') {
			self.reason = reason
			self.status = 'rejected'
			self.onRejectedCallbacks.forEach((fn) => {
				fn()
			})
		}
}

```
接下来我们需要的是会立即执行的函数
```js
// 出于严谨性，我们使用 try-catch 包裹
    try {
        fn(resolve, reject)        
    } catch (error) {
        reject(error)
    }

```
至此我们还需要每一个 promise 对象都拥有的 then 方法，因为我们使用的是函数，所以这里我们将方法添加到原型上

```js
// 注意这里不能使用箭头函数 因为箭头函数会绑定 this
MyPromise.prototype.then = function(onFulfilled, onRejected) {
	const self = this
	if (self.status === 'resolved') {
		onFulfilled(self.value)
	}
	if (self.status === 'rejected') {
		onRejected(self.reason)
    }
    // 如果还处于等待状态，就将函数先放入队列中，等他们的状态改变为相应状态再执行
	if (self.status === 'pending') {
		self.onResolvedCallbacks.push(function() {
			onFulfilled(self.value)
		})
		self.onRejectedCallbacks.push(function() {
			onRejected(self.reason)
		})
	}
}
```

附上完整的代码，符合Promise/A+ 规范的实现后序会上传
```js
// 总共包含这三种状态
// promise 实际上就是一个构造函数

function MyPromise(fn) {
	const self = this

	self.value = undefined
	self.reason = undefined
	self.status = 'pending'
	self.onResolvedCallbacks = []
	self.onRejectedCallbacks = []
	// 待完善 resolve 和 reject 函数
	// 待完善执行 fn 函数

	// 下面实现一下 resolve and reject
	function resolve(value) {
		// 符合规范的做法，是只有'pending'状态能够变化成其他状态
		if (self.status === 'pending') {
			self.value = value
			self.status = 'resolved'
			self.onResolvedCallbacks.forEach((fn) => {
				fn()
			})
		}
	}
	function reject(reason) {
		if (self.status === 'pending') {
			self.reason = reason
			self.status = 'rejected'
			self.onRejectedCallbacks.forEach((fn) => {
				fn()
			})
		}
	}
	// fn 是立即执行的函数包含两个参数
	fn(resolve, reject)
}

// 然后就是每一个 promise 对象都拥有的 then 方法
// 这里不能使用箭头函数的原因是因为 箭头函数会绑定 this
MyPromise.prototype.then = function(onFulfilled, onRejected) {
	const self = this
	if (self.status === 'resolved') {
		onFulfilled(self.value)
	}
	if (self.status === 'rejected') {
		onRejected(self.reason)
	}
	if (self.status === 'pending') {
		self.onResolvedCallbacks.push(function() {
			onFulfilled(self.value)
		})
		self.onRejectedCallbacks.push(function() {
			onRejected(self.reason)
		})
	}
}

let p = new MyPromise(function(resolve, reject) {
	console.log('start')
	setTimeout(function() {
		resolve('data1')
	}, 2000)
})
p.then(
	(v) => {
		console.log('success： ' + v)
	},
	(v) => {
		console.log('error： ' + v)
	}
)
console.log('end')

```
