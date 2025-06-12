module.exports = {
    smoothScroll: true, //点击侧边栏二级标题滚动效果
    collapsable: true, // 可折叠
    // displayAllHeaders: true, // 默认展开所有二级标题
    sidebarDepth: 4, // 标题深度


    nav: [
        { text: '主页', link: '/' },
        {
            text: '个人笔记',
            items: [{
                text: '前端系',
                items: [
                    { text: 'CSS', link: '/CSS/' },
                    { text: 'JavaScript', link: '/JavaScript/' },
                ]
            },

            {
                text: '后端系',
                items: [
                    { text: 'Java', link: 'https://google.com' },
                ]
            },
            {
                text: '工具系',
                items: [
                    { text: '正则表达式', link: '/Regexp/' },
                    { text: '链接大全', link: '/NoteLink/' },
                ]
            }, {
                text: '面试系',
                items: [
                    { text: '前端面试', link: '/VsCodePlug/' },
                    { text: '力扣解题', link: '/LeetCode/' },
                ]
            },
            {
                text: '中间件',
                items: [
                    { text: 'MySQL', link: '/MySQL/' },
                ]
            },
            ]
        }
    ],
    sidebar: {
        '/Regexp/': [
            '',
        ],
        '/MySQL/': [
            '',
        ],
        '/JavaScript/': [
            '',
        ],
        '/LeetCode/': [
            '',
        ],
        '/NoteLink/': [
            '',
        ],
    }


}