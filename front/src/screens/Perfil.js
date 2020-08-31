import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import test from '../../assets/icon.jpeg'
import { Icon } from 'react-native-elements'

import SafeBottom from '../components/SafeBottom'

export default class Perfil extends Component {
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
      <Image source={test} style={styles.img}/>
      <Text style={styles.textName}>Leonardo <Text style={styles.textLastName}>Silva</Text></Text>
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