import { combineReducers } from 'redux';
import app from './app/reducers';

const rootReducer = combineReducers({
  app,
});

export default rootReducer;
