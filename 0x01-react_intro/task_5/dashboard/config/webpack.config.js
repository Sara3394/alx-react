const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    static: './'
  },
	  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'image-webpack-loader'
        }
      }
	    {
		    test: /\.(jsx|js)$/,
			    use: {
				    loader: 'babel-loader'
			    }
	    }
    ]
  }
};
