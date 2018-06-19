Page({
  data: {
    open1: false,
    open2: false,
    open3: false,
  },
  bindtap(e) {
    console.log(e);
    this.setData({
      [e.target.dataset.type]: true
    })
  },
  onClose() {
    this.setData({
      open1: false
    })
  },
  onClose2() {
    this.setData({
      open2: false
    })
  },
  onClose3() {
    this.setData({
      open3: false
    })
  }
})
