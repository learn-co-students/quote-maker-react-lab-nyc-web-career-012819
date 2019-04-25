import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
  quotes: quoteReducer,
});

export default rootReducer;
