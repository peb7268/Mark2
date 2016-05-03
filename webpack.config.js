module.exports = {
	entry: './app/components/Main.js',
	output: {
		filename: 'public/dist/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|vendors)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};