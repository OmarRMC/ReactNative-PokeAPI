import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetallesPokemon = ({ pokemon }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <Text style={styles.detail}>Altura: {pokemon.height}</Text>
      <Text style={styles.detail}>Peso: {pokemon.weight}</Text>
      <Text style={styles.detail}>Habilidades: {pokemon.abilities.map(a => a.ability.name).join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default DetallesPokemon;
