Component({
  properties: {
    alignContent: {
      type: String,
      value: 'stretch'
    },
    alignItems: {
      type: String,
      value: 'stretch'
    },
    container: {
      type: Boolean,
      value: false
    },
    direction: {
      type: String,
      value: 'row'
    },
    item: {
      type: Boolean,
      value: false
    },
    justify: {
      type: String,
      value: 'flex-start'
    },
    spacing: {
      type: String,
      value: Number
    },
    wrap: {
      type: String,
      value: 'wrap'
    },
    zeroMinWidth: {
      type: Boolean,
      value: false
    },
    column: {
      type: Number,
      value: 0
    },
    styles: {
      type: String,
      value: ''
    }
  },
  externalClasses: ['grid-class'],
});
