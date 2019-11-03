const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PORT=process.env.PORT||5000;
const HOST='0.0.0.0';


module.exports = {
    entry: { index: './src/index.js' },
    output: {
        filename: "[name].[contentHash].js",//the name is match the entry file's name
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port:PORT,
        host:HOST,
        //if you don't set up the port, default will be 8080
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html',
                                      minify:{
                                          removeComments:true,
                                          removeAttributeQuotes:true,
                                          collapseWhitespace:true
                                      } }), 
            new MiniCssExtractPlugin({ filename: '[name].[hash].css' }), 
            new CleanWebpackPlugin()],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader,
                "css-loader",
                'sass-loader']
        },
        {
            test: /\.(js|jxs)$/,
            exclude: /node_modules/,
            use: { loader: "babel-loader" }
        },
        {
            test: /\.html$/,
            use: { loader: "html-loader" }
        },
        {
            test: /.\.(jpe?g|svg|gif|png)$/i,
            use: [{
                loader: "file-loader",
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: './images' //put all the images inside the ./dist/images 
                }
            },
            {
                loader:"image-webpack-loader",
                options:{
                    bypassOnDebug:true,//image-webpack-loader increases the build time,so it's better to disable it during development(pass the bypassOnDebug:true option to do that)
                    mozjpeg:{
                        pregressive:true,
                        quality:50
                    },
                    webp: {
                        quality: 50
                      }
                }
            }

            ]
        }]
    }

}