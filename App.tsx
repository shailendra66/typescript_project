import { View, Text } from 'react-native';
import React from 'react';
import FirstScreen from './src/FirstScreen';

export default function App() {
  return (
    <View>
      <Text>App</Text>
      <FirstScreen name={"rahul"} email={"srn@"} age={27} />
    </View>
  )
}