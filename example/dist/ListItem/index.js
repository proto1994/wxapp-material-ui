Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    dense: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    disableGutters: {
      type: Boolean,
      value: false
    },
    divider: {
      type: Boolean,
      value: false
    },
    button: {
      type: Boolean,
      value: false
    }
  },
  externalClasses: ['classes']
});
