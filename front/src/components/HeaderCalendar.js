import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import test from '../../assets/icon.jpeg'
import { Icon } from 'react-native-elements';

const HeaderCalendar = (props) => {
 
    return(
  <SafeAreaView style={{backgroundColor: '#3A64FF'}}>
    <TouchableOpacity style={styles.conteiner}  onPress={() => props.navigation.navigate('Perfil')}>
    <Image source={test} style={styles.img}/>
    <Text style={styles.firstname}>  Leonardo <Text style={styles.secondname}>Batista </Text> </Text>
    <Icon name="edit" color="white"/>
    </TouchableOpacity>
  </SafeAreaView>
);
    }
const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#3A64FF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  firstname: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },
  secondname: {
    fontWeight: '300',
    fontSize: 25 
  },
  img: {
    borderRadius: 40,
    height: 35,
    width: 35
  }
});

export default HeaderCalendar;