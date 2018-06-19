Page({
  bindtap(e) {
    console.log(e, 'eee');
  },
  handleTap() {
    console.log('father')
  },
  handleGetUserInfo(e) {
    console.log('handleUserInfo', e)
  },
  handleGetPhoneNumber(e) {
    console.log(e);
  }
})
