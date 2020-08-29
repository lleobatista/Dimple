import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import test from '../../assets/icon.png'

const HeaderCalendar = (props) => (
  <View style={styles.conteiner}>
    <Image source={test} style={styles.img}/>
    <Text style={styles.firstname}>  Leonardo <Text style={styles.secondname}>Batista </Text> </Text>
  </View>
);

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#00cc66',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5
  },
  firstname: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },
  secondname: {
    fontWeight: 'normal',
    fontSize: 25 
  },
  img: {
    borderRadius: 90,
    height: 45,
    width: 45
  }
});

export default HeaderCalendar;