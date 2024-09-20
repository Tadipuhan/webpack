// dokumentasi: webpack.js.org/configuration/
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'), // __dirname, relative terhadap dokumen kita
        filename: 'bundle.js'
    }
}
