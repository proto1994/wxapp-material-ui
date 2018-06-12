Component({
  properties: {
    open: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    }
  },
  methods: {
    openDrawer() {
      this.setData({
        open: true
      })
    },
    closeDrawer(e) {
      this.setData({
        open: e.detail
      })
    }
  },
  externalClasses: ['classes']
});
