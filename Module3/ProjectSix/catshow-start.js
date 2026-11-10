Vue.component('cat-show', {
  props: ['breed'],
  data() {
    return {
      allofit: [],
      i: 0,
      image: { url: '' },
      thename: '',
      description: '',
      temperament: '',
      origin: '',
      intelligence: 0,
      childFriendly: 0,
      strangerFriendly: 0,
      dogFriendly: 0,
      energyLevel: 0
    };
  },
  async created() {
    await this.loadNextImage(this.breed);
  },
  methods: {
    async loadNextImage(breedID) {
      axios.defaults.headers.common['x-api-key'] = 'live_A29L5ObW8hvVZXreW3qrMbDS7w3qaVi3JWeaJQjKM0hkWvAY9SnbTN6Tfh62hrHq';
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID,
        { params: { limit: 10, size: 'full' } }
      );

      if (!response.data.length) return;
      const firstId = response.data[0].id;
      const response2 = await axios.get('https://api.thecatapi.com/v1/images/' + firstId);
      if (!response2.data.breeds || !response2.data.breeds.length) return;
      this.thename = response2.data.breeds[0].name;
      this.description = response2.data.breeds[0].description;
      this.temperament = response2.data.breeds[0].temperament;
      this.origin = response2.data.breeds[0].origin;

      this.intelligence = response2.data.breeds[0].intelligence;
      this.childFriendly = response2.data.breeds[0].child_friendly;
      this.strangerFriendly = response2.data.breeds[0].stranger_friendly;
      this.dogFriendly = response2.data.breeds[0].dog_friendly;
      this.energyLevel = response2.data.breeds[0].energy_level;

      this.allofit = response.data;
      this.i = 0;
      this.slideshow();
    },
    slideshow() {
      if (!this.allofit.length) return;
      if (this.i >= this.allofit.length) this.i = 0;
      this.image = this.allofit[this.i];
      this.i++;

    }
  },
  watch: {
    breed(newBreed) {
      this.loadNextImage(newBreed);
    }
  },

  template: `
    <section>
    <div class="parent">
    <div class="container">
     <h2>{{ thename }}</h2>
     <p><strong>Temperament:</strong> {{ temperament }}</p>
     <p><strong>Origin:</strong> {{ origin }}</p>
     <p>{{ description }}</p>
     <button id="next" class="next-btn" @click="slideshow">Next Image</button>
       <img v-if="image && image.url" class="cat-image" :src="image.url" alt="Cat image">
       <p v-else class="muted">No image yet.</p>
    </div>
    
    <div class="stats">
    <h2>Stats</h2>
     <p><strong>Intelligence:</strong> {{ intelligence }}/5</p>
     <div class="bar" :style="{ width: intelligence * 20 + '%' }"></div>

     <p><strong>Child Friendly:</strong> {{ childFriendly }}/5</p>
     <div class="bar" :style="{ width: childFriendly * 20 + '%' }"></div>

     <p><strong>Stranger Friendly:</strong> {{ strangerFriendly }}/5</p>
     <div class="bar" :style="{ width: strangerFriendly * 20 + '%' }"></div>

     <p><strong>Dog Friendly:</strong> {{ dogFriendly }}/5</p>
     <div class="bar" :style="{ width: dogFriendly * 20 + '%' }"></div>

     <p><strong>Energy Level:</strong> {{ energyLevel }}/5</p>
     <div class="bar" :style="{ width: energyLevel * 20 + '%' }"></div>
     </div>
     </div><br>
   </section>
 `
});

new Vue({
  el: '#app',
  data: {
    title: 'Cat Slideshow',
    whichcat: 'abob'
  }
});
