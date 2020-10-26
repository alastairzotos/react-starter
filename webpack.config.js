const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",

    entry: {
        index: path.resolve(__dirname, 'src/app.jsx'),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9905,
        historyApiFallback: {
            index: 'index.html'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],

    output: {
        filename: './app.js',
        pathinfo: false,
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    }
};