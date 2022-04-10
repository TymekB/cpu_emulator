new Vue({
    el: '#app',
    data: {
        register: [
            {name: "AX", value: "f963"},
            {name: "BX", value: "c5f0"},
            {name: "CX", value: "9e46"},
            {name: "DX", value: "35b1"}
        ],
        message: ""
    },
    methods: {
        move: function (from, to) {
            const fromIndex = this.register.findIndex((el) => el.name === from);
            const toIndex = this.register.findIndex((el) => el.name === to);

            this.register[toIndex].value = this.register[fromIndex].value;
        },
        exchange: function (from, to) {
            const fromIndex = this.register.findIndex((el) => el.name === from);
            const toIndex = this.register.findIndex((el) => el.name === to);
            const temp = this.register[fromIndex].value;

            this.register[fromIndex].value = this.register[toIndex].value;
            this.register[toIndex].value = temp;
        },
    },
    created() {

    }
});