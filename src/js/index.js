import React from 'react';
import ReactDOM from 'react-dom';
import RootRoute from './router/rootRoute'; // 所有定义好的路由
import '../less/reset.less';


ReactDOM.render(
	<RootRoute/>,
	document.getElementById('root')
);