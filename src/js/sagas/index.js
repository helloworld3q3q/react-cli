import { loginStatusSaga } from './com/loginSaga';

const { all, call, fork, takeEvery } = effects;


export default function* rootSaga() {
	yield all([
		takeEvery('LOGIN', loginStatusSaga),
	]);
}
