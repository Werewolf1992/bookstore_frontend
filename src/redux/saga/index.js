import {take, put, all} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

export function *sagaButtonClick() {
    while (true) {
        // eslint-disable-next-line
        console.log('SAGA waiting for action');
        yield take(actionTypes.SAGA_BUTTON_CLICKED);
        // eslint-disable-next-line
        console.log('SAGA action recieved');
        yield put({type: actionTypes.SAGA_IN_PROGRESS});
        yield put({type: actionTypes.SAGA_DONE});
    }
}
export default function *rootSaga() {
    yield all([
        sagaButtonClick(),
    ]);
}
