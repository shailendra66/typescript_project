import { View, Text,Button } from 'react-native';
import React,{useContext} from 'react';
import { ThemeContext } from './ThemeProvider';

export default function SecondScreen() {

  const themeContext=useContext(ThemeContext);

  if(!themeContext){
    throw new Error("dfdsfsfsd")
  }

  const { value, incNum, decNum } = themeContext;

  return (
    <View>
      <Text>SecondScreen</Text>
      <Text>Current Number: {value}</Text>
      <Button title="Increase" onPress={incNum} />
      <Button title="Decrease" onPress={decNum} />

    </View>
  )
}