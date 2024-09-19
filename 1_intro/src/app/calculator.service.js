
module.exports = class Calculator {
    constructor() {
        const operand1 = document.querySelector('#operand1');
        const operand2 = document.querySelector('#operand2');
        const tombolTambah = document.querySelector('#tombol-tambah');
        const hasil = document.querySelector('#hasil');
        const error = document.querySelector('#error');
    }

    getInput() {
        return [this.operand1.value, this.operand2.value]
    }
    getResult(angka1, angka2) {
        hasil.innerText = angka1 + angka2;
    }

    onClick(cb) {
        this.tombolTambah.addEventListener('click', cb)
    }
}