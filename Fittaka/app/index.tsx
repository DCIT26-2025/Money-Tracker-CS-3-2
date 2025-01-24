// filepath: /c:/Users/Tym/Desktop/expense-tracker-app-main/fittakaFinals/Fittaka/app/index.tsx
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { TouchableOpacity, Alert } from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import RecordsScreen from '../screens/RecordScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TipsScreen from '../screens/TipsScreen';
import TransactionScreen from '@/screens/TransactionScreen';
import { Ionicons } from '@expo/vector-icons';

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
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => Alert.alert('Notifications', 'No new notifications!')}
            >
              <Ionicons name="notifications-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),  
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