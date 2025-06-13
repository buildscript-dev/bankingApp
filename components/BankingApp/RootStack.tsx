import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './HomePage';
import AddMoney from './AddMoney';
import Profile from './(tabs)/ProfileScreen';
import ReservedWallet from './WalletSection/ReservedWallet';
import Deposit from './WalletSection/Deposit';
import Transfer from './WalletSection/Transfer';
import ApplePay from './WalletSection/ApplePay';
import CreditCard from './WalletSection/CreditCard';
import MapScreen from './(tabs)/MapScreen';
import SettingScreen from './(tabs)/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

// 1. Stack + Tab Creators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 2. Bottom Tab Navigator (reusable)
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
       name="Home" 
       component={HomePage} 
       options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" size={25} color={'grey'} />
    ),       }}/>
      <Tab.Screen 
      name="Map" 
      component={MapScreen} />
      <Tab.Screen 
      name="Settings" 
      component={SettingScreen} />
      <Tab.Screen 
      name="Transfer" 
      component={Transfer} />
      <Tab.Screen 
      name="Profile" 
      component={Profile} />
    </Tab.Navigator>
  );
}

// 3. Stack Navigator (wraps tabs + other screens)
function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      {/* Tabs come first */}
      <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />

      {/* Other screens pushed on top of tabs */}
      <Stack.Screen
        name="Wallet"
        component={AddMoney}
        options={{
          title: 'Wallet',
          headerStyle: { backgroundColor: '#FAF6E9' },
          headerTintColor: 'black',
          headerTitleStyle: { fontWeight: '600', fontSize: 20 },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name="Reserved" component={ReservedWallet} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="ApplePay" component={ApplePay} />
      <Stack.Screen name="CreditCard" component={CreditCard} />
    </Stack.Navigator>
  );
}

// 4. Wrap Everything in NavigationContainer
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
