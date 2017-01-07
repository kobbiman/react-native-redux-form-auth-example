import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form'
import Button from './common/Button';
import Input from './common/Input';
import InputPassword from './common/InputPassword';

class Signup extends Component {

  submit = values => {
    console.log('submitting form', values);
    this.props.signupUser(values);
  }

  renderServerError = () => {
    if (this.props.errorMessage) {
      return <Text style={{color: 'red'}}>{this.props.errorMessage}</Text>
    }
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <View style={{marginTop: 10, flex: 1}}>
        <Button
          style={{padding: 10}}
          onPress={ () => {this.props.navigator.pop()} }
        >
          <Text style={{color: '#000', alignSelf: 'flex-start'}}>Back</Text>
        </Button>
        <View style={{flexDirection: 'column', flex: 1, padding: 10, marginTop: 50 }}>

          <Text>Firstname</Text>
          <Field name="firstname" component={Input} />

          <Text>Surname</Text>
          <Field name="surname" component={Input} />

          <Text>Email</Text>
          <Field name="email" component={Input} />

          <Text>Password</Text>
          <Field name="password" component={InputPassword} />

          <Text>Confirm Password</Text>
          <Field name="confirmPassword" component={InputPassword} />

          {this.renderServerError()}

          <Button
            style={{padding: 10, backgroundColor: '#3b91ac', marginTop: 10}}
            onPress={ handleSubmit(this.submit) }
          >
            <Text style={{color: '#fff', alignSelf: 'center'}}>Signup</Text>
          </Button>

        </View>
      </View>
    );
  }
}

export default reduxForm({
  form: 'signup',
  validate: values => {
   const errors = {};

   if (!values.firstname) {
     errors.firstname = 'Firstname is required.';
   }

   if (!values.surname) {
     errors.surname = 'Surname is required.';
   }

   if (!values.email) {
     errors.email = 'Email is required.';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

   if (!values.password) {
     errors.password = 'Password is required.';
   }

   if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

   return errors;
 }
})(Signup)
