import {combineReducers} from 'redux';
import site from './siteReducer';

const rootReducer = combineReducers({
  site        : site
});

export default rootReducer;