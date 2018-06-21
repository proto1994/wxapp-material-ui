Page({
  data: {
    chipData: [
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vue.js' }
    ]
  },
  bindtap(e) {
    console.log(e, 'eee');
  },
  handleClick(e) {
    console.log('click');
  },
  handleDelete(e) {
    console.log('delete');
  },
  deleteChip(e) {
    const index = e.target.dataset.index;
    if (this.data.chipData[index].label === 'React') {
      wx.showModal({
        content: 'Why would you want to delete React?! :)'
      });
      return;
    }
    const chipData = this.data.chipData.filter(res => res.key != index);
    this.setData({
      chipData
    })
  }
})
