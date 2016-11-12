const app = getApp()
Page({
  data: {
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  formSubmit: function (e) {
    app.globalData.sheet.title=e.detail.value.title
    app.globalData.sheet.outline=e.detail.value.outline
    wx.navigateTo({
      url: '../form/form'
    })
  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
  },
  onReady: () => {
    wx.setNavigationBarTitle({
      title: '一集',
    })
  },
})
