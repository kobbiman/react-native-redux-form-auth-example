import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form'
import Button from './common/Button';
import Input from './common/Input';
import InputPassword from './common/InputPassword';

class Login extends Component {

  render () {
    return (
      <View style={{marginTop: 10, flex: 1}}>
        <Button
          style={{padding: 10}}
          onPress={ () => {this.props.navigator.pop()} }
        >
          <Text style={{color: '#000', alignSelf: 'flex-start'}}>Back</Text>
        </Button>
        <View style={{flexDirection: 'column', flex: 1, padding: 10, marginTop: 50 }}>
          <Text>Email</Text>
          <Field name="email" component={Input} />
          <Text>Password</Text>
          <Field name="password" component={InputPassword} />
            <Button
              style={{padding: 10, backgroundColor: '#3b91ac', marginTop: 10}}
              onPress={ () => {} }
            >
              <Text style={{color: '#fff', alignSelf: 'center'}}>Login</Text>
            </Button>
        </View>

      </View>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login)
