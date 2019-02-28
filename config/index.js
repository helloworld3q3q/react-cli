// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',
		productionSourceMap: false,
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report
	},
	dev: {
		env: require('./dev.env'),
		port: 3333,
		autoOpenBrowser: true,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			// '/': {
			//   target: 'http://www.***',
			//   changeOrigin: true,  //是否跨域
			//   pathRewrite: {
			// 	'^/admin': '/admin',
			//   }
			// },
		  },
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false
	},
	// 提取出的文件链接
	externalsCss_dev:[
		'https://cdn.bootcss.com/Swiper/4.4.6/css/swiper.min.css'
	],
	externalsCss_prod: [
		'https://cdn.bootcss.com/Swiper/4.4.6/css/swiper.css'
	],
	externalsJs_dev:[
		'https://cdn.bootcss.com/babel-polyfill/7.2.5/polyfill.min.js',
		'https://cdn.bootcss.com/react/16.0.0/umd/react.development.js',
		'https://cdn.bootcss.com/react-dom/16.0.0/umd/react-dom.development.js',
		'https://cdn.bootcss.com/react-router-dom/4.3.1/react-router-dom.js',
		'https://cdn.bootcss.com/redux/4.0.1/redux.js',
		'https://cdn.bootcss.com/react-redux/5.0.7/react-redux.js',
		'https://cdn.bootcss.com/redux-saga/0.16.2/redux-saga.js',
		'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js',
		'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.js',
	],
	externalsJs_prod: [
		'https://cdn.bootcss.com/babel-polyfill/7.2.5/polyfill.min.js',
		'https://cdn.bootcss.com/react/16.0.0/umd/react.production.min.js',
		'https://cdn.bootcss.com/react-dom/16.0.0/umd/react-dom.production.min.js',
		'https://cdn.bootcss.com/react-router-dom/4.3.1/react-router-dom.min.js',
		'https://cdn.bootcss.com/redux/4.0.1/redux.min.js',
		'https://cdn.bootcss.com/react-redux/5.0.7/react-redux.min.js',
		'https://cdn.bootcss.com/redux-saga/0.16.2/redux-saga.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js',
		'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js',
	],
	title: '初始化' //模板标题
}