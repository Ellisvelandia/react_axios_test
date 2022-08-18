import { useEffect, useState } from 'react'
import { getPokemonsFromApi } from './api'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    getPokemonsFromApi()
      .then((data) => setPokemons(data.results))
      .catch((e) => setError(true))
  }, [])

  return error ? (
    <p>Unable to axios data</p>
  ) : (
<div>

</div>
    
  )
}

export default PokemonList
