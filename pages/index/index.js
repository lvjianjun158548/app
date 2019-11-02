//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    icon_pic: [{ src: 'https://m.boxuegu.com/web/images/index/course.png', text: '就业课' },
    { src: 'https://m.boxuegu.com/web/images/index/mircoCourse.png', text: '提升课' },
    { src: 'https://m.boxuegu.com/web/images/index/freeMicroCourse.png', text: '免费课' },
    { src: 'https://m.boxuegu.com/web/images/index/courseType.png', text: '课程分类' },
    ],
    class_list:[{src: 'https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png', title: '就业课',cont:'werew',person:123,price:234},
    {src: 'https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png', title: '就业课',cont:'werew',person:123,price:234},
    {src: 'https://file.boxuegu.com/3940be1c755a44eeb8e2e0aaf984756e.png', title: '就业课',cont:'werew',person:123,price:234},
    {src: 'https://file.boxuegu.com/6c0ffe21a06d421d90be8a0061c14c1a.png', title: '就业课',cont:'werew',person:123,price:234}
  ]
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
