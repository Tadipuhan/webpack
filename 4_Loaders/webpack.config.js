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
    module: {
        rules: [
            {
                test: /\.css$/i, // ekstensi file yang akan di compile
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    targets: "defaults",
                    presets: [
                        ['@babel/preset-env']
                    ]
                }
                }
            }
        ],
    },
};
