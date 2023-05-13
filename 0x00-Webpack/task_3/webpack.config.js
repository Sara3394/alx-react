const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
    /*header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'*/
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, 
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ]
  }
};
