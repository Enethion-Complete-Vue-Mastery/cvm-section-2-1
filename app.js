const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: 'Marty',
            lastName: 'Doe',
            url: 'https://google.com/',
            rawUrl: '<a href="https://facebook.com/" target="_blank">Facebook</a>',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        },
        updateLastName(msg, event) {
            this.lastName = event.target.value
            console.log(msg)
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20
            }, 2000)
        }
    }
}).mount('#app1')

// setTimeout(() => {
//     vm.firstName = 'Bob'
// }, 2000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')