Page({
  data: {
    expanded: null
  },
  bindtap(e) {
    this.setData({
      expanded: e.detail.expanded ? e.target.dataset.expanded : false
    })
  }
})
