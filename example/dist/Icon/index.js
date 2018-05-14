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
  externalClasses: ['icon-class'],
  attached() {
    console.log(this.data, '333')
  }
});
