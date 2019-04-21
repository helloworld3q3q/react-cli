import asyncComponent from '../utlis/asyncComponent';

// login
const Login = asyncComponent(() => {
	return import('../containers/login/index');
});



export default [
	{ path: '/', component: Login, name: 'Login'},
];