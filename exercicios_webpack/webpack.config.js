const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        patch: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.js?$/,
            enforce: "pre",
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread']
            },
            use: [{
                loader: "jshint-loader",
                options: {
                    camelcase: true,
                    emitErros: false,
                    failOnHint: false
                }
            }]
        }]
    }
}