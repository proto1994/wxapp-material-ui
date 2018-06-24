Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    styles: {
      type: String,
      value: ""
    },
    defaultExpanded: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    expandIcon: {
      type: String,
      value: "expand_more"
    },
    child: {
      type: String,
      value: ""
    },
    expanded: null
  },
  isControlled: 5,
  data: {
    isControlled: null
  },
  externalClasses: ["classes"],
  attached() {
    this.isControlled = this.data.expanded != null;
    if (!this.isControlled) {
      this.setData({
        expanded: this.data.defaultExpanded
      })
    }
  },
  methods: {
    handleChange() {
      if (this.data.disabled) return;
      console.log(this.isControlled)
      // console.log(this.data.expanded, isControlled);
    //  isControlled = this.data.expanded != null;
      if (!this.isControlled) {
        this.setData({
          expanded: !this.data.expanded
        });
      }
      this.triggerEvent("change", { expanded: !this.data.expanded });
    }
  }
});
