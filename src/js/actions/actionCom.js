import { loginStatus, requestStatus } from './typeCom';

const { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } = loginStatus;

// 登录开始
export function Login(params) {
	return {
		type: LOGIN,
		params
	}
}

// 登录成功
export function LoginSuccess(data) {
	return {
		type: LOGIN_SUCCESS,
		data
	}
}

// 登录失败
export function LoginError(data) {
	return {
		type: LOGIN_ERROR,
		data
	}
}