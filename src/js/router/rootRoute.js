import React, { Component } from 'react'; // react核心
import { BrowserRouter, Route, Redirect, Switch, HashRouter } from 'react-router-dom'; // 创建route所需
import routerMap from './routerMap';
import { connect } from 'react-redux'

/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */

let RootRoute = (loginState) => {
	return (
		<HashRouter>
			<Switch>
				{
					routerMap.map((item, index) => {
						let exact = item.exact || false;
						return <Route key={index} path={item.path} exact={exact}
							render = {
								props =>  <item.component {...props}/>
							}
						/>
					})
				}
				
			</Switch>
		</HashRouter>
	)
}


export default RootRoute;
