import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Icon } from 'react-native-elements';

import HeaderCalendar from '../components/HeaderCalendar';
import SafeBottom from '../components/SafeBottom';
import Modal from '../components/Modal';


const CalendarScreen = () => {  

  const [modal, setModal] = useState(false)
  
  LocaleConfig.locales['pt'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set..', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: 'Hoje\'hj'
  };

  LocaleConfig.defaultLocale = 'pt';
  
    

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Quase',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7p',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d02',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <TouchableOpacity  style={styles.item} onPress={() => setModal(true)} >
      <Icon
      name="warning"
      size={40}
      color="#FF4A4A"
      />
      <Text style={styles.title}>  Todas <Text style={{fontWeight:'300'}}>reservadas</Text> 12:00 até 13:00</Text>
    </TouchableOpacity >
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
    
    return(
      <View style={{flex:1, flexDirection:'column'}}>
      
      
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
        
        style={{
          height:370,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
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
          textMonthFontWeight: 'normal',
          textDayHeaderFontWeight: 'bold',
          textDayHeaderFontSize: 10,
          textDayFontSize: 15,
          textMonthFontSize: 25,
          'stylesheet.calendar.header': {
            arrowImage: {
              tintColor: 'white',
            }
          }
        }}
        />
        <FlatList
          style={{marginTop: 10, flex: 1}}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        <Modal 
          show={modal}
          close={() => setModal(false)}
        />

        <SafeBottom/>
      <StatusBar style="light" animated={false}/>
      </View>
    )
  }

  
const styles = StyleSheet.create({
  item: {
    flexDirection:'row',
    alignItems:'center',
    marginTop: 2,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
    height: 70
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})


export default CalendarScreen;