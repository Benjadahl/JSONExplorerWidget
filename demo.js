var app = new Vue({
  el: "#vueApp",
  data: {
    "JSONobject": {name: "Bob", lastName: "Builder", hat: ["Yellow", "Protect"], age: 25},
    "result": ""
  },
  methods: {
    updateResult: function (selected) {
      this.result = selected;
    }
  }
});
