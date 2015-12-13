const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './desktop.bundles/index/index.bemjson.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        pathinfo: true,
        filename: '[name].min.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'ymodules-loader'
            },
            {
                test: /\.bemjson.js$/,
                loader: 'loaders/bem-extractor?tech[]=bh.js&tech[]=js&tech[]=styl&tech[]=deps.js!loaders/bemjson'
            },
            {
                test: /\.deps.js$/,
                loader: 'loaders/bem-extractor?tech[]=bh.js&tech[]=js&tech[]=styl&tech[]=deps.js!loaders/deps'
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
            },
            {
                test: /\.(gif|png|svg)$/,
                loader: 'url'
            },
            {
                test: /\.bh(\.js)?$/,
                loader: 'loaders/bh'
            }
        ]
    },

    devtool: 'source-map',

    postcss: [
        require('autoprefixer')
    ],

    resolveLoader: {
        modulesDirectories: ['./webpack', './node_modules']
    },

    plugins: [
        new ExtractTextPlugin('index.min.css')
    ]
};
