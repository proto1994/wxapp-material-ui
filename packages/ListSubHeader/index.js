Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    disableSticky: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: 'default'
    },
    inset: {
      type: Boolean,
      value: false
    }
  },
  externalClasses: ['classes']
});
