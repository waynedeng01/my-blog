module.exports = {
	logo: '/programming.png',
	base: '/my-blog/',
	title: '阿文的漫漫前端路',
	description: 'A place to record growth',
	plugins: {
		'@vuepress-reco/vuepress-plugin-bgm-player': {
			audios: [
				{
					name: '風の詩 (风之诗)',
					artist: '押尾光太郎 (押尾コータロー)',
					url:
						'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400000Br8Y53R1cnP.m4a?guid=7047792390&vkey=B3B4B08CE18D764BC69F62B85E63875576F2BBA22CCF462C7908E77764A006F419B735391083F5E9B1FEC834EF754383AE010ACB458A4E76&uin=0&fromtag=38',
					cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003xbqA80gmqnt.jpg?max_age=2592000'
				},
				{
					name: 'Distance',
					artist: '伍伍慧 (satoshi gogo)',
					url:
						'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C4000031L0Q00hgVBm.m4a?guid=3917391470&vkey=A2AE5834BE80126448D395F0C3E66C998611707E8CBCFB9D5DF78C757E9E5B9AF684BD0104AAB798C4EE2635BE0628F48B391CDE82C28F8D&uin=0&fromtag=38',
					cover: '"https://y.gtimg.cn/music/photo_new/T002R300x300M000001jozFU0zNaoG.jpg?max_age=2592000"'
				}
			],
			position: {
				top: '100px',
				right: '10px',
				'z-index': '999'
			}
		}
	},
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
					children: [ '/frontend/css/画一条0.5px的线.md' ]
				},
				{
					title: 'js',
					collapsable: true,
					children: [
						// 后缀要加上
						'/frontend/js/eventLoop.md',
						'/frontend/js/各种源码实现.md',
						'/frontend/js/前端性能杂谈.md',
						'/frontend/js/正则迷你书小结.md'
					]
				},
				{
					title: 'Vue',
					collapsable: true,
					children: [ '/frontend/vue/数据侦测.md' ]
				}
			],
			// docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
			'/计算机基础/': [ 'http与浏览器.md', '数据库原理.md', '计算机组成原理.md' ],
			'/周总结/': [ '周总结.md' ]
		}
	}
}
