import React from 'react';
import { Text, View } from 'react-native';
import { createRouter, NavigationContext, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import { Provider } from 'react-redux';
import { store } from './store';
import Intro from './components/Intro';
import Login from './components/Login';
import Signup from './components/Signup';
import Private from './components/Private';

const Router = createRouter(() => ({
  intro: () => Intro,
  login: () => Login,
  signup: () => Signup,
  private: () => Private
}));

const navigationContext = new NavigationContext({
  router: Router,
  store
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <NavigationProvider context={ navigationContext }>
          <StackNavigation initialRoute={Router.getRoute('intro')} />
        </NavigationProvider>
      </Provider>
    );
  }
}
