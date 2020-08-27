import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

const Headerl = (props) => (
  <Header
    placement="center"
    leftComponent={{ icon: 'keyboard-arrow-left', color: 'black', size: 40}}
    centerComponent={{ text: 'Login', style: { color: 'black', fontWeight: 'bold', fontSize: 18 } }}
    rightComponent={{}}
    containerStyle={{
      backgroundColor: '#00cc66',
      marginBottom:-.2
    }}
  />
);
export default Headerl;