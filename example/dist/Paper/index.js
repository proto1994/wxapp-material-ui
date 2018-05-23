Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    square: {
      type: Boolean,
      value: false
    },
    elevation: {
      type: Number,
      value: 2
    }
  },
  externalClasses: ['paper-class', 'card-class', 'app-bar-root', 'app-bar-color', 'app-bar-position'],
});
