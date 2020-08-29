import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HeaderCalendar from '../components/HeaderCalendar';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';

export default class Calendari extends Component {

  render(){

    LocaleConfig.locales['pt'] = {
      monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set..', 'Out.', 'Nov.', 'Dez.'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      today: 'Hoje\'hj'
    };

    LocaleConfig.defaultLocale = 'pt';

    return(
      <SafeAreaView style={{flex:1, backgroundColor: '#3A64FF', marginBottom:-100 }} >
      <View style={{flex:1, backgroundColor:'#ECECEC', height:10000}}>
      
        <HeaderCalendar />     
        <Calendar
        minDate={new Date()}
        maxDate={'2021-05-30'}
        hideExtraDays={true}
        disableMonthChange={true}
        onMonthChange={(month) => {console.log('month changed', month)}}
        monthFormat={'MMMM yyyy'}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        onDayPress={(day) => {console.log('selected day', day)}}
        
        
        

        markedDates={{
          'day.dateString': {selected: true, marked: true, disableTouchEvent: true}
        }}

        style={{
          height: 400,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
	          height: 5,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        }}
        theme={{
          backgroundColor: '#3A64FF',
          calendarBackground: '#3A64FF',
          textSectionTitleColor: 'white',
          todayTextColor: 'white',
          dayTextColor: 'white',
          textDisabledColor: '#567AFF',
          disableArrowLeft: 'white',
          onPressArrowRight: 'white',
          monthTextColor: 'white',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
          textDayHeaderFontSize: 14,
          textDayFontSize: 27,
          textMonthFontSize: 22,
          'stylesheet.calendar.header': {
            arrowImage: {
              tintColor: 'white',
            }
          }
        }}
        />
        
        
      </View>
      <StatusBar style="light" animated={false}/>
      </SafeAreaView>
    );
  }
}
