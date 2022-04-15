new Vue({
    el: '#app',
    data: {
        register: [
            {name: "AX", value: "f963"},
            {name: "BX", value: "c5f0"},
            {name: "CX", value: "9e46"},
            {name: "DX", value: "35b1"}
        ],
        from: "",
        to: "",
    },
    methods: {
        getRegisterIndexByName: function(name) {
            return this.register.findIndex((el) => el.name === name);
        },
        isDisabled: function() {
            return this.from === this.to && this.from === "" || this.to === "";
        },
        move: function (from, to) {
            const fromIndex = this.getRegisterIndexByName(from);
            const toIndex = this.getRegisterIndexByName(to);
            this.register[toIndex].value = this.register[fromIndex].value;
        },
        exchange: function (from, to) {
            const fromIndex = this.getRegisterIndexByName(from);
            const toIndex = this.getRegisterIndexByName(to);
            const temp = this.register[fromIndex].value;

            this.register[fromIndex].value = this.register[toIndex].value;
            this.register[toIndex].value = temp;
        },
    },
    created() {

    }
});