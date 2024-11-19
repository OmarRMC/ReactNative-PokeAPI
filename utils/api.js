import axios from 'axios';

const API_BASE = 'https://pokeapi.co/api/v2/pokemon';

export async function obtenerListaPokemon(limit = 50) {
  const response = await axios.get(`${API_BASE}?limit=${limit}`);
  return response.data.results.map((pokemon, index) => ({
    id: index + 1,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
  }));
}

export async function obtenerDetallesPokemon(name) {
  const response = await axios.get(`${API_BASE}/${name}`);
  return response.data;
}
