Page({
  data: {
    toggle: false
  },
  bindtap(e) {
    console.log(e, 'eee');
  },
  toggleTap() {
    const toggle = this.data.toggle;
    this.setData({
      toggle: !toggle
    })
  }
})
