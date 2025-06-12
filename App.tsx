import React from 'react';
import TodoApp from './components/TodoApp/Todo';
import HomePage from './components/BankingApp/HomePage';
import AddMoney from './components/BankingApp/AddMoney';
import Profile from './components/BankingApp/(tabs)/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import Navigation from './components/BankingApp/RootStack';

function App(): React.JSX.Element {
  return (
   <Navigation />
  );
}


export default App; 