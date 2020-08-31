import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Platform, StyleSheet, KeyboardAvoidingView  } from 'react-native';
import HeaderLogin from '../components/HeaderLogin';
import { Button } from 'react-native-elements';


export default class Login extends Component {
  render() {
    
    return (
      <View style={{flex:1, backgroundColor: '#3A64FF'}}>
      <HeaderLogin/>
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
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
          titleStyle={{ 
            color:'black', 
            fontWeight: 'bold'
          }}

          buttonStyle={{ 
            backgroundColor: 'white', 
            borderRadius: 50, height:45, 
            marginVertical:25 
          }}
          onPress={() => this.props.navigation.navigate('Calendar')}
        />
        <StatusBar style="light"/>
      </KeyboardAvoidingView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3A64FF',
    paddingHorizontal: 30,
    paddingVertical:45,
    justifyContent:'center'
  },
  input:{
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#002BC9',
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    paddingHorizontal: 15,
    color: 'white'
  }
});