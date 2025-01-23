// filepath: /c:/Users/Tym/Desktop/expense-tracker-app-main/fittakaFinals/Fittaka/app/index.tsx
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecordsScreen from '../screens/RecordScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TipsScreen from '../screens/TipsScreen';
import TransactionScreen from '@/screens/TransactionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6a0dad', // Purple background
          },
          headerTintColor: '#fff', // White text
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Records" component={RecordsScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Tips" component={TipsScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
      </Stack.Navigator>

  );
}