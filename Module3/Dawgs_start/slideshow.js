new Vue({
    el: '#app',
    data() {
      return {
        info: null,
        moreData: [],
        selector: 0,
        whichDawg: ''
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
        this.whichDawg = breed;
        this.selector = 0;
        this.slider();
      },
      
      slider() {
        this.selector++;
        if (this.selector >= this.moreData.length) {
            this.selector = 0;
        }
      }
    },
});