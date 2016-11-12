const app = getApp()
Page({
  data: {
    tags: [],
  },
  bindTagBlur: function (e) {
    let value = e.detail.value.trim(/\s*/)
    if (value && !this.data.tags.includes(value)) {
      this.data.tags.push(value)
      this.setData({ tags: this.data.tags })
    }
    return {
      value: '',
    }
  },
  bindTagInput: function (e) {
    let key = e.detail.value
    if (/\s/.test(key.slice(-1)) && (key = key.trim(/\s*/)) && !this.data.tags.includes(key)) {
      this.data.tags.push(key)
      this.setData({ tags: this.data.tags })
      return {
        value: '',
      }
    }
  },
  addPresetTag: function (e) {
    console.log(e)
    const key = e.target.dataset.key
    if (!this.data.tags.includes(key)) {
      this.data.tags.push(key)
      this.setData({ tags: this.data.tags })
    }
  },
  deleteTag: function (e) {
    this.setData({ tags: this.data.tags.filter(value => value !== e.target.dataset.key) })
  },
  goBack: function () {
    wx.navigateBack()
  },
  onSubmit: function (e) {
    app.globalData.sheet.tags = this.data.tags
    wx.navigateTo({
      url: '../share/share'
    })
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
