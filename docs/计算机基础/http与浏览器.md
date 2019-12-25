# 网络基础

## HTTP与HTTPS
```JavaScript
// 简单说 HTTPS 就是建立在SSL上的http
// SSL是一套提供网络通信安全的协议
// 其中包含证书，非对称加密算法，对称加密算法等等

// 另外值得一提的是，http协议的默认端口为80，而HTTPS为443
```

## tcp三次握手，四次挥手

   * 弄清楚传递的数据及数据的深层含义

## tcp与udp的区别

   * tcp提供可靠连接，udp并不提供可靠连接，不保证可靠交付
   * tcp只能是一对一，udp支持一对一也支持一对多
   > 还有很多...

## WebSocket的实现和应用

```javascript
// websocket为html5中新提供的协议
// 其主要的特点就是持久连接，并且是全双工的
// 意味着，无论是浏览器端还是服务端都能作为发出请求的那一方

// 客户端使用websocket，需要在请求头中添加两个字段，用来说明升级协议，并切换

Upgrade:webSocket
Connection:Upgrade


```

## web Quality（无障碍）

> 通常是给`img`等元素加上`alt`属性，让残障人士也可以方便使用

## http中的状态码
* 400状态码产生的原因
> 通常是发送请求的数据不符合后台设置的要求，一般通过`JSON.stringify`来解决

## fetch请求发送post请求时会发送两次的原因
```JavaScript
// 第一次请求实际上是发送了options（返回204）进行预检
// 当判断这次请求安全以后才会发出真正的请求
```

## Cookie、Session、sessionStorage、localStorage的区别

## 一句话概括RESTFUL

```
就是用URL定位资源，用HTTP描述操作
```

## fastclick 解决移动端300ms延迟的原理

## 浏览器缓存机制

## xss，CSRF攻击及防御方法
* xss：跨站脚本攻击

* CSRF：跨站请求伪造（一般是假借登录状态的cookie等用户信息）

## 