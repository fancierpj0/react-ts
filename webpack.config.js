const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development'
    , entry: './src/index.tsx' //tsx才能解析jsx
    , output: {
        path: path.join(__dirname, 'dist')
        , filename: 'bundle.js'
    }
    , devtool: 'source-map'
    , devServer: {
        hot: true
        , contentBase: path.join(__dirname, 'dist')
        //brwoserhistory 刷新的话 跳转到别的路径的话 会404 这里进行回退
        , historyApiFallback: {
            index: './index.html'
        }
    }
    , resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
    , module: {
        rules: [
            {
                test: /\.[jt]sx?/
                , loader: 'ts-loader'
            }
            , {
                test: /\.[jt]sx?/
                , enforce: 'pre' //loader转化之前进行
                , loader: 'source-map-loader'
            }
        ]
    }
    , plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
            , filename: "index.html"
        })
        , new webpack.HotModuleReplacementPlugin() //让hot module生效
    ]
};
