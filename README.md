# **Web Service con React Native (API Pokémon)**  

Este proyecto es una aplicación móvil desarrollada con **React Native** utilizando **Expo** que consume datos de la **PokeAPI**. Permite listar Pokémon, buscar por nombre y ver detalles de un Pokémon específico. Está diseñado para demostrar el consumo de Web Services en una aplicación multiplataforma.  

---

## **Características Principales**  
- Lista los primeros 50 Pokémon con nombre e imagen.  
- Barra de búsqueda dinámica para filtrar Pokémon.  
- Pantalla de detalles para cada Pokémon, mostrando habilidades, altura y peso.  

---

## **Tecnologías Utilizadas**  
- **React Native**: Framework para desarrollo móvil multiplataforma.  
- **Expo**: Herramienta para simplificar el desarrollo y pruebas.  
- **Axios**: Biblioteca para realizar solicitudes HTTP.  
- **PokeAPI**: API pública para obtener datos de Pokémon.  

---

## **Instalación y Configuración**  

### **Requisitos Previos**  
- Node.js instalado en tu sistema.  
- Expo CLI instalado globalmente:  
  ```bash
  npm install -g expo-cli
  ```

## Pasos para Ejecutar el Proyecto
Clona este repositorio:
``` bash
git clone https://github.com/OmarRMC/ReactNative-PokeAPI.git
cd ReactNative-PokeAPI
```

## Instala las dependencias del proyecto:
``` bash
npm install
```
## Inicia el servidor de desarrollo de Expo:
``` bash
npm start
```
## Inicia el servidor de desarrollo de Expo:
``` bash
npx expo  start
```
Escanea el código QR con la app de Expo Go o inicia el emulador de tu elección.

# Estructura del Proyecto
``` bash
.
├── App.js             # Configuración de navegación y rutas principales.
├── components/        # Componentes reutilizables.
│   ├── PokemonCard.js # Tarjetas de Pokémon en la lista principal.
│   ├── PokemonDetails.js # Componente para mostrar detalles del Pokémon.
├── screens/           # Pantallas de la aplicación.
│   ├── HomeScreen.js  # Pantalla de inicio con la lista y búsqueda.
│   ├── DetailsScreen.js # Pantalla para los detalles de un Pokémon.
├── utils/             # Lógica y utilidades.
│   ├── api.js         # Funciones para consumir la API Pokémon.
├── assets/            # Recursos estáticos.
└── package.json       # Configuración del proyecto y dependencias.

```

# Funcionalidades
1. Pantalla Principal (HomeScreen.js)
Carga una lista de Pokémon desde la PokeAPI.
Incluye una barra de búsqueda para filtrar Pokémon por nombre.
2. Pantalla de Detalles (DetailsScreen.js)
Muestra información detallada del Pokémon seleccionado, incluyendo:
Imagen principal.
Habilidades.
Altura y peso.
3. Consumo de la API (api.js)
fetchPokemonList(limit): Obtiene una lista de Pokémon con su nombre e imagen.
fetchPokemonDetails(name): Recupera detalles de un Pokémon específico.
