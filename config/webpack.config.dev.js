const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


const appSrc = path.resolve(__dirname, '../src');
const appDist = path.resolve(__dirname, '../dist');
const appPublic = path.resolve(__dirname, '../public');
const appIndex = path.resolve(appSrc, 'index.js');

module.exports = {
    mode: 'development',
    entry: appIndex,
    output: {
        filename: 'public/js/[name].[hash:8].js',
        path: appDist,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
        ]
    },

    devServer: {
        contentBase: appDist,
        hot: true,
        host: 'localhost',
        port: 8000
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}
