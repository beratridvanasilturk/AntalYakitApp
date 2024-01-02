// In App.js in a new project

import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchView from './SearchView';
import ResultShowRestaurant from './ResultShowRestaurant';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'AntalYakıt' }} >
          <Stack.Screen name="Home" component={SearchView} />
          <Stack.Screen name="ResultShowRestaurant" component={ResultShowRestaurant} />
        </Stack.Navigator>
      </NavigationContainer>
 
  );
}

export default App;