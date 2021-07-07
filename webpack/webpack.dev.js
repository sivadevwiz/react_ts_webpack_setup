const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map", //value recommended by create-react-app
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("Shiva")
        })

    ]

}