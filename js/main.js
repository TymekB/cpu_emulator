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
        
    },
    created() {
        this.move(0, 1);
    }
});