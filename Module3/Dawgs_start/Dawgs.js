new Vue({
    el: '#app',
    data() {
      return {
        info: null,
        moreData: []
      }
    },
    
    mounted() {
      this.showme('cocker');
    },

    methods: {
      async showme(breed) {
        const response = await axios.get(`https://dog.ceo/api/breed/spaniel/${breed}/images`);
        this.info = response.data;
        this.moreData = this.info.message;
        console.log(this.moreData);
      }
    },
});