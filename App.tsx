import { View, Text } from 'react-native';
import React from 'react';
import FirstScreen from './src/FirstScreen';
import { ThemeProvider } from './src/ThemeProvider';
import ThemedComponent from './src/ThemedComponent';
import SecondScreen from './src/SecondScreen';

export default function App() {
  return (
    <ThemeProvider>
    {/* <View> */}
      {/* <Text>App</Text> */}
      {/* <FirstScreen name={"rahul"} email={"srn@"} age={27} /> */}
      <ThemedComponent />
      {/* <SecondScreen /> */}
    {/* </View> */}
    </ThemeProvider>
  )
}