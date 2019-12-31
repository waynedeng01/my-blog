# JS执行机制

>本来在最开始创建个人博客的时候就想写js执行机制的，由于各种事情搅和，就一直只留了个标题在这里。这不，好几周过去了，终于腾出时间来唠一唠这个被讨论了n次的经典问题了，也好检测一下过去这么久，自己是否真正弄懂了这些问题

## JS事件循环

js是名副其实的单线程语言，这意味着，如果采取正常的方式，‘一口闷’式的从头干到底，那么你将很可能遇到网页加载半天加载不出来的情况。出现这种原因是因为，单线程下后面的代码必须等到前面的代码执行完才会接着执行。然而实际生活中，我们并不会经常需要等待，许多资源都是异步加载得来的，这让单线程的js也有了可以吹爆的特性 -- **异步**

***
下面先来走走流程
1. js会先执行script标签中的代码，同步任务正常执行，遇到异步任务的话先将其加入`EVENT TABLE`中执行
2. 异步任务**执行完毕**后，会将回调函数放入任务队列中等待主线程执行，这里会按照队列先进先出的特性
3. 上述过程不断循环就形成了事件循环

***
上面最基本的事件循环，然而随着js的不断发展，判断执行机制也愈发复杂
接下来补充几点：
* 异步任务又分为宏任务与微任务
    * 宏任务：`setTimeout setInterval script标签中的代码等`
    * 微任务：`promise.then process.nextTick()等`

* `promise`中只有`then`中的代码才是异步，遇到`new Promise`这种可以直接当同步代码执行


::: tip
js在遇到异步任务的时候会判断它是宏任务还是微任务，分别将其加入不同的队列中去。执行一个宏任务，再将这轮宏任务中注册的所有微任务执行完，再接着执行下一个宏任务，一直这样循环。
:::

```js
// 上题
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
// 完整输出 1，7，6，8，2，4，3，5，9，11，10，12
```

再补充：有关`async await`的是一个大坑
> 执行`await`会让出线程，执行函数外的代码，直到异步任务完成，才会执行后面被阻塞的代码

```js
async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

async function async2() {
    console.log("async2");
}

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
    console.log("promise1");
    resolve();
}).then(function() {
    console.log("promise2");
});

console.log("script end");

// script start
// async1 start
// async2
// promise1
// script end

// promise2 和 async1 end 的顺序可能会出现歧义
// promise2
// async1 end
// setTimeout

```
 