Page({
  data: {
    a: 1,
    open: false,
    top: false,
    left: false,
    bottom: false,
    right: false
  },
  bindtap(e) {
    console.log(e, 'eee');
  },
  toggleDrawerLeft(event) {
    console.log(event)
    this.setData({
      left: event.target.dataset.open
    })
  },
  toggleDrawerBottom(event) {
    console.log(event)
    this.setData({
      bottom: event.target.dataset.open
    })
  },
  toggleDrawerTop(event) {
    console.log(event)
    this.setData({
      top: event.target.dataset.open
    })
  },
  toggleDrawerRight(event) {
    console.log(event)
    this.setData({
      right: event.target.dataset.open
    })
  },
  // toggleDrawer = (side, open) => () => {
  //   this.setData({
  //     [side]: open
  //   })
  // }
})
