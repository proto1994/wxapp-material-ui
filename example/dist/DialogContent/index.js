Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    first: {
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
