var path = require('path');
var config = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var MiniCssExtractPlugin  = require('mini-css-extract-plugin');

exports.assetsPath = function (_path) {
	var assetsSubDirectory = process.env.NODE_ENV === 'production'
		? config.build.assetsSubDirectory
		: config.dev.assetsSubDirectory;
	return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (options, booLocal) {
	options = options || {};
	var cssLoader = {
		loader: 'css-loader',
		options: {
			// sourceMap: options.sourceMap,
			// modules: true,
			//localIdentName: '[local]--[hash:base64:6]',	//class 名字 代替
			//localIdentName: booLocal ? '[local]' : '[local]--[hash:base64:6]',	//class 名字 代替
			// localIdentName: '[local]',
			// importLoaders: 1,
		}
	};
	var postcssLoader = {
		loader: 'postcss-loader',
		options: {
			plugins: [
				require('autoprefixer')({
					browsers: ['last 5 versions']
				})
			]
		}
	};
	// generate loader string to be used with extract text plugin
	function generateLoaders(loader, loaderOptions) {
		var loaders = [cssLoader, postcssLoader];
		if (loader) {
			let option = {
				...loaderOptions,
				sourceMap: options.sourceMap,
			};

			loaders.push({
				loader: loader + '-loader',
				options: option
			});
		}

		// Extract CSS when that option is specified
		//(which is the case during production build)
		if (options.extract) {
			if (process.env.NODE_ENV === 'production') {
				return [MiniCssExtractPlugin.loader].concat(loaders);
			} else {
				return ExtractTextPlugin.extract({
					use: loaders,
					publicPath: '../../', //解决 build css bg img 加载路径不对问题
					fallback: 'react-style-loader' // react-style-loader
				});
			}

		} else {
			return ['react-style-loader'].concat(loaders);
		}
	}

	return {
		css: generateLoaders(),
		postcss: generateLoaders('postcss'),
		less: generateLoaders('less'),
		sass: generateLoaders('sass', { indentedSyntax: true }),
		scss: generateLoaders('sass'),
		stylus: generateLoaders('stylus'),
		styl: generateLoaders('stylus'),
	};
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
	var output = [];
	var loaders = exports.cssLoaders(options, false);
	//var loadersLocal = exports.cssLoaders(options, true)
	for (var extension in loaders) {
		var loader = loaders[extension];
		//var loaderLocal = loadersLocal[extension]
		output.push(
			{
				test: new RegExp('\\.' + extension  + '$'),
				use: loader,
				exclude: /node_modules/,
			}
		);
	}
	return output;
};