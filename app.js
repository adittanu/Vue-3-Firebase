const app = Vue.createApp({
    data() {
      return {
        url : 'http://www.thenetninja.co.uk',
        showBooks: true,
        books : [
            { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
            { title: 'the way of kings', author: 'Brandon sanderson', img: 'assets/2.jpg', isFav: false},
            { title: 'The Final Empire', author: 'Brandon sanderson', img: 'assets/3.jpg', isFav: true},
        ]
      }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    },
  })
  
  app.mount('#app')


/* 
  Challange - Add to Favs
  - Attach a click event to each li tag ( for each book )
  - When a user clicks an li, toggle the 'isFav' property of that book
*/