import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  init: 123,
};

const reducers = {
  // [actions.finisherStatsReceived]: (app, { payload }) => ({
  //   ...app,
  //   ...payload,
  // }),
};

export default handleActions(reducers, initialState);
