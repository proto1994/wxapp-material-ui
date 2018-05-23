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
    }
  },
  externalClasses: ['button-class'],
  methods: {
    bindtap(e) {
      if (this.data.url) {
        wx.navigateTo({
          url: this.data.url,
          fail: (e) => {
            console.warn(e)
          }
        })
      }
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
    console.log(this.disabled, 'disabled')
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
