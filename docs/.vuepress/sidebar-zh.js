module.exports = [{
    sidebarDepth: 1,    // 可选的, 默认值是 1
    collapsable: true, // 可选的, 默认值是 true,false 来让一个组永远都是展开状态。
    displayAllHeaders: false, // 默认值：false 显示所有页面的标题链接
    activeHeaderLinks: true, // 默认值：true 活动的标题链接
   [
    {
      title: '组1',   // 必要的
      path: '/guide/',      // 可选的, 应该是一个绝对路径
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/'
      ]
    },
    {
      title: '组2',
      path: '/nested/',    
      children: [ /* ... */ ]
    }]
  }
]