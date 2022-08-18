import './App.css'
import React, { useState } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'

function App () {
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander'])

  axios.get()
  return (
    <div className='App'>
      <PokemonList pokemon={pokemon} />
    </div>
  )
}

export default App
