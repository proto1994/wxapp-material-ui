Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    align: {
      type: String,
      value: 'inherit'
    },
    color: {
      type: String,
      value: 'default'
    },
    gutterBottom: {
      type: Boolean,
      value: false
    },
    noWrap: {
      type: Boolean,
      value: false
    },
    paragraph: {
      type: Boolean,
      value: false
    },
    variant: {
      type: String,
      value: 'body1'
    }
  },
  externalClasses: ['classes']
});
