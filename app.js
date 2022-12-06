const app = Vue.createApp({
    data() {
      return {
        url : 'http://www.thenetninja.co.uk',
        showBooks: true,
        books : [
            { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg'},
            { title: 'the way of kings', author: 'Brandon sanderson', img: 'assets/2.jpg'},
            { title: 'The Final Empire', author: 'Brandon sanderson', img: 'assets/3.jpg'},
        ]
      }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    },
  })
  
  app.mount('#app')