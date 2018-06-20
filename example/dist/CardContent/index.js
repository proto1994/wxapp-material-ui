import classnames from '../lib/classnames.js';
Component({
  properties: {
    raised: {
      type: Boolean,
      value: false
    },
    styles: {
      type: String,
      value: ''
    },
    last: {
       type: Boolean,
       value: false
    }
  },
  externalClasses: ['classes']
});
