import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput , Text } from 'react-native';
import TarjetaPokemon from '../components/PokemonCard';
import { obtenerListaPokemon } from '../utils/api';

const PantallaInicio = ({ navigation }) => {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [consulta, setConsulta] = useState('');

  useEffect(() => {
    obtenerListaPokemon().then(setListaPokemon);
  }, []);

  const pokemonFiltrados = listaPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(consulta.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.information}>
      <Text style={styles.cod} >Cod 346</Text>
      <Text style={styles.nombre}>Omar Rodrigo Mamani Capcha</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar Pokémon..."
        value={consulta}
        onChangeText={setConsulta}
      />
      <FlatList
        data={pokemonFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TarjetaPokemon
            pokemon={item}
            onPress={() => navigation.navigate('Detalles', { name: item.name })}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems:"center"
  },
  searchBar: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width:"90%"
  },
  information:{
    display:"flex", 
    flexDirection:"row", 
    gap:10,
    marginBottom:20 , 
    
  }, 
  cod:{
    fontWeight:"bold", 
    color:"green"

  }, 
  nombre:{
    fontWeight:"bold", 
  }

});

export default PantallaInicio;
