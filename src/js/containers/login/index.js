import React, { Component } from 'react';
import style from './index.less';

/* 以类的方式创建一个组件 */
class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className={style.layout}>首页登录</div>
		);
	}
}

export default LoginContainer;