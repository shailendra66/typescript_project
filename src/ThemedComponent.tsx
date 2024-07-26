import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeProvider';

const ThemedComponent = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme, toggleTheme,value,incNum,decNum } = themeContext;

  return (
    <View style={[styles.container, theme === 'light' ? styles.light : styles.dark]}>
      <Text style={styles.text}>Current Theme: {theme}</Text>
      <Text style={styles.text}>Current Number: {value}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
      <Button title="Increase" onPress={incNum} />
      <Button title="Decrease" onPress={decNum} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#333',
  },
  text: {
    color: '#000',
  },
});

export default ThemedComponent;
