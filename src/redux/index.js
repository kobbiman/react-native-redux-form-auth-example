import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { NavigationReducer } from '@exponent/ex-navigation';
import signup from './signup';

export default combineReducers({
  navigation: NavigationReducer,
  form,
  signup
});
