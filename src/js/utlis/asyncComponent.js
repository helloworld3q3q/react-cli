/**
 * @author [author]
 * @email [example@mail.com]
 * @create date 2018-11-22 17:18:46
 * @modify date 2018-11-22 17:18:46
 * @desc [异步加载组建模块]
*/
import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
	return class AsyncComponent extends Component {
		constructor(props) {
			super(props);
			this.state = {
				component: null
			};
		}

		componentDidMount() {
			importComponent().then(cmp => {
				this.setState({
					component: cmp.default
				});
			});
		}
		render() {
			let C = this.state.component;
			return C ? <C {...this.props}/> : null;
		}
	};
};

export default asyncComponent;