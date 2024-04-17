const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
    
entry: './src/index.js',
output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
},

module: {
    rules: [
        {
            test:/\.(sass|c|sc)ss$/, // expressão regular - regex 
            use: [
                MiniCssExtract.loader,
                'css-loader',
                'sass-loader'
            ]
        }
    ]
},

plugins: [
    new HtmlWebpack({
        filename: 'index.html',
        template: './src/index.html'
    }),

    newMiniCssExtract({
        filename: 'style.css'
    })

]

}