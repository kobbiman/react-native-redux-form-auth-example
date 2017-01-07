import React from 'react';
import { TextInput } from 'react-native';

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

const Input = ({ input: { onChange, ...restInput }}) => {
  return (
    <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
  );
}

export default Input;
