const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PurifyCssPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'quansis': [
            "./src/index.js",
            "./src/sass/style.scss"
        ]
    },
    output: {
        // publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        watchContentBase: true
    },
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // css
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            // images 
            {
                test: /\.svg$/,
                use: "file-loader"
            },
            // html
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "../dist/[name].css"
        }),
        new OptimizeCssAssetsPlugin({}),
        new UglifyJsPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new PurifyCssPlugin({
            paths: ["./src/index.html"]
        }),
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin([
            {
                from: "src/**/*.svg",
                to: "./images/",
                flatten: true
            }
        ])
    ]
};