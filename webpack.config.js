
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    const deps = require("./package.json").dependencies;
    module.exports = {
    mode: "development",
    output: {
        publicPath: "http://localhost:3001/",
        chunkFilename: "[name].[contenthash].js",
        filename: "[name].[contenthash].js",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3001,
        historyApiFallback: true,
    },

    module: {
        rules: [
        {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
            fullySpecified: false,
            },
        },
        {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            },
        },
        {
            test: /\.(jpg|png|svg)$/,
            use: {
            loader: 'url-loader',
            },
        },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "react_mfe1_jwt",
            filename: "remoteEntry.js",
            exposes:{
                './ListScreen': './src/components/ListScreen.jsx'
            },
            shared: {
                ...deps,
                react: {
                singleton: true,
                requiredVersion: deps.react,
                },
                "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
                },
            },
        }),
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        }),
    ],
};