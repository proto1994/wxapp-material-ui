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
    anchor: {
      type: String,
      value: 'left'
    },
    elevation: {
      type: Number,
      value: 16
    },
    variant: {
      type: String,
      value: 'temporary'
    },
    onClose: null
  },
  methods: {
    onClose(e) {
      this.triggerEvent('onClose', false);
    }
  },
  externalClasses: ['classes']
});
