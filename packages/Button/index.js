import classnames from '../lib/classnames.js';
Component({
  properties: {
    color: {
      type: String,
      value: 'default'
    },
    styles: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: 'medium'
    },
    fullWidth: {
      type: Boolean,
      value: false
    },
    disableRipple: {
      type: Boolean,
      value: false
    },
    mini: {
      type: Boolean,
      value: false
    },
    variant: {
      type: String,
      value: 'flat'
    },
    url: {
      type: String,
      value: ''
    },
    loading: {
      type: Boolean,
      value: false
    },
    openType: {
      type: String,
      value: ''
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    hoverStayTime: {
      type: Number,
      value: 20
    },
    hoverStartTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: 'zh_CN'
    },
    appParameter: {
      type: String,
      value: ''
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: {
      type: String,
      value: ''
    },
    sendMessagePath: {
      type: String,
      value: ''
    },
    sendMessageImg: {
      type: String,
      value: ''
    },
    sendMessageCard: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ''
    }
  },
  externalClasses: ['classes'],
  methods: {
    handleTap(e) {
      if (this.data.url) {
        wx.navigateTo({
          url: this.data.url,
          fail: (e) => {
            console.warn(e)
          }
        })
      }
      this.triggerEvent('click');
    },
    handleGetUserInfo(e) {
      this.triggerEvent('getuserinfo', e);
    },
    handleGetPhoneNumber(e) {
      this.triggerEvent('getphonenumber', e);
    },
    handleError(e) {
      this.triggerEvent('error', e);
    },
    handleOpenSetting(e) {
      this.triggerEvent('opensetting', e);
    },
    handleContact(e) {
      this.triggerEvent('contact', e);
    }
  },
  data: {
    buttonClass: 'm-ui__button',
    buttonHoverClass: 'flat-default__hover'
  },
  attached() {
    const { color, variant, mini, size, fullWidth } = this.data;
    const fab = variant === 'fab';
    const raised = variant === 'raised';
    const outlined = variant === 'outlined';
    const flat = !raised && !fab;
    let buttonClass = classnames(this.data.buttonClass, {
      'raised-button': raised || fab,
      'fab-button': fab,
      'mini': fab && mini,
      'outlined-button': outlined,
      'flat-primary': flat && color === 'primary',
      'flat-secondary': flat && color === 'secondary',
      'raised-primary': !flat && color === 'primary',
      'raised-secondary': !flat && color === 'secondary',
      'flat-disabled': flat && this.data.disabled === true,
      'raised-disabled': !flat && this.data.disabled === true,
      [`size-${size}`]: size !== 'medium',
      'full-width': fullWidth
    });
    let buttonHoverClass = classnames({
      'flat-default__hover': flat && color === 'default',
      'flat-primary__hover': flat && color === 'primary',
      'flat-secondary__hover': flat && color === 'secondary',
      'raised-primary__hover': !flat && color === 'primary',
      'raised-secondary__hover': !flat && color === 'secondary',
      'raised-button__hover': !flat && color === 'default',
    });
    this.setData({
      buttonClass,
      buttonHoverClass
    });
  }
});
