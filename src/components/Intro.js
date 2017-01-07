import React from 'react';
import { View, Text } from 'react-native';
import Button from './common/Button';

const styles = {
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  button: {
    padding: 10,
    flex: 1
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff'
  }
}
export default function Intro ({navigator}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Intro Screen</Text>
      <View style={styles.buttonsContainer}>
        <Button
          style={[styles.button, {backgroundColor: '#3b91ac'}]}
          onPress={ () => navigator.push('login') }
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button
          style={[styles.button, {backgroundColor: '#1b965b'}]}
          onPress={ () => navigator.push('signup') }
        >
          <Text style={styles.buttonText}>Signup</Text>
        </Button>
      </View>
    </View>
  );
}
