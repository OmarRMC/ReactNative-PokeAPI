import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ title: 'Lista de Pokémon' }} />
        <Stack.Screen name="Detalles" component={DetailsScreen} options={{ title: 'Detalles del Pokémon' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
