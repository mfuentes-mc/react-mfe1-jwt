
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    const deps = require("./package.json").dependencies;
    module.exports = {
    mode: "production",
    output: {
        publicPath: "https://react-shell-jwt.herokuapp.com/",
        chunkFilename: "[name].[contenthash].js",
        filename: "[name].[contenthash].js",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
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