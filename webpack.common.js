const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.js$/, include: path.resolve(__dirname, 'src'), loader: 'babel-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
        new ESLintPlugin({
            cache: true,
        }),
    ],
};