module.exports = {
    base: '/my-blog/',
    dest: 'public',
    title: '阿文的漫漫前端路',
    description: 'A place to record growth',
    head: [
        // 页面icon
        ['link', { rel: 'icon', href: '/programming.png' }]
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // 最后更新时间
        lastUpdated: '最后更新时间',
        // 所有页面自动生成侧边栏
        sidebar: 'auto',
        // 仓库地址
        repo: null,
        // 仓库链接label
        repoLabel: 'Github',
        // 编辑链接
        editLinks: true,
        // 编辑链接label
        editLinkText: '编辑此页',
        smoothScroll: true,
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        '@vuepress/back-to-top': true,
        nav: [
            { text: 'Home', link: '/' },
            { text: '计算机基础', link: '/计算机基础/http与浏览器.md' },
            { text: '前端相关', link: '/frontend/' },
            { text: '周总结', link: '/周总结/周总结.md' },
            { text: 'GitHub', link: 'https://github.com/010deng' },
        ],
        sidebar: {
            '/frontend/': [

                {
                    title: 'html',
                    collapsable: false,
                    children: [

                    ]
                },
                {
                    title: 'css',
                    collapsable: false,
                    children: [
                        '/frontend/css/画一条0.5px的线.md'
                    ]
                },
                {
                    title: 'js',
                    collapsable: false,
                    children: [
                        // 后缀要加上
                        '/frontend/js/eventLoop.md',
                        '/frontend/js/各种源码实现.md'
                    ]
                },
                {
                    title: 'Vue',
                    collapsable: false,
                    children: [
                        '/frontend/vue/数据侦测.md'
                    ]
                }
            ],
            // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
            '/计算机基础/': [
                'http与浏览器.md',
                '数据库原理.md',
                '计算机组成原理.md',

            ],
            '/周总结/': [
                '周总结.md'
            ]


        }


    }
}




