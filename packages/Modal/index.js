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
  externalClasses: ['classes'],
  methods: {
    bindtap: function() {
      this.triggerEvent('onClose');
    }
  }
});
