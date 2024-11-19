import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TarjetaPokemon = ({ pokemon, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: pokemon.image }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default TarjetaPokemon;
