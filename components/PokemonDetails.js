import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';


const DetallesPokemon = ({ pokemon }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <Text style={styles.detail}>Altura: {pokemon.height}</Text>
      <Text style={styles.detail}>Peso: {pokemon.weight}</Text>
      <View style={styles.habilidades}>
        {
        //pokemon.abilities.map(a => a.ability.name).join(', ')
        }
        <Text  style={styles.title}>Lista de Habilidades </Text>
        <FlatList
        data={pokemon.abilities}
        renderItem={({ item ,index}) => <Text>{(index+1)+". "+item.ability.name}</Text>}>
        </FlatList>
          </View>
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
  habilidades:{
  
  }
  , 
  title:{
  fontWeight: "bold"
  }
});

export default DetallesPokemon;
