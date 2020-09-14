import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Platform, StyleSheet, KeyboardAvoidingView, ActivityIndicator, Text, Alert } from 'react-native';
import HeaderLogin from '../components/HeaderLogin';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import FormRow from '../components/FormRow';


export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false,
      message: "",
    }
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyAcRb2KuMYnNxhri7_CVApG4YN2my7uhWc",
      authDomain: "dimple-b8670.firebaseapp.com",
      databaseURL: "https://dimple-b8670.firebaseio.com",
      projectId: "dimple-b8670",
      storageBucket: "dimple-b8670.appspot.com",
      messagingSenderId: "4094177131",
      appId: "1:4094177131:web:ada50fa0d3b125c8e3262e",
      measurementId: "G-14FQTR2WM5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  } 

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor
    })
  }

  processLogin() {
    this.setState({ isLoading: true });

    const {email, password} = this.state;

    const loginUserFailed = error => {
      this.setState({
        message: this.getMessageByError(error.code)
      });
    }  

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      this.props.navigation.navigate('Calendar');
    }
    )
    .catch(error => { 

      loginUserFailed
      switch(error.code){
        case "auth/user-not-found":
          return (
            Alert.alert(
              "E-mail inexistente."
              [{
                text: 'Ok'
              }],
              )
          );
        
        case "auth/wrong-password":
          return(
            Alert.alert(
              "Senha errada."
              [{
                text: 'Ok'
              }],
              )
          );

        default:
          return(
            Alert.alert(
              "Senha e e-mail incorreto"
              [{
                text: 'Ok'
              }],
              )
          );
      }
     
    })
    .then( () => {
      this.setState({ isLoading: false });
    })
  }


  getMessageByError(code) {
    switch(code) {
      case "auth/user-not-found":
        return "E-mail inexistente.";
      case "auth/wrong-password":
        return "Senha incorreta."
      default:
        return "Erro desconhecido.";
    }
  }

  renderButton(){
    if(this.state.isLoading)
      return <ActivityIndicator />

    return(
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
          onPress={() => this.processLogin()}
        />
    );
  }

  renderMessage(){
    const { message } = this.state;

    if(!message)
      return null;

    return(
      <View>
        <Text>{message}</Text>
      </View>
    );
  }


  render() {
    
    return (
      <View style={{flex:1, backgroundColor: '#3A64FF'}}>
      <HeaderLogin/>
      
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.container}>

        <FormRow>  
        <TextInput
          placeholder="Digite seu login"
          autoFocus={true}
          autoCorrect={false}
          style={styles.input}
          selectionColor="white"
          placeholderTextColor="white"
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={valor => {
            this.onChangeHandler('email', valor)
          }}
        />
        </FormRow>

        <FormRow>
        <TextInput
          placeholder="Senha"
          autoCorrect={false}
          style={styles.input}
          selectionColor="white"
          placeholderTextColor="white"
          keyboardType="number-pad"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={valor => {
            this.onChangeHandler('password', valor)
          }}
        />
        </FormRow>

        { this.renderButton() }
        { this.renderMessage() }

        
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