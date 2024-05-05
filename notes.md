## Instructions Below

`HTML
<div id="app">
  <input type="text" v-model="newItem" @keyup.enter="addItem" placeholder="Add an item" />
  <ul>
    <li v-for="(item, index) in items" :key="index" 
        :class="{ strikethrough: item.isDone }"
        @click="toggleStrikethrough(index)"> 
        {{ item.text }}
    </li>
  </ul>
</div>
`

`Vue
new Vue({
  el: "#app",
  data: {
    // Array to hold list items
    items: [],  

    // Value bound to the input field
    newItem: ""
  },
  methods: {
    // Adds a new item to the list
    addItem() {
      if (this.newItem !== '') {
        // Create an object to store item text and state
        this.items.push({ text: this.newItem, isDone: false }); 
        this.newItem = ""; // Reset the input field
      }
    },

    // Toggles the strikethrough for a list item
    toggleStrikethrough(index) {
      this.items[index].isDone = !this.items[index].isDone;
    }
  }
});
`

`CSS
.strikethrough {
  text-decoration: line-through;
}
`




