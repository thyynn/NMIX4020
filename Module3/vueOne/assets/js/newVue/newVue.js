const header = Vue.createApp({
 
  data() {
 
    return {
 
      yourName: 'Thy Nguyen',
 
      description: 'Pusheen Cat',
 
      link1: 'Introduction',
 
      link2: 'My Portfolio',
 
      link3: 'Learn About Me',
 
      link4: 'Contact Me',
 
      link5: 'A Very Important List',

      link6: 'Conditional',

      link7: 'Functions',
 
      avatar: 'images/pusheen2.png'
 
    }
 
  } 
 
})

header.mount('#header')

const portfolio = Vue.createApp({
  data() {
    return {
      portfolioTitle: "You can never have too many pusheen cats!",
      image1: "images/pusheen1.png",
      imgText1: "Pusheen One",
      image2: "images/pusheen3.jpg",
      imgText2: "Pusheen Two",
      image3: "images/pusheen4.jpg",
      imgText3: "Pusheen Three",
      image4: "images/pusheen5.png",
      imgText4: "Pusheen Four",
      image5: "images/pusheen6.jpg",
      imgText5: "Pusheen Five",
      image6: "images/pusheen7.jpg",
      imgText6: "Pusheen Six",
      portfolioText: "Cats galore!"
    }
  }
})

portfolio.mount('#portfolio')

const list = Vue.createApp({
  data() {
    return {
      listTitle: "My Favorite Cats",
      favorites: ["Pusheen", "Pip", "Grumpy Cat", "Nyan Cat", "Stormy"]
    }
  }
})

list.mount('#list')

const conditional = Vue.createApp({
  data() {
    return {
      teacherName: "",
      favoriteColor: ""
    }
  }
})

conditional.mount('#conditional')

const getColor = Vue.createApp({
  data() {
    return {
      bgColor: '',
      colors: ['red', 'green', 'blue', 'purple', 'gold']
    }
  },
  methods: {
    changeColor(color) {
      this.bgColor = color
    }
  }
})

getColor.mount('#function')