import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, StyleSheet, Image   } from 'react-native';
import { Header } from 'react-native-elements';
import test from '../../assets/icon.jpeg'

import HeaderLogin from '../components/HeaderLogin';

export default class Perfil extends Component {
  render(){
    return(
      <View style={{flex:1, backgroundColor: '#ECECEC'}}>
        <Header
          placement="center"
          leftComponent={{icon: 'keyboard-arrow-left', color: 'dark', size: 40, onPress:() => this.props.navigation.goBack()}}
          centerComponent={{ text: 'Perfil', style: { color: 'dark', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={{}}
          containerStyle={{
            backgroundColor: '##ECECEC',
            marginBottom:-.2
          }}
      />
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:20}}>
      <Image source={test} style={styles.img}/>
     
      <Text style={{fontSize:30, 
        fontWeight:'bold', 
        marginLeft:10}}
      >
        Leonardo 
        
        <Text style={{fontSize:30, 
          fontWeight:'300'}}
        >
          Silva
          
        </Text>
      </Text>
      
      </View>    

      <StatusBar style="dark" /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 90,
    height: 120,
    width: 120
  }
});