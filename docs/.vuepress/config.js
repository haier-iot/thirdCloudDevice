module.exports = {
    title: '云云对接说明',
    description: '云云对接过程描述及注意事项',
    base：'/thirdCloudDevice/',

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
          title: 'nothing',
          description: 'Vue-powered nothing Site Generator'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: '云云对接说明',
          description: 'Vue 云云对接过程描述及注意事项'
        }
      },
      //多语言皮肤配置
      themeConfig: {
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
            nav: [
              { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
            ],
            sidebar: {
              '/': [/* ... */],
              '/nested/': [/* ... */]
            }
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
            nav: [
              { text: '嵌套', link: '/zh/nested/' }
            ],
            sidebar: {
              '/zh/': [/* ... */],
              '/zh/nested/': [/* ... */]
            }
          }
        }
      }
  }