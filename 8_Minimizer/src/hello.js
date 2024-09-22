import _ from 'lodash';
console.log('Hi, from hello.js')

const mahasiswa = [
    { 
        nama : 'Tata Dico Puji Handoko', 
        email : 'tatadico2002@gmail.com',
        jurusan: 'Manajemen'
    },
    { 
        nama : 'Vanesya Cantika Ismah', 
        email : 'vanesyacantikaxx28@gmail.com',
        jurusan: 'Manajemen'
    },
    { 
        nama : 'Opus Dico', 
        email : 'opus2k23@gmail.com',
        jurusan: 'Manajemen'
    }
];

const mhs = _.find(mahasiswa, {nama: 'Tata Dico Puji Handoko'});
console.log(mhs)