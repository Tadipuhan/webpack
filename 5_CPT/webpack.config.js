// dokumentasi: webpack.js.org/configuration/
const { clear } = require('console');
const { watch } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // mode: 'production',
    entry: './src/index.js',
    // output: {
    //     path: path.resolve(__dirname, 'dist'), // __dirname, relative terhadap dokumen kita
    //     filename: 'main.[contenthash].js',
    //     clean: true, // untuk membersihkan main.js yang bertambah ketika kita menambah fitur di dalamnya.
    // },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html',
    })],

    // watch: true,
    devtool: false,
    module: {
        rules: [
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
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};
