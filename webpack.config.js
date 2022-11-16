const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const environment = process.env.NODE_ENV;

module.exports = {
	mode: 'development',
	entry: {
		src: './client/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
		test: /\.jsx?/,
		exclude: /node_modules/,
		use: {
		loader: 'babel-loader',
		options: {
		    presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
			{
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: './client/index.html'
		}),
	],
	devServer: {
		static: {
			publicPath: '/build',
			directory: path.resolve(__dirname, 'build')
		},
		port: 8080,
		proxy: {
			'/api': 'http://localhost:3000/',
		}
	}
}