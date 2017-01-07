import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { NavigationReducer } from '@exponent/ex-navigation';

export default combineReducers({
  navigation: NavigationReducer,
  form
});
