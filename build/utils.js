var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
	var assetsSubDirectory = process.env.NODE_ENV === 'production'
		? config.build.assetsSubDirectory
		: config.dev.assetsSubDirectory
	return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options, booLocal) {
	options = options || {}
	var cssLoader = {
		loader: 'css-loader',
		options: {
			minimize: process.env.NODE_ENV === 'production',
			sourceMap: options.sourceMap,
			modules: true,
			//localIdentName: '[local]--[hash:base64:6]',	//class 名字 代替
			//localIdentName: booLocal ? '[local]' : '[local]--[hash:base64:6]',	//class 名字 代替
			localIdentName: '[local]',
			importLoaders: 1
		}
	}
	var autoprefixerLoader = {
		loader: 'autoprefixer-loader',
	}
	// generate loader string to be used with extract text plugin
	function generateLoaders(loader, loaderOptions) {
		var loaders = [cssLoader, autoprefixerLoader];
		if (loader) {
			loaders.push({
				loader: loader + '-loader',
				options: Object.assign({}, loaderOptions, {
					sourceMap: options.sourceMap
				})
			})
		}

		// Extract CSS when that option is specified
		//(which is the case during production build)
		if (options.extract) {
			return ExtractTextPlugin.extract({
				use: loaders,
				publicPath: '../../', //解决 build css bg img 加载路径不对问题
			    fallback: 'react-style-loader' // react-style-loader
			})
		} else {
			return ['react-style-loader'].concat(loaders)
		}
	}

	// https://vue-loader.vuejs.org/en/configurations/extract-css.html
	return {
		css: generateLoaders(),
		postcss: generateLoaders('postcss'),
		less: generateLoaders('less'),
		sass: generateLoaders('sass', { indentedSyntax: true }),
		scss: generateLoaders('sass'),
		stylus: generateLoaders('stylus'),
		styl: generateLoaders('stylus'),
	}
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
	var output = []
	var loaders = exports.cssLoaders(options, false)
	//var loadersLocal = exports.cssLoaders(options, true)
	for (var extension in loaders) {
		var loader = loaders[extension]
		//var loaderLocal = loadersLocal[extension]
		output.push(
			{
				test: new RegExp('\\.' + extension  + '$'),
				use: loader,
				exclude: /node_modules/,
			}
		)
	}
	
	return output
}