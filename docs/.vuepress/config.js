module.exports = {
	logo: '/programming.png',
	base: '/my-blog/',
	title: '阿文的漫漫前端路',
	description: 'A place to record growth',
	plugins: {},
	head: [
		// 页面icon
		[ 'link', { rel: 'icon', href: '/programming.png' } ],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no'
			}
		]
	],
	markdown: {
		lineNumbers: true // 代码块显示行号
	},
	theme: 'reco',
	themeConfig: {
		author: 'dengchunwen',
		startYear: 2019,
		// 右侧头像
		authorAvatar: '/avatar.jpg',
		type: 'blog',
		// 最后更新时间
		lastUpdated: '最后更新时间',
		// 所有页面自动生成侧边栏
		sidebar: 'auto',
		smoothScroll: true,
		sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
		'@vuepress/back-to-top': true,
		// 密钥
		// keyPage: {
		// 	keys: [ 'dengchunwen' ],
		// 	color: '#42b983', // 登录页动画球的颜色
		// 	lineColor: '#42b983' // 登录页动画线的颜色
		// },
		blogConfig: {
			category: {
				location: 2,
				text: 'Category'
			},
			tag: {
				location: 3,
				text: 'Tag'
			}
		},
		nav: [
			{
				text: 'Home',
				link: '/',
				icon: 'reco-home'
			},
			{
				text: 'TimeLine',
				link: '/timeline/',
				icon: 'reco-date'
			},
			{
				text: 'GitHub',
				icon: 'reco-message',
				link: 'https://github.com/010deng'
			}

			// { text: '计算机基础', link: '/计算机基础/http与浏览器.md' },
			// { text: '前端相关', link: '/frontend/' },
			// { text: '周总结', link: '/周总结/周总结.md' }
		],
		sidebar: {
			'/frontend/': [
				{
					title: 'html',
					collapsable: true,
					children: []
				},
				{
					title: 'css',
					collapsable: true,
					children: [ '/frontend/css/画一条0.5px的线.md', '/frontend/css/关于z-index的理解.md' ]
				},
				{
					title: 'js',
					collapsable: true,
					children: [
						// 后缀要加上
						'/frontend/js/eventLoop.md',
						'/frontend/js/各种源码实现.md',
						'/frontend/js/前端性能杂谈.md',
						'/frontend/js/正则迷你书小结.md',
						'/frontend/js/手写promise.md',
						'/frontend/js/浏览器缓存机制.md',
						'/frontend/js/数组扁平化思路提供.md'
					]
				},
				{
					title: 'Vue',
					collapsable: true,
					children: [ '/frontend/vue/数据侦测.md' ]
				}
			],
			// docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
			'/计算机基础/': [ 'http与浏览器.md', '数据库原理.md' ],
			'/周总结/': [ '周总结.md', '另开一栏.md' ]
		}
	}
}
