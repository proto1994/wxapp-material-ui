Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    disablePadding: {
      type: Boolean,
      value: false
    },
    dense: {
      type: Boolean,
      value: false
    },
    subheader: {
      type: Boolean,
      value: false
    }
  },
  externalClasses: ['classes']
});
