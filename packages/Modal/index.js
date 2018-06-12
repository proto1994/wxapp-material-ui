Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    open: {
      type: Boolean,
      value: false
    }
  },
  data: {
    exit: false
  },
  ready() {
    this.setData({
      exit: true
    })
  },
  externalClasses: ['classes'],
  methods: {
    bindtap: function() {
      this.triggerEvent('onClose');
    },
    test: function() {
      console.log('test')
    }
  }
});
