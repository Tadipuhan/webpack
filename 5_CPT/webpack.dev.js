const path = require('path');
const config = require('./webpack.config')
const { merge } = require('webpack-merge');


module.exports = merge(config, {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname, relative terhadap dokumen kita
        filename: 'main.js',
        clean: true, // untuk membersihkan main.js yang bertambah ketika kita menambah fitur di dalamnya.
    },
    watch: true,
});
