const app = Vue.createApp({
    data() {
      return {
        url : 'http://www.thenetninja.co.uk',
        showBooks: true,
        books : [
            { title: 'name of the wind', author: 'patrick rothfuss'},
            { title: 'the way of kings', author: 'Brandon sanderson'},
            { title: 'The Final Empire', author: 'Brandon sanderson'},
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