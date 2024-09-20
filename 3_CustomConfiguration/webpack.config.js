// dokumentasi: webpack.js.org/configuration/
const { watch } = require('fs');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'), // __dirname, relative terhadap dokumen kita
        filename: 'bundle.js',
    },
    watch: true,
    devtool: false,
}
