import { effects } from 'redux-saga';
const { call, put } = effects;

export function* loginStatusSaga(data) {
	try {

		return 'success';
	} catch (error) {
		yield put({type: error});
	}
}