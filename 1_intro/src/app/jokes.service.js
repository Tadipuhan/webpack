const tombolJokes = document.querySelector('#jokes-receh');
const modalBody = document.querySelector('.modal-body');

modul.exports = class JokesService {
    constructor() {
        this.tombolJokes = document.querySelector('#jokes-receh');
        this.modalBody = document.querySelector('.modal-Body');
    }
    
    setModal(str) {
        this.modalBody.innerHTML = str;
    }
    onclick(cb) {
        this.tombolJokes.addEventListener('click', cb);
    }
}