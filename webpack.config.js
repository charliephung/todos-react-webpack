const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
    "axios",
    "bootstrap3",
    "jquery",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-thunk"
]

const config = {
    entry: {
        bundle: "./src/index.js",
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: "/node_modules/"
            },
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/
            },
            {
                loader: "file-loader",
                test: /\.jpe?g$|\.gif$|\.png|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    // Config jquery
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: true
    }
}

module.exports = config;