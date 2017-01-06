import React from 'react';
import { View, Text } from 'react-native';
import Button from './common/Button';

export default function Intro ({navigator}) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Button
          style={{padding: 10, backgroundColor: 'blue', flex: 1}}
          onPress={ () => navigator.push('login') }
        >
          <Text style={{color: '#fff'}}>Login</Text>
        </Button>
        <Button
          style={{padding: 10, backgroundColor: 'green', flex: 1}}
          onPress={ () => navigator.push('signup') }
        >
          <Text style={{color: '#fff'}}>Signup</Text>
        </Button>
      </View>
    </View>
  );
}
