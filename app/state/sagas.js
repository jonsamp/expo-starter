import { call, all } from 'redux-saga/effects';
import appSagas from './app/sagas';

export default function* rootSaga() {
  yield all([call(appSagas)]);
}
