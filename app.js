const app = Vue.createApp({
    // Data, functions
    // template: '<h2>Iam The Template</h2>'
    data() {
        return {
            title : 'The final empire',
            author: 'Brandon Sanderson',
            age: 29
        }
    },
})

app.mount('#app')