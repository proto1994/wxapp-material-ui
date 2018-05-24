Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    absolute: {
      type: Boolean,
      value: false
    },
    inset: {
      type: Boolean,
      value: false
    },
    light: {
      type: Boolean,
      value: false
    }
  },
  externalClasses: ['classes']
});
