import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import DetallesPokemon from '../components/PokemonDetails';
import { obtenerDetallesPokemon } from '../utils/api';

const PantallaDetalles = ({ route }) => {
  const { name } = route.params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    obtenerDetallesPokemon(name).then(setPokemon);
  }, [name]);

  if (!pokemon) {
    return <ActivityIndicator size="large" />;
  }

  return <DetallesPokemon pokemon={pokemon} />;
};

export default PantallaDetalles;
