const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',  // Entry point of the application
    output: {
        filename: 'bundle.js',  // Output bundle file name
        path: path.resolve(__dirname, 'dist'),  // Output directory
        clean: true  // Clean the output directory before each build
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'  // Path to the HTML template file
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,  // Apply this rule to files ending in .css
                use: [
                    'style-loader',  // Inject styles into the DOM
                    'css-loader'     // Turn CSS into CommonJS modules
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Apply this rule to image files
                type: 'asset/resource',  // Use asset modules
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,  // Apply this rule to font files
                type: 'asset/resource',  // Use asset modules
            },
        ],
    },
    devServer: {
        contentBase: './dist',  // Serve content from the dist directory
    },
};