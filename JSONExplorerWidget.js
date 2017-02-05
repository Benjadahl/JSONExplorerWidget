Vue.component("jsonexplorer", {
  props:['object'],

  data: function () {
    return {
      selected: Object.keys(this.object)[0]
    };
  },

  template:"<select v-model='selected'><option v-for='(value, key) in object'>{{ key }}</option></select>",

  created: function () {
    this.$emit("new-item-selected", this.object[this.selected]);
  },

  watch: {
    selected: function () {
      this.$emit("new-item-selected", this.object[this.selected]);
    }
  }
});
