--- 
title: Vue3.0 beta 直播记录
date: 2020-04-21
categories: 
 - frontEnd
tags: 
 - vue
---

> 其实前几天Vue 3.0beta 发布的时候，我就想找个时间去尝试一下。无奈正好撞上了公司项目发布，就只能在茶余饭后看看各大网站上，“保守派”和“创新派”的互怼。这不，今天机会来了，尤大大亲自直播，正好让我有了一个短时间内对Vue3.0有个宏观认识的机会。下面我将简单带大家看一看Vue3.0都新增了哪些有趣的特性！

**注意：本文只是Vue3.0的一个宏观认识，部分知识点暂时还没来得及去实验，请大家只把它当成一个直播目录就行**

## Performance
### 优化diff
众所周知，Vue2.0的时候采用了Virtual Dom来降低渲染页面时的成本，当数据发生变化的时候，会先对虚拟Dom进行一个比对，然后再操作Dom更新页面，我们通常将这个比对算法称为diff算法。Vue3.0对diff进行了部分优化，将静态节点，或者是其他类型的节点打上对应的`hint(标签)`，这样在diff时，将能有更细粒度的比对，对于不是同一个`hint`或是无效`hint`将能够直接剔除掉，减少比对次数。

### Support tree-shaking
> `tree shaking`是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构特性，例如 import 和 export。这个术语和概念实际上是由 ES2015 模块打包工具 rollup 普及起来的

通常，主流的打包工具`webpack，rollup`等，都有插件支持`tree-shaking`，但这都意味着我们需要引入这些打包工具，而Vue3.0支持原生的`tree-shaking`，能够实现`runtime with compiler`版本(`new Vue({})`)的`tree-shaking`兼容，这就意味着一些不带脚手架的项目也能够使用自动检测无用代码的功能，对项目进行优化。

## Composition API
相较于之前的`options API`，3.0更新的Composition API无疑是一个较大的改动，这样的改动很可能改变一个Vue项目的风格。下面我们来看一段代码：
```html
<template>
  <div>
    <span>{{count}}</span>
    <button @click="add"> +1 </button>
  </div>
</template>

```
```js
export default {
    // 状态像hooks一样写入函数中
    setup() {
        const count = ref(0)
        
        const add = () => count.value++
        
        return { count, add }
    }
}

```
之所以引入composition-api，原因是在构建大型组件的时候，往往有很多可复用的逻辑，之前Vue2.0的时候，组件的代码按照`methods，computed，mixins等属性去归类`，在组件不够复杂的时候，这种写法确实很清晰，我们能很清楚的看到一个组件的结构，也能很快的定位到相应的逻辑。而当组件逻辑逐渐复杂起来之后，这种归类方式就不再清晰了，我们往往会跟着逻辑在`methods,computed，data`中反复横跳，这种开发方式可谓是极其低效的。Vue团队考虑到了这一点，采用了类hooks的composition-api，目的就是希望开发者能根据逻辑去组合组件，并且将可复用的逻辑抽离成函数，方便其他地方引入。那么你肯定会问，我用了Vue3.0之后，但有些组件使用之前options的写法更直观，我能不能继续使用呢？答案是肯定的，我们刚开始看Vue文档的第一句话就是：Vue是一个渐进式框架。意思就是，我能够根据项目渐进式的使用Vue所带来的诸多便利，3.0也是这样，你可以同时使用两种api，倒不如说，composition-api就是一个新的api，对之前的特性没有丝毫影响，只是给你提供了更好的解决方案罢了。因为自己还没深入去了解它，这里就先扯这么些皮毛，后面将会专门开一偏文章分享。
这里直接上图让大家清楚的看一下结构的区别：
左侧为options写法，右侧为composition写法
![An image](/my-blog/composition.png)


## TS重写
3.0代码使用TS重写，这就意味着被鸿哥（我导师）嘲讽的vscode站起来了，要比ts代码支持，还真没人比得过微软自家产品，这里就先期待一波，过不了多久就能感受那种一把梭的感觉了。

## 其他细节点
* 尤大大说文档和指南将会在今年中旬与大家见面
* 生态圈已经开始升级
* dev-tools以及IDE插件正在升级中
* 对IE11的支持：Vue3.0采用分两个包的形式，有兼容需求的将会自动退回到之前`Object.defineproptry()`的写法上，而且会有警告提示，开发者无需担心写bug，而无需兼容的则会使用ES6的proxy，真正的元编程，体验肯定不一样。

## 后记
写完这篇文章，已经凌晨了，室友刚加完班回来:rofl:，明天还得上班，希望能早日用上Vue3.0吧，溜了溜了。

