let vm = Vue.createApp({
  data() {
    return {
      items: [],
      newItem: "",
    };
  },
  methods: {
    addItem() {
      if (this.newItem !== "") {
        this.items.push({text: this.newItem, isDone: false} );
        this.newItem = "";
      }
    },
    toggleStrikethrough(index) {
        this.items[index].isDone = !this.items[index].isDone;
      },
  }
}).mount("#app");
