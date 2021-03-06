module.exports = {
    title: '云云对接说明',
    description: '云云对接过程描述及注意事项',
    base:'/thirdCloudDevice/',

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
          title: 'thirdCloudDevice',
          description: 'Vue-powered nothing Site Generator'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: '三方云设备接入',
          description: '云云对接过程描述及注意事项'
        }
      },

      //代码块显示行号
      markdown: {
        lineNumbers: true
      },

    //多语言皮肤配置
     themeConfig: {
        logo: '/assets/img/logo.png',

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'haier-iot/thirdCloudDevice',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'haier-iot/thirdCloudDevice',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        // 搜索框配置
        search: true,
        searchMaxSuggestions: 10,
        // 最后更新时间
        lastUpdated: 'Last Updated', // string | boolean
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,

        locales: {
          '/': {
            selectText: 'Languages',
            label: 'English',
            ariaLabel: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            serviceWorker: {
              updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
              }
            },
            algolia: {},
             // 定义导航栏
            nav:require('./nav-en'),   // 引入导航栏, ,
            sidebar:require('./sidebar-en'),  // 引入侧边栏
          },
          '/zh/': {
            // 多语言下拉菜单的标题
            selectText: '选择语言',
            // 该语言在下拉菜单中的标签
            label: '简体中文',
            // 编辑链接文字
            editLinkText: '在 GitHub 上编辑此页',
            // Service Worker 的配置
            serviceWorker: {
              updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
              }
            },
            // 当前 locale 的 algolia docsearch 选项
            algolia: {},
            // 定义导航栏
            nav:  require('./nav-zh'),   // 引入导航栏,
            sidebar:require('./sidebar-zh'),  // 引入侧边栏
          }
        }


      }
  }