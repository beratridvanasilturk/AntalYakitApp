// In App.js in a new project

import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchView from './SearchView';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'AntalYakıt' }} >
          <Stack.Screen name="Home" component={SearchView} />
        </Stack.Navigator>
      </NavigationContainer>
 
  );
}

export default App;