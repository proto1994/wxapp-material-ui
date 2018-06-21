Component({
  properties: {
    styles: {
      type: String,
      value: ''
    },
    avatar: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    delete: {
      type: Boolean,
      value: false
    },
    deleteIcon: {
      type: String,
      value: 'cancel'
    }
  },
  methods: {
    handleTap: function(e) {
      this.triggerEvent('click', e);
    },
    handleDelete: function(e) {
      this.triggerEvent('delete', e);
    }
  },
  externalClasses: ['classes']
});
