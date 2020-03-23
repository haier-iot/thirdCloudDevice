module.exports = [
        { text: '首页', link: '/' },
        { text: '官方平台',  ariaLabel: '官方平台介绍',
            items: [
              { text: '海尔智家', link: 'https://www.haier.com/smarthome/' },
              { text: '海尔优家', link: 'http://www.haieruplus.com' },
              { text: '海极网', link: 'http://www.haigeek.com' },
            ]
        },
        { 
          text: '平台文档',
          ariaLabel: '其他平台文档',
          items: [
            { text: '设备接入', 
            items: [
              { text: '概况', link: 'https://haier-iot.github.io/userGuide/' },
              { text: '直连设备', link: 'https://haier-iot.github.io/userGuide/#/zh-cn/DeviceGuide/directDevice/overView' },
              { text: '类直连设备', link: 'https://haier-iot.github.io/userGuide/#/zh-cn/DeviceGuide/CloudDevice/overView' },
              { text: '云云对接', link: 'https://haier-iot.github.io/userGuide/#/zh-cn/DeviceGuide/Cloud2Cloud/overView' },
          ]
          },
            { text: 'IOT服务', 
              items: [
                { text: '用户中心', link: 'https://haier-iot.github.io/doc/#/zh-cn/AccountManage' },
                { text: '设备中心', link: 'https://haier-iot.github.io/doc/#/zh-cn/DevicesManage' },
                { text: '家庭中心', link: 'https://haier-iot.github.io/doc/#/zh-cn/FamilyManage' },
                { text: '消息中心', link: 'https://haier-iot.github.io/doc/#/zh-cn/MessageManage' },
                { text: '场景中心', link: 'https://haier-iot.github.io/doc/#/zh-cn/IFTTTManage' },
              ]
          }
          ]
         },
        { text: '服务文档', link: 'https://haier-iot.github.io/doc/' }, 
]