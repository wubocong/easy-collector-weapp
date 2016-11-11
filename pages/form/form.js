const app = getApp()
Page({
  data: {
    tags: [],
  },
  bindTagBlur: function (e) {
    let value = e.detail.value.trim(/\s*/)
    if (value) {
      const newTags = this.data.tags
      newTags.push(value)
      this.setData({ tags: newTags })
    }
    return {
      value: '',
    }
  },
  bindTagInput: function (e) {
    let value = e.detail.value
    if (/\s/.test(value.slice(-1)) && (value = value.trim(/\s*/))) {
      const newTags = this.data.tags
      newTags.push(value)
      this.setData({ tags: newTags })
      return {
        value: '',
      }
    }
  },
  goBack: function () {
    wx.navigateBack()
  },
  onSubmit: function (e) {
    app.globalData.sheet.tags = this.data.tags
  },
  onReset: function (e) {
    this.setData({ tags: [] })
  },
  onLoad: function () {
    this.setData({ tags: app.globalData.sheet.tags || [] })
  },
  onReady: () => {
    wx.setNavigationBarTitle({
      title: '一集',
    })
  },
  onHide: function () {
    app.globalData.sheet.tags = this.data.tags
  },
})
