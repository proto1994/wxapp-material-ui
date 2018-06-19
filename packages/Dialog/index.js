Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    open: {
      type: Boolean,
      value: false
    },
    fullScreen: {
      type: Boolean,
      value: false
    },
    fullWidth: {
      type: Boolean,
      value: false
    },
    transition: {
      type: String,
      value: ''
    }
  },
  externalClasses: ['classes'],
  methods: {
    onClose: function() {
      this.triggerEvent('onClose');
    }
  }
});
