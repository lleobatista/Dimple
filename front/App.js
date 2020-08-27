import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Dimensions  } from 'react-native';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#00cc66',
    paddingHorizontal: 30,
    paddingVertical:45,
    justifyContent:'center'
  },
  input:{
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#009933',
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    paddingHorizontal: 15,
    color: 'white'
  }
});
