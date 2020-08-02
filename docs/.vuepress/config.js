module.exports = {
	logo: '/programming.png',
	base: '/my-blog/',
	title: "Wayne's blog",
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
		author: 'Waynedeng',
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
		],
		sidebar: {
			'/frontend/': [
				{
					title: '前端积累',
					collapsable: true,
					children: [
						'画一条0.5px的线.md',
						'关于z-index的理解.md',
						'eventLoop.md',
						'各种源码实现.md',
						'前端性能杂谈.md',
						'正则迷你书小结.md',
						'手写promise.md',
						'浏览器缓存机制.md',
						'数组扁平化思路提供.md',
						'垃圾回收.md',
						'从鉴权引发的思考.md',
						'数据侦测.md',
						'Vue3.0初探.md'
					]
				}
			],
			// docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
			'/计算机基础/': [],
			'/不正经记录/': [ '周总结.md', '另开一栏.md' ]
		}
	}
};
