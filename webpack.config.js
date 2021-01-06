const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


module.exports = env => {
    console.log("The ENV",env);

    console.log(dotenv.parsed.BASE_URL)
    return {
        mode: 'development', // set mode option, 'development' or 'production'
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],},
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                    ],
                }
         ],
        },
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                // "process.env": JSON.stringifydotenv.parsed,
                'process.env': {
                    BASE_URL: JSON.stringify(dotenv.parsed.BASE_URL)
                }
            }),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                        ['gifsicle', {
                            interlaced: true
                        }],
                        ['jpegtran', {
                            progressive: true
                        }],
                        ['optipng', {
                            optimizationLevel: 5
                        }],
                        [
                            'svgo',
                            {
                                plugins: [{
                                    removeViewBox: false,
                                }, ],
                            },
                        ],
                    ],
                },
            }),
        ],
    }
};