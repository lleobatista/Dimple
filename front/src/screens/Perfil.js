import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import axios from 'axios'

import SafeBottom from '../components/SafeBottom'

export default class Perfil extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount(){
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
    firebase.analytics();

    firebase
      .auth()
      .signInWithEmailAndPassword('jordimartinali@thenetherlands.com', '123456')
      .then(user => {console.log('OK', user)})
      .catch(error => {console.log('ERRO', error)})
    }

  componentDidMount(){
    this.setState({ loading:true });

    axios.get('https://randomuser.me/api/?nat=us&results=1').then(response => {
      const {results} = response.data;
      this.setState ({
        people: results,
        loading: false
      })
    }).catch(error => {
      this.setState({
        error: true,
        loading: false
      })
    })
  }

  renderPerson(){

    const textElements = this.state.people.map(person => {
      const {first} = person.name;
      const {last} = person.name;
      const {large} = person.picture;

      return  (
        <View style={styles.imageView}>
          <Image source={{uri:large}} style={styles.img}/>
          <Text key={first} style={styles.textName}>{first} <Text key={last} style={styles.textLastName}>{last}</Text></Text>
        </View>
      );
    });

    return textElements;
  }
  
  render(){

    const Separator = () => (
      <View style={styles.separator} />
    );

    return(
      <View style={styles.container}>
      
        <Header
          placement="center"
          leftComponent={{
            icon: 'keyboard-arrow-left',
            size: 40,
            onPress:() => this.props.navigation.goBack()
          }}

          centerComponent={{
            text: 'Perfil',
            style: {
              fontWeight: 'bold',
              fontSize: 18 
            }
          }}

          containerStyle={{
            backgroundColor: '##ECECEC',
            marginBottom:-.2
          }}
      />

      <View style={styles.imageView}>
      {
          this.state.loading ? 
          <ActivityIndicator size="large" color="black"/>
          :
            this.state.error ? 
            <Text>Error ao carregar informações do perfil</Text> 
            : 
              this.renderPerson()
      }        
      
      </View>

      <Text style={styles.titleText}>PERFIL</Text>

      <Separator/>
      <TouchableOpacity style={styles.btm}>
        <Text style={styles.btmText}>Alterar foto</Text>
        <Icon 
          name='chevron-right'
        />
      </TouchableOpacity>
      <Separator/>

      <Text style={styles.titleText}>CONTA</Text>

      <Separator/>
      <TouchableOpacity style={styles.btm}>
        <Text style={styles.btmText}>Relatar problemas na sala</Text>
        <Icon 
          name='chevron-right'
        />
      </TouchableOpacity>
      <Separator/>

      <Separator/>
      <TouchableOpacity style={styles.btm}>
        <Text style={styles.btmText}>Histórico de agendamento</Text>
        <Icon 
          name='chevron-right'
        />
      </TouchableOpacity>
      <Separator/>

      <Separator/>
      <TouchableOpacity style={styles.btm}>
        <Text style={styles.btmText}>Configurar notificações</Text>
        <Icon 
          name='chevron-right'
        />
      </TouchableOpacity>
      <Separator/>
      
      <View style={styles.sairView}>
      <Separator/>
      <TouchableOpacity style={styles.btm} onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={styles.btmText2}>Sair</Text>
        <Icon 
          name='chevron-right'
          color='red'
        />
      </TouchableOpacity>
      <Separator/>
      
      <SafeBottom />
     
      </View>
      
      <StatusBar style="dark" /> 
      </View>
    );
 }
 }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ECECEC'
  },
  img:{
    borderRadius: 90,
    height: 120,
    width: 120
  }, 
  separator: {
    borderBottomColor: '#BBBBBB',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btm:{
    backgroundColor:'white',
    width:'100%', 
    height: 45,
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  btmText:{
    fontSize:19,
    fontWeight:'400',
    marginLeft:20
  },
  btmText2:{
    fontSize:19,
    fontWeight:'400',
    marginLeft:20,
    color:'red'
  },
  titleText:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:15,
    marginLeft:20,
    marginBottom:8
  },
  sairView:{
    bottom:0,
    position:'absolute',
    marginBottom: 50,
    flex:1,width:'100%',
    height: 45
  },
  imageView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  textName:{
    fontSize:30, 
    fontWeight:'bold', 
    marginLeft:10
  },
  textLastName:{
    fontSize:30, 
    fontWeight:'300'
  }
});