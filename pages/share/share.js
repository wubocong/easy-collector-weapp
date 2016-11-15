const app = getApp()
Page({
  data: {
    link: '',
  },
  fixedValue: function (e) {
    const cursor = e.detail.cursor - 1
    return { value: this.data.link, cursor }
  },
  goBack: () => {
    wx.navigateBack()
  },
  onSubmit: () => { },
  onLoad: function () {
    this.setData({ link: app.globalData.sheet.link || '获取链接失败' })
  },
  onReady: () => {
    wx.setNavigationBarTitle({
      title: '一集',
    })
  },
})
