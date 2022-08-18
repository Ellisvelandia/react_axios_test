import { useEffect, useState } from 'react'
import { getPokemonsFromApi } from './api'

const PokemonList = () => {
  const [pokemon, setPokemon] = useState(["bulbbasaur", "charmander"])
  const [error, setError] = useState(false)

  useEffect(() => {
    getPokemonsFromApi()
      .then((data) => setPokemon(data.results))
      .catch((e) => setError(true))
  }, [])

  return error ? (
    <p>Unable to axios data</p>
  ) : (
    <table>
        {pokemons.map((pokemon) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
          </tr>
        ))}
    </table>
  )
}

export default PokemonList
