import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './HomePage';
import AddMoney from './AddMoney';
import Profile from './(tabs)/Profile';

const RootStack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen 
        name="Home" 
        component={HomePage} 
        options={{ headerShown: false }} 
      />
 <RootStack.Screen 
  name="Wallet"
  component={AddMoney}
  options={{
    title: 'Wallet', // optional: change the title too
    headerStyle: {
      backgroundColor: '#FAF6E9', // dark mode vibes?
    },
    headerTintColor: 'black', // text/icon color
    headerTitleStyle: {
      fontWeight: 'semibold',
      fontSize: 20,
    },
    headerShadowVisible: false, // remove that default shadow (optional)
  }}
/>

      <RootStack.Screen 
        name="Profile" 

        component={Profile} 
      />
    </RootStack.Navigator>
  );
}

// Wrap it in NavigationContainer (always the root of your app)
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
