Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    in: {
      type: Boolean,
      value: false
    }
  },
  externalClasses: ['classes'],
  data: {
    height: 0
  },
  methods: {

  },
  ready() {
    const query = this.createSelectorQuery();
    const _self = this;
    query.select('#wrapper').boundingClientRect(function(res) {
      _self.setData({
        height: res.height
      })
    }).exec();
  }
});
