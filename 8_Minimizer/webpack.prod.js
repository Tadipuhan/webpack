const path = require('path');
const glob = require("glob");
const config = require('./webpack.config')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


const PATHS = {
    src: path.join(__dirname, "src"),
};

module.exports = merge(config, {
    mode: 'production',
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname, relative terhadap dokumen kita
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'img/[name]-[hash][ext]',
        clean: true, // untuk membersihkan main.js yang bertambah ketika kita menambah fitur di dalamnya.
    },
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin(),
        ],
    },

    // plugins: [new HtmlWebpackPlugin({
    //     template: './src/template.html',
    // })],
    plugins: [new MiniCssExtractPlugin({
        filename: 'main.[contenthash].css'
    }),
    new PurgeCSSPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    })
],

});
