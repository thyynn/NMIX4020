const drinkData = Vue.createApp({
  data() {
    return {
        data: {
            firstName: "Cafe",
            lastName: "De Claire"
        },
    }
  },
  computed: {
    cafeName() {
      return this.firstName + " " + this.lastName;
    }
  }
});

drinkData.mount("#drinks");
