Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    disableActionSpacing: {
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
