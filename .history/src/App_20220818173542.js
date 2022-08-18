import './App.css'
import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'

function App () {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl, {
      cancelToken
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.next)
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [currentPageUrl])

  if (loading)  return "Loading..."

  return (
    <div className='App'>
      <PokemonList pokemon={pokemon} />
    </div>
  )
}

export default App
