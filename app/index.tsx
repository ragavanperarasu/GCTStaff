import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList} from './screens/RootParam';
import HomeScreen from './screens/HomeScreen';
import StaffLogin from './screens/axios/StaffLogin';
import StaffHome from './screens/StaffHome';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="StaffLogin" component={StaffLogin} options={{ headerShown: false }}/>
      <Stack.Screen name="StaffHome" component={StaffHome} options={{ headerShown: false }}/>
      
    </Stack.Navigator>
  );
}
