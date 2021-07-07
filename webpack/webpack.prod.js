const webpack = require("webpack");

module.exports = {
    mode: "production",
    devtool: "source-map", //Can also be removed
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("Production")
        })
    ]
}