const app = getApp()
Page({
  data: {
    tags: [],
    title: '',
    outline: '',
  },
  onReady: () => {
    wx.setNavigationBarTitle({
      title: '一集',
    })
  },
  onLoad: function () {
    this.setData({ tags: app.globalData.sheet.tags || [], title: app.globalData.sheet.title || '', outline: app.globalData.sheet.outline || '' })
  },
  onHide: function () {
    app.globalData.sheet = { tags: this.data.tags, title: this.data.title, outline: this.data.outline }
  },
  onUnload: function () {
    app.globalData.sheet = { tags: this.data.tags, title: this.data.title, outline: this.data.outline }
  },
  includes: function (value) {
    for (let i = this.data.tags.length - 1; i >= 0; i--) {
      if (this.data.tags[i] === value) {
        return true
      }
    }
    return false
  },
  bindTagBlur: function (e) {
    let value = e.detail.value.trim(/\s*/)
    if (value && !this.includes(value)) {
      this.data.tags.push(value)
      this.setData({ tags: this.data.tags })
    }
    return {
      value: '',
    }
  },
  bindTagInput: function (e) {
    let key = e.detail.value
    if (/\s/.test(key.slice(-1)) && (key = key.trim(/\s*/)) && !this.includes(key)) {
      this.data.tags.push(key)
      this.setData({ tags: this.data.tags })
      return {
        value: '',
      }
    }
  },
  bindOutlineBlur: function (e) {
    this.setData({ outline: e.detail.value.trim() })
  },

  bindTitleBlur: function (e) {
    this.setData({ outline: e.detail.value.trim() })
  },
  formSubmit: function (e) {
    app.globalData.sheet = { title: e.detail.value.title, outline: e.detail.value.outline, tags: this.data.tags }
    wx.navigateTo({
      url: '../share/share'
    })
  },
  formReset: function (e) {
    this.setData({ tags: [] })
  },
  addPresetTag: function (e) {
    const key = e.target.dataset.key
    if (!this.data.tags.includes(key)) {
      this.data.tags.push(key)
      this.setData({ tags: this.data.tags })
    }
  },
  deleteTag: function (e) {
    this.setData({ tags: this.data.tags.filter(value => value !== e.target.dataset.key) })
  },
})