const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        age: 45,
        x: 0,
        y: 0
      }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, number) {
            console.log(e);
            if(number) {
                console.log(number)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
  })
  
  app.mount('#app')