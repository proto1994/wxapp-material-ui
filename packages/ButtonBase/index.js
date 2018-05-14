Component({
  properties: {

  },
  externalClasses: ['button-class', 'button-hover-class'],
  data: {
    className: 'child',
    rippleChildClass: 'child',
    rippleClass: 'ripple-bd',
    rippleChildVisible: false
  },
  methods: {
    bindtap(e) {
      // clearTimeout(this.timer);
      // this.setData({
      //   rippleClass: 'ripple-bd',
      //   rippleChildClass: 'child child-pulsate',
      //   rippleChildVisible: true
      // })
      // this.timer = setTimeout(() => {
      //   this.setData({
      //     rippleChildClass: 'child child-leaving ',
      //     rippleChildVisible: false
      //   })
      // }, 1400)
    }
  },

  created() {
    console.log(this.data.className, this.data.color)
  },
  attached() {
    console.log(this.className, this.data.color)
    console.log('attached')
  },
  ready() {
    console.log(this.className, this.data.color)
    console.log('ready')
  },
  moved() {
    console.log('moved')
  },
  detached() {
    console.log('datached')
  }
});
