var path = require('path');
var fs = require('fs');
var utils = require('./utils');
var config = require('../config');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

function resolve(dir) {
	return path.join(__dirname, '..', dir);
}
module.exports = {
	entry: {
		//babel: ['babel-polyfill'],	//babel-polyfill 和redux 单独打包 减小 app.js 的打包体积
		app: ['./src/js/index.js'],	//入口文件
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath,
		libraryTarget: 'umd'	//用于外部引入的 react.js 等
	},
	resolve: {
		//extensions: ['.js', '.vue', '.json'],
		extensions: ['.js', '.json'],
		alias: {
			// 'vue$': 'vue/dist/vue.esm.js',
			// '@': resolve('src')
		},
		symlinks: false
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')],
				exclude: [resolve('node_modules')], 	//在node_modules的文件不被babel理会
				query: {
					plugins: ['transform-decorators-legacy'],
					presets: ['react', 'stage-0']
				}
			},
			/* 	{
				test: /\.(less|css)$/,
    			use:['style-loader','css-loader', 'less-loader'],
			}, */
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]'),
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	// 配置全局使用
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer()
				]
			}
		}),
		new webpack.ProvidePlugin({
			"React": "react",
			"ReactDOM": "react-dom",
			'react-router-dom': 'react-router-dom',
			"_": "lodash",
			"classnames": "classnames"
		}),
	],
	optimization: {
		runtimeChunk: {
			name: 'manifest'
		},
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: false,
			cacheGroups: {
				vendor: {
					name: 'vendor',
					chunks: 'initial',
					priority: -10,
					reuseExistingChunk: false,
					test: /node_modules\/(.*)\.js/
				}
			}
		}
	},
	// 单独提取出 react 减小打包文件大小
	externals: {
		jquery: 'jQuery',
		layer: 'layer',
		'redux': {
			amd: 'redux',
			root: 'Redux',
			commonjs: 'redux',
			commonjs2: 'redux'
		},
		'redux-saga': {
			amd: 'redux-saga',
			root: 'ReduxSaga',
			commonjs: 'redux-saga',
			commonjs2: 'redux-saga'
		},
		'redux-saga/effects': {
			amd: 'redux-saga/effects',
			root: 'ReduxSaga/Effects',
			commonjs: 'redux-saga/effects',
			commonjs2: 'redux-saga/effects'
		},
		'react-redux': {
			amd: 'react-redux',
			root: 'ReactRedux',
			commonjs: 'react-redux',
			commonjs2: 'react-redux'
		},
		'moment': {
			amd: 'moment',
			root: 'moment',
			commonjs: 'moment',
			commonjs2: 'moment'
		},
		'react-router-dom': {
			amd: 'react-router-dom',
			root: 'ReactRouterDOM',
			commonjs: 'react-router-dom',
			commonjs2: 'react-router-dom'
		},
		'react': {
			amd: 'react',
			root: 'React',
			commonjs: 'react',
			commonjs2: 'react'
		},
		'react-dom': {
			amd: 'react-dom',
			root: 'ReactDOM',
			commonjs: 'react-dom',
			commonjs2: 'react-dom'
		},
		'axios': {
			amd: 'axios',
			root: 'axios',
			commonjs: 'axios',
			commonjs2: 'axios'
		},
		'Swiper': {
			amd: 'Swiper',
			root: 'Swiper',
			commonjs: 'Swiper',
			commonjs2: 'Swiper'
		},
		'AMap': 'AMap',
		// 'redux-persist': {
		//     amd: 'redux-persist',
		//     root: 'redux-persist',
		//     commonjs: 'redux-persist',
		//     commonjs2: 'redux-persist'
		// }
	}
};