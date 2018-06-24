Component({
  properties: {
    styles: {
      type: String,
      value: ''
    }
  },
  externalClasses: ["classes"],
  data: {
    visible: false,
    leaving: false,
    rippleVisible: false
  },
  methods: {

  },
  attached() {
    this.setData({
      visible: true
    })
  },
  moved() {

  },

});
