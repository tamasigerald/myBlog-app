const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

module.exports = env => {
    console.log("The ENV",env);
    return {
        mode: 'development', // set mode option, 'development' or 'production'
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }, ],
        },
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                "process.env": dotenv.parsed
            }),
        ],
    }
};