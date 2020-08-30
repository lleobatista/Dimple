import React from 'react';
import { Header } from 'react-native-elements';

const HeaderLogin = (props) => (
  <Header
    placement="center"
    leftComponent={{ icon: 'keyboard-arrow-left', color: 'white', size: 40}}
    centerComponent={{ text: 'Login', style: { color: 'white', fontWeight: 'bold', fontSize: 18 } }}
    rightComponent={{}}
    containerStyle={{
      backgroundColor: '#3A64FF',
      marginBottom:-.2
    }}
  />
);
export default HeaderLogin;