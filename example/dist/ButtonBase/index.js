Component({
  properties: {
    styles: {
      type: String,
      value: ''
    }
  },
  externalClasses: ["classes"],
  data: {
    className: "child",
    rippleChildClass: "child",
    rippleClass: "ripple-bd",
    rippleChildVisible: false,
    rippleStyles: "",
    visible: false,
    leaving: false,
    rippleVisible: false,
    ripples: []
  },
  methods: {
    handletouchstart(e) {
      this.start(e);
    },
    handletouchend(e) {
      this.stop(e);
    },
    start(e) {
      const center = false;
      const { clientX, clientY } = e.touches[0];
      const query = this.createSelectorQuery();
      const _self = this;
      query
        .select("#js-button-base")
        .boundingClientRect(rect => {
          let rippleX;
          let rippleY;
          let rippleSize;
          if (center) {
            rippleX = Math.round(rect.width / 2);
            rippleY = Math.round(rect.height / 2);
          } else {
            rippleX = Math.round(clientX - rect.left);
            rippleY = Math.round(clientY - rect.top);
          }
          if (center) {
            rippleSize = Math.round(
              Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3)
            );
          } else {
            const sizeX = Math.round(Math.max(Math.abs(rect.width - rippleX), rippleX) * 2 + 2);
            const sizeY = Math.round(Math.max(Math.abs(rect.height - rippleY), rippleY) * 2 + 2);
            rippleSize = Math.round(Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2)));
          }
          const rippleStyles = `width:${rippleSize}px;height:${rippleSize}px;top:${-(
            rippleSize / 2
          ) + rippleY}px;left:${-(rippleSize / 2) + rippleX}px;`;

          this.startTimerCommit = () => {
            this.setData({
              rippleVisible: true,
              rippleStyles: rippleStyles,
              visible: true
            });

            setTimeout(() => {
              this.setData({
                rippleStyles: rippleStyles,
                visible: true,
              })
            }, 550)
            setTimeout(() => {
              this.setData({
                leaving: true
              });
            }, 100);
          };
          this.startTimer = setTimeout(res => {
            this.startTimerCommit();
            this.startTimerCommit = null;
          }, 80);
        })
        .exec();
    },
    stop() {
      this.setData({
        rippleVisible: false,
        leaving: false,
        visible: false
      });
    },
    bindtap(e) {}
  }
});
