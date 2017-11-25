var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + "/src",
    //entry: './js/root.js',
    entry: {
        bundle: './js/root.js',
        vendor: ['react', 'react-dom', 'react-router', 'antd']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                }

            }, {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: './img/[name].[hash:8].[ext]'
                    }
                }
            }, {
                test: /\.global.css$/,
                exclude: [/node_modules/],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                //css压缩
                                //minimize: true,
                            }
                        }, {
                            loader: "resolve-url-loader"
                        }, {
                            loader: "postcss-loader",
                            options: {
                                plugins: [//打包css自动添加浏览器前缀
                                    autoprefixer({
                                        browsers: [
                                            '> 1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'
                                        ],
                                        remove: true
                                    })]
                            }
                        }
                    ]
                })
            }, {
                test: /\.css$/,
                exclude: [
                    /node_modules/, /\.global.css$/
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                //importLoaders: 3,
                                //css模块化
                                modules: true,
                                //css压缩
                                //minimize: true,
                                //css class样式后面自动跟随base64代码防止class重复
                                localIdentName: "[local]_[hash:base64:8]"
                            }
                        }, {
                            loader: "resolve-url-loader"
                        }, {
                            loader: "postcss-loader",
                            options: {
                                plugins: [//打包css自动添加浏览器前缀
                                    autoprefixer({
                                        browsers: [
                                            '> 1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'
                                        ],
                                        remove: true
                                    })]
                            }
                        }
                    ]
                })
            }, {
                //下面是 ant-design 样式专用配置文件
                test: /\.css$/,
                exclude: [/src/],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            //minimize: true,
                        }
                    }
                })
            }
        ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        //把引入的React切换到产品版本
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        //压缩插件UglifyJsPlugin
        //删除所有注释
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: "vendor.js",
        })
    ]
}
