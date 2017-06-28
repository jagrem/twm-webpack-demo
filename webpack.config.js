const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const BabiliPlugin = require('babili-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const commonConfig = {
    entry: path.resolve('Source', 'index.js'),
    output: {
        path: path.resolve('BuildOutput'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Tauranga Web Meetup Webpack Demo', hash: true, template: path.resolve('Index.html') })
    ]
}

const productionConfig = {
    plugins: [
        new BabiliPlugin()
    ]
}

const developmentConfig = {
    devtool: 'source-map'
}

const visualizationConfig = {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ]
}

module.exports = (env) => {
    if(env === 'production') {
        return merge(commonConfig, productionConfig)
    }

    if(env === 'visualize') {
        return merge(commonConfig, productionConfig, visualizationConfig)
    }

    return merge(commonConfig, developmentConfig)
}