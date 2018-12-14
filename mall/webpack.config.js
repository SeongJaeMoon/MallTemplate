module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'build.js',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,module: {
                    rules: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: "babel-loader",
                                options: {
                                    presets: [
                                        "@babel/preset-env",
                                        "@babel/preset-react"
                                    ].map(require.resolve)
                                }
                            }
                        },
                        {
                            test: /\.css$/,
                            use: [
                                {loader: "style-loader"},
                                {loader: "css-loader"}
                            ]
                        },
                        {
                            test: /\.(png|jpg|gif)$/i,
                            use: [
                                {
                                    loader: 'url-loader',
                                    options: {
                                        limit: 8192
                                    }
                                }
                            ]
                        },
                        {
                            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                            use: [{
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: 'fonts/'
                                }
                            }]
                        }
                    ]
                },
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ],
    },
    watch: true,
};