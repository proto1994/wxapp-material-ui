Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    lazyLoad: {
      type: Boolean,
      value: false
    }
  },
  externalClasses: ['classes']
});
