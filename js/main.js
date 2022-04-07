let app = new Vue({
    el: '#app',
    data: {
        register: [
            'f963',
            'c5f0',
            '9e46',
            '35b1',
        ]
    },
    methods: {
        move: function (from, to) {
            this.register[to] = this.register[from];
        },
        exchange: function (from, to) {
            let temp = this.register[from];
            this.register[from] = this.register[to];
            this.register[to] = temp;
            console.log(this.register);
        },
    },
    created() {
        this.exchange(0, 1);
    }
});