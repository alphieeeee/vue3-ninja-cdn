const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Alpeville',
            age: '25',
            x: 0,
            y: 0,
            books: [
                { title: 'Book 1', author: 'author 1', img: 'assets/1.jpg', isFav: true },
                { title: 'Book 2', author: 'author 2', img: 'assets/2.jpg', isFav: true },
                { title: 'Book 3', author: 'author 3', img: 'assets/3.jpg', isFav: true }
            ]
        }
    },
    mounted() {
        console.log(this.books.map((book) => book.isFav === false).length === this.books.length)
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvents(event, data) {
            console.log(event, event.type)
            data ? console.log(data) : ''
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
            console.log('nothing on favorites', this.checkFavorite)
            console.log('all are favorites', this.checkNotFavorite)
        }
    },
    computed: {
        favBooks() {
            return  this.books.filter((book) => book.isFav)
        },
        notSoFavBooks() {
            return  this.books.filter((book) => !book.isFav)
        },
        checkFavorite() {
            return this.books.filter((book) => book.isFav === false).length === this.books.length
        },
        checkNotFavorite() {
            return this.books.filter((book) => book.isFav === true).length === this.books.length
        }
    }
})

app.mount('#app')