const tombolJokes = document.querySelector('#jokes-receh');
const modalBody = document.querySelector('.modal-body');

export class JokesService {
    constructor() {
        this.tombolJokes = document.querySelector('#jokes-receh');
        this.modalBody = document.querySelector('.modal-body');
    }
    
    setModal(str) {
        this.modalBody.innerHTML = str;
    }
    onClick(cb) {
        this.tombolJokes.addEventListener('click', cb);
    }
}