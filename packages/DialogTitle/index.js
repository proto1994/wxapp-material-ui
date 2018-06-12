Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    disableTypography: {
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
