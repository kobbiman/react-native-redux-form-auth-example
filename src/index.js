import React from 'react';
import { Text, View } from 'react-native';
import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
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

export default class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('intro')} />
      </NavigationProvider>
    );
  }
}
