new Vue({
    el: '#app',
    data: {
        register: [
            {name: "AX", value: ""},
            {name: "BX", value: ""},
            {name: "CX", value: ""},
            {name: "DX", value: ""}
        ],
        from: "",
        to: "",
    },
    methods: {
        getRegisterIndexByName: function(name) {
            return this.register.findIndex((el) => el.name === name);
        },
        isDisabled: function() {
            return this.from === this.to || this.from === "" || this.to === "";
        },
        move: function (from, to) {
            if(this.isDisabled()) return;

            const fromIndex = this.getRegisterIndexByName(from);
            const toIndex = this.getRegisterIndexByName(to);

            this.register[toIndex].value = this.register[fromIndex].value;
        },
        exchange: function (from, to) {
            if(this.isDisabled()) return;

            const fromIndex = this.getRegisterIndexByName(from);
            const toIndex = this.getRegisterIndexByName(to);
            const temp = this.register[fromIndex].value;

            this.register[fromIndex].value = this.register[toIndex].value;
            this.register[toIndex].value = temp;
        },
        randomizeRegister: function(name) {
            const index = this.getRegisterIndexByName(name);
            this.register[index].value = (Math.floor(Math.random() * 65535) + 4096).toString(16);
        },
    }
});