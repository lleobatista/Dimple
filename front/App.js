import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login';
import CalendarScreen from './src/screens/CalendarScreen';
import Perfil from './src/screens/Perfil';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Calendar' component={CalendarScreen} options={{ gestureEnabled: false}}/>
        <Stack.Screen name='Perfil' component={Perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}