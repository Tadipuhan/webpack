const cekInputValid = require('./utils/cekInputValid')

modul.exports = class AlertService {
  constructor() {
    this.error = document.querySelector('#error')
  }
  
  tampilkanErrorPenjumlahan = (input, angka) => {
    const hasil = input.reduce((pesan, nilai, index) => {
      if (cekInputValid(angka[index])) {
        return pesan + '';
      } else {
        return pesan + `${nilai} itu bukan angka! `;
      }
    }, 'Silahkan masukkan angka yang benar: ');
  
    error.classList.remove('d-none');
    error.innerText = hasil;
  };
  
  sembunyikanError = () => error.classList.add('d-none');
}