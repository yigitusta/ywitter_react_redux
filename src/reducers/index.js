import { combineReducers } from 'redux';
import tweets from './tweets';

const allReducers = combineReducers({
  tweets,
});

export default allReducers;
