const { createApp } = Vue;




createApp({
    data() {
        return {
            titleMain: "Hello World!",
            classes: "text-center text-white my-3",
            pic: "https://picsum.photos/id/1/300/300"
        }
    },
    methods: {
        changeImgClick() {
            this.pic = `https://picsum.photos/id/${this.randomNumGenerator(1, 300)}/300/300`
        },
        randomNumGenerator(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

    }
}).mount("#app")