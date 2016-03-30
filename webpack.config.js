var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/js/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src/js')
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            include: path.join(__dirname, 'src/static')
        },
        {
            test: /\.(otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file",
            include: path.join(__dirname, 'src/static')
        }]
    }
};
