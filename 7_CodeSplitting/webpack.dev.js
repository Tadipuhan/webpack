const path = require('path');
const config = require('./webpack.config')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(config, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 3000,
        liveReload: true,
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname, relative terhadap dokumen kita
        filename: '[name].js',
        assetModuleFilename: 'img/[name]-[hash][ext]',
        clean: true, // untuk membersihkan main.js yang bertambah ketika kita menambah fitur di dalamnya.
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'main.[contenthash].css'
    })],
});
