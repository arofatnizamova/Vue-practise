const app = Vue.createApp({
    data() {
        return {
            Products: [{
                    img: '/1.jpg',
                    name: 'Корейский язык',
                    quontaty: 1,
                    price: 100
                },
                {
                    img: '/2.jpg',
                    name: 'Японский язык',
                    quontaty: 1,
                    price: 150
                },
                {
                    img: '/3.jpg',
                    name: 'Немецкий язык',
                    quontaty: 1,
                    price: 350
                },
            ]
        }
    }
})
app.mount('#app')