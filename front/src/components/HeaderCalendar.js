import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import test from '../../assets/icon.jpeg'

const HeaderCalendar = (props) => (
  <View style={styles.conteiner}>
    <Image source={test} style={styles.img}/>
    <Text style={styles.firstname}>  Leonardo <Text style={styles.secondname}>Batista </Text> </Text>
  </View>
);

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#3A64FF',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30
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
    height: 50,
    width: 50
  }
});

export default HeaderCalendar;