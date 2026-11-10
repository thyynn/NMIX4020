var drinkData = new Vue({
  el: "#drinks",
  data: {
    counter: 0,
    menu: [
      {
        "drink_name": "Iced Matcha Latte",
        "fact": "Matcha gives you a calm energy boost thanks to L-theanine."
      },
      {
        "drink_name": "Lavender Latte",
        "fact": "Lavender syrup adds a floral note that pairs perfectly with espresso."
      },
      {
        "drink_name": "Chai Tea",
        "fact": "Chai blends black tea, milk, and warming spices like cardamom and cinnamon."
      },
      {
        "drink_name": "Iced Americano",
        "fact": "This drink keeps the strength of espresso but lightens it with cold water."
      },
      {
        "drink_name": "Honey Lemon Green Tea",
        "fact": "Honey and lemon add soothing sweetness and tartness to this antioxidant-rich tea."
      }
    ]
  },
  computed: {
    currentDrink() {
      return this.menu[this.counter];
    }
  },
  methods: {
    showDescription(index) {
      this.counter = index;
    }
  }

});