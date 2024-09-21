const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/i, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.js$/, include: path.resolve(__dirname, 'src'), loader: 'babel-loader' },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        static: './dist',
        hot: true,
        open: true,
        port: 3000,
    },
};