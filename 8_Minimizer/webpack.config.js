// dokumentasi: webpack.js.org/configuration/
const { clear } = require('console');
const { watch } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // mode: 'production',
    entry: {
        main: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        vendor: './src/vendor.js',
        hello: {
            import: './src/hello.js',
            dependOn: 'shared'
        },
        shared: 'lodash'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'), // __dirname, relative terhadap dokumen kita
    //     filename: 'main.[contenthash].js',
    //     clean: true, // untuk membersihkan main.js yang bertambah ketika kita menambah fitur di dalamnya.
    // },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/template.html', // mengenerate HTML dari template
        }),
    ],

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
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                type: 'asset/resource'
            }
        ],
    },
};
