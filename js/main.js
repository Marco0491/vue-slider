const app = new Vue({
    el: '#root',
    data: {
        imageCounter: 0,
        carouselImages: [
            {
                titolo: 'Amsterdam',
                descrizione: 'lorem ipsum primo',
                immagine: 'https://cdn.getyourguide.com/img/location/5ffeb0b587f00.jpeg/88.jpg'
            },
            {
                titolo: 'Parigi',
                descrizione: 'lorem ipsum secondo',
                immagine: 'https://www.luoghidiinteresse.it/wp-content/uploads/00-Parigi.jpg'
            },
            {
                titolo: 'Roma',
                descrizione: 'lorem ipsum terzo',
                immagine: 'https://www.roma.com/wp-content/uploads/2021/01/Roma-Roma-com.jpg'
            },
            {
                titolo: 'Londra',
                descrizione: 'lorem ipsum quarto',
                immagine: 'https://www.visitbritain.com/sites/default/files/styles/wysiwyg_image/public/consumer/vb34156199_1100.jpg?itok=8azk9zgC'
            },
            {
                titolo: 'New York',
                descrizione: 'lorem ipsum quinto',
                immagine: 'https://www.viaggi-usa.it/wp-content/uploads/2013/11/cosa-fare-a-new-york.jpg'
            }
        ],
    },
    methods: {
        prevImg: function(elements) {
            console.log('immagine precedente');
            if (this.imageCounter == 0) {
                this.imageCounter = elements.length - 1;
            } else {
                this.imageCounter--;
            };
        },
        nextImg: function(elements) {
            console.log('immagine successiva');
            if (this.imageCounter == elements.length - 1) {
                this.imageCounter = 0
            } else {
                this.imageCounter++;
            };
        }
    }
});