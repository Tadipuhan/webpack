// dokumentasi: webpack.js.org/configuration/
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'), 
        filename: 'myMain.js',
    }
}
