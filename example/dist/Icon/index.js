Component({
  properties: {
    type: {
      type: String,
      value: 'book'
    },
    styles: {
      type: String,
      value: ''
    }
  },
  externalClasses: ['classes'],
  attached() {
    console.log(this.data, '333')
  }
});
