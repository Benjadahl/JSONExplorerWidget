Vue.component("jsonexplorer", {
  data: function () {
    return {
      selected: ""
    };
  },

  props:['object'],

  render: function (createElement) {
    var self = this;
    let options = [];
    //Get the key for each value in the object
    for (var key in this.object) {
      options.push(createElement("option", key));
    }

    return createElement("select", {
      on: {
        change: function (event) {
          self.selected = event.target.value;
        }
      }
    },
    options);
  },

  created: function () {
    this.selected = Object.keys(this.object)[0];
  },

  watch: {
    selected: function () {
      this.$emit("new-item-selected", this.object[this.selected]);
    }
  }
});
