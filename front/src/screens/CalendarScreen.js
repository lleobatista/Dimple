import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';

import HeaderCalendar from '../components/HeaderCalendar';
import SafeBottom from '../components/SafeBottom';
import Modal from '../components/Modal'
import CalendarView from '../components/CalendarView'


const CalendarScreen = (props) => {  

  const [modal, setModal] = useState(false)

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
      <View style={{flex:1, backgroundColor:'#ECECEC'}}>
        
        <HeaderCalendar navigation={props.navigation} />
        
        <CalendarView />

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
      <StatusBar style="light"/>
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