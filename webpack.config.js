const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');   
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
       port: 3001
    },
   plugins: [
         new HtmlWebpackPlugin({
                template: './src/index.html'
            })
    ],

};