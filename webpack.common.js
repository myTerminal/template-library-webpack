/* global require module __dirname */

const fileName = 'template-library';
const libraryName = 'templateLibrary';

const sourceDir = 'src';
const outputDir = 'build';

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

const clean = new CleanWebpackPlugin([outputDir]);

const extractCSS = new ExtractTextPlugin('styles/styles.css');

module.exports = {
    entry: {
        app: './' + sourceDir + '/scripts/' + fileName + '.js'
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            publicPath: '../'
                        }
                    }
                ]
            },
            {
                test: /\.(less|css)$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(jsx|js)$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jsxhint-loader"
                    }
                ]
            },
            {
                test: /\.(jsx|js)$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jscs-loader"
                    }
                ]
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-env',
                            'babel-preset-react'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        clean,
        extractCSS
    ],
    output: {
        filename: 'scripts/' + fileName + '.js',
        path: path.resolve(__dirname, outputDir),
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'
        }
    }
};
