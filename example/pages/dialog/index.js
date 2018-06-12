Page({
  data: {
    open: false
  },
  bindtap(e) {
    this.setData({
      open: true
    })
  },
  onClose() {
    this.setData({
      open: false
    })
  }
})
