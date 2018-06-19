import classnames from '../lib/classnames.js';
Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: 'primary'
    },
    position: {
      type: String,
      value: 'fixed'
    }
  },
  externalClasses: ['classes']
});
