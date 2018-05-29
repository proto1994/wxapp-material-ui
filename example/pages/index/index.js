Page({
  data: {
    open: false
  },
  bindtap(e) {
    console.log(e, 'eee');
  },
  toggleDrawer(e) {
    this.setData({
      open: e.target.dataset.open
    })
  },
  closeDrawer(e) {
    this.setData({
      open: e.detail
    })
  }
})
