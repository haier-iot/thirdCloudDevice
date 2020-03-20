module.exports = {
    title: '云云对接说明',
    description: '云云对接过程描述及注意事项',
    base:'/thirdCloudDevice/',

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
	  
	  //gitub地址配置
	    themeConfig: {
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
			editLinkText: '帮助我们改善此页面！'
 
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