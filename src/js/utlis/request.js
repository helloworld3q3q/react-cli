import axios from 'axios';

// 表单 formdata 形式提交
export const formdata = {
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};

axios.defaults.timeout = 5000;
// 请求拦截
axios.interceptors.request.use(
	config => {
		if (config.headers.post['Content-Type'] === 'multipart/form-data') return config;
		return config;
	},
	error => {
		let err = {
			data: {
				error: error
			}
		};
		return Promise.reject(err);
	}
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(res => {
	// 请求成功 统一请求成功 code 200
	if (res.status !== 200) {
		removePending(res.config);
		return Promise.reject(res);
	}
	removePending(res.config);
	return res;
}, error => {
	pending = [];
	return Promise.reject(error);
}
);

const requestBase = (url, params, requestType) => {
	return new Promise((resolve, reject) => {
		axios[requestType](url, params).then(function (response) {
			resolve(response);
		}).catch(function (error) {
			reject(error);
		});
	});
};

// post
export async function post(url, params) {
	try {
		return await requestBase(url, params, 'post');
	} catch (e) {
		return Promise.reject(e);
	}
}

// get 方法
export async function get(url, params = {}) {
	try {
		return await requestBase(url, params, 'get');
	} catch (e) {
		return Promise.reject(e);
	}
}