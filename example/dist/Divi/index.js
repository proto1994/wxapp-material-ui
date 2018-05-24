Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    avatar: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    delete: {
      type: Boolean,
      value: false
    },
    deleteIcon: {
      type: String,
      value: 'clear'
    }
  },
  externalClasses: ['classes']
});
