Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    open: {
      type: Boolean,
      value: false,
      observer: function(newVal, oldVal) {
        if (!newVal) {
          setTimeout(() => {
            this.setData({exit: true});
          }, 225)
        } else {
          this.setData({exit: false});
        }
      }
    }
  },
  data: {
    exit: true
  },
  externalClasses: ['classes'],
  methods: {
    onClose: function() {
      this.triggerEvent('onClose');
    },
    test: function() {
      console.log('test')
    }
  }
});
