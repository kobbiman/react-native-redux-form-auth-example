import React from 'react';
import { View, Text, TextInput } from 'react-native';

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

const InputPassword = ({ input: { onChange, ...restInput },  meta: { touched, error }}) => {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChange} {...restInput} secureTextEntry/>
      { touched && error && <Text style={{ color: '#f53907'}}>{ error }</Text> }
    </View>
  );
}

export default InputPassword;
