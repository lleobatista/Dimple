import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TextInput, Platform, StyleSheet, KeyboardAvoidingView, Dimensions  } from 'react-native';
import { Button } from 'react-native-elements';

import HeaderLogin from './src/components/HeaderLogin';

const { height, width } = Dimensions.get('window')
export default function App() {
  return (
    <View style={{flex:1, backgroundColor: '#00cc66'}}>
    <HeaderLogin/>
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS=== 'ios'}
      style={styles.container}>
      
      <TextInput
        placeholder="Digite seu login"
        autoFocus={true}
        autoCorrect={false}
        style={styles.input}
        selectionColor="white"
        placeholderTextColor="white"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        autoCorrect={false}
        style={styles.input}
        selectionColor="white"
        placeholderTextColor="white"
        keyboardType="number-pad"
        secureTextEntry={true}
      />
      <Button
        title="Entrar"
        titleStyle={{ color:'black', fontWeight: 'bold'}}
        buttonStyle={{ backgroundColor: 'white', borderRadius: 50, height:45, marginVertical:25 }}
      />
      <StatusBar style="auto" />
    </KeyboardAvoidingView >
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
