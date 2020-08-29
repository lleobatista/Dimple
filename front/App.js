import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login';
import Calendar from './src/screens/Calendar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Calendar' component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}