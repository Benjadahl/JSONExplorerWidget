var app = new Vue({
  el: "#vueApp",
  data: {
    "JSONobject": {
      name: "Bob",
      lastName: "Builder",
      hat: ["Yellow", "Protect"],
      age: 25,
      child: {
        name: "ChildName",
        lastName: "ChildLastName",
        age: 5
      }
    },
    "result": ""
  },
  methods: {
    updateResult: function (selected) {
      this.result = selected;
    }
  }
});
