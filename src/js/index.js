//https://dotblogs.com.tw/lapland/2016/04/19/172848
//import 'babel-polyfill';
import 'raf';
import React from 'react';
import ReactDOM from 'react-dom';
import RootRoute from './router/rootRoute'; // 所有定义好的路由
import '../less/reset.less';


const Loading = () => <div>loading</div>;

ReactDOM.render(
	<RootRoute/>,
	document.getElementById('root')
);