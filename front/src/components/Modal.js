import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Button } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const { height } = Dimensions.get('window')

const Modal = ({ show, close }) => {

  const [selectedValue, setSelectedValue] = useState({
    room: ''
  });

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true }),
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true }),
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  const Separator = () => (
    <View style={styles.separator} />
  );
  

  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        
        <View style={styles.indicator} />
        <Text style={{fontSize:18,marginTop:30, fontWeight:'bold', alignSelf:'center'}}>Agendamento</Text>
        <DropDownPicker
          placeholder="Seleciona o número da sala que deseja agendar"
          items={[
            {label: 'Sala A34', value: 'a34'},
            {label: 'Sala B15', value: 'b15'},
            {label: 'Sala G05', value: 'g05'},
            {label: 'Sala P10', value: 'p10'},
            {label: 'Sala T50', value: 't50'}  
          ]}
          style={{backgroundColor: '#fafafa'}}
          containerStyle={{height: 50, width:'100%', marginTop:20}}
          
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => setSelectedValue({
            country: item.value
          })}
        />
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:20,fontWeight:'400',marginTop:20}}>Dia: </Text>
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:20 }}>12/08/2020</Text>
         </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:20,fontWeight:'400',marginTop:20}}>Horário: </Text>
          <Text style={{fontSize:20,fontWeight:'bold', marginTop:20}}>13:00 até 14:00</Text>
        </View>
          
        <View style={{flexDirection:'row',justifyContent:'center', marginTop:10}}>
          <TouchableOpacity style={styles.btn2} onPress={close}>
          <Text style={{ color: '#fff', fontSize:25, fontWeight:'300' }}>CANCELAR</Text>
        </TouchableOpacity>
        <Text>  </Text>
        <TouchableOpacity style={styles.btn} onPress={close}>
          <Text style={{ color: '#fff', fontSize:25, fontWeight:'300' }}>CONFIRMAR</Text>
        </TouchableOpacity>
        </View>
       
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '50%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5
  },
  text: {
    marginTop: 50,
    textAlign: 'center'
  },
  btn: {
    width: '49%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#17BC04',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  btn2: {
    width: '49%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

export default Modal