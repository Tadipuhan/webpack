const path = require('path');
const config = require('./webpack.config')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(config, {
    mode: 'production',
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname, relative terhadap dokumen kita
        filename: 'main.[contenthash].js',
        assetModuleFilename: 'img/[name]-[hash][ext]',
        clean: true, // untuk membersihkan main.js yang bertambah ketika kita menambah fitur di dalamnya.
    },
    // plugins: [new HtmlWebpackPlugin({
    //     template: './src/template.html',
    // })],
    plugins: [new MiniCssExtractPlugin({
        filename: 'main.[contenthash].css'
    })],

});
