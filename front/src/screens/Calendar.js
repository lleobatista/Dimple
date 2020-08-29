import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HeaderCalendar from '../components/HeaderCalendar';

export default class Calendar extends Component {
  render(){
    return(
      <SafeAreaView style={{flex:1, backgroundColor: '#00cc66'}}>
        <HeaderCalendar />     
        <StatusBar style="light"/>
      </SafeAreaView>
    );
  }
}
