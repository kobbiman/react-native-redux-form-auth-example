import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './common/Button';

export default class Login extends Component {

  static route = {
    navigationBar: {
      title: 'Login',
    }
  }

  render () {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <View>
          <Text>Form</Text>
          <Button
            style={{padding: 10, backgroundColor: 'blue'}}
            onPress={ () => {} }
          >
            <Text style={{color: '#fff'}}>Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}
