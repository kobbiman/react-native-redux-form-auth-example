import React from 'react';
import { View, TextInput, Text } from 'react-native';

const styles = {
  input: {
    color: '#000',
    borderWidth: 1,
    borderColor: '#cfcaca',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 12,
    height: 40
  }
};

const Input = ({ isEmail, input: { onChange, ...restInput }, meta: { touched, error }}) => {
  return (
    <View>
      <TextInput
        autoCapitalize={ isEmail && "none" }
        style={styles.input}
        onChangeText={onChange}
        {...restInput}
      />
        { touched && error && <Text style={{ color: '#f53907'}}>{ error }</Text> }
    </View>
  );
}

export default Input;
