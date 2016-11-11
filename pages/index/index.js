//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  createCollection: () => {
    wx.navigateTo({
      url: '../outline/outline'
    })
  },
  viewCollection: () => {
    wx.navigateTo({
      url: '../data/data'
    })
  },
  onLoad: function() {
    console.log('onLoad')
    //调用应用实例的方法获取全局数据
    app.getUserInfo((userInfo) => {
      //更新数据
      this.setData({
        userInfo
      })
    })
  },
  onReady: () => {
    wx.setNavigationBarTitle({
      title: '一集'
    })
  }
})
