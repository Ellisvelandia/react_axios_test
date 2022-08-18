import './App.css'
import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'

function App () {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [currentPageUrl])

  return (
    <div className='App'>
      <PokemonList pokemon={pokemon} />
    </div>
  )
}

export default App
