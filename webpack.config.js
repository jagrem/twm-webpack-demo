path = require('path')

module.exports = {
    entry: path.resolve('js', 'index.js'),
    output: {
        path: path.resolve('BuildOutput'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
}