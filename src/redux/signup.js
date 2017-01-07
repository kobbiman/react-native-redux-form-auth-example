import { AsyncStorage } from 'react-native';
import { NavigationActions } from '@exponent/ex-navigation';
import { store } from '../store';
import { Router } from '../';

const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

const signupUserRequest = () => ({
  type: SIGNUP_USER_REQUEST
});

const signupUserSuccess = data => ({
  type: SIGNUP_USER_SUCCESS,
  data
});

const signupUserFailure = error => ({
  type: SIGNUP_USER_FAILURE,
  error
});

function storeToken(token) {
  try {
    AsyncStorage.setItem('spark_token', token);
    console.log('Token was stored successfull');
  } catch (error) {
    console.log('Something went wrong');
    console.error(error);
  }
}

export const signupUser = ({firstname, surname, email, password}) => {

  return (dispatch) => {
    dispatch(signupUserRequest());
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstname, surname, email: email.toLowerCase(), password })
    })
    .then((response) => {
      response.json()
        .then((data) => {
          //our server custom error appears here when email is in use and not in catch
          dispatch(signupUserSuccess(data));
          if (data.token) {
            storeToken(data.token);
            const navigatorUID = store.getState().navigation.currentNavigatorUID;
            dispatch(NavigationActions.push(navigatorUID, Router.getRoute('private')));
          } else {
            dispatch(signupUserFailure(data.error));
          }
        })
        .catch(err => dispatch(signupUserFailure(err)));
    })
    .catch(err => dispatch(signupUserFailure(err)));
  };
}

const INITIAL_STATE = {
  error: '',
  isSigningUp: false,
  authenticated: false,
  firstname: '',
  surname: '',
  email: ''
};

export default function signup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNUP_USER_REQUEST:
      return { ...state, isSigningUp: true };
    case SIGNUP_USER_SUCCESS:
      return { ...state,
      authenticated: true,
      isSigningUp: false,
      error: '',
      firstname: action.data.firstname,
      surname: action.data.surname,
      email: action.data.email
    }
  case SIGNUP_USER_FAILURE:
    return {
      ...state,
      error: action.error,
      loading: false,
      authenticated: false
    };
  default:
    return state;
  }
}
