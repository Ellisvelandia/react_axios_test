import { useEffect, useState } from "react";
import { axios } from "axios";

const PokemonList = () {
  const [pokemons, setPokemons] = useState ([]);
  const [error, setError] = useState (false);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon")
    .then((resp) {
      if (resp.status === 200) return resp.json {
        
      }
    })
    .then((data) => setPokemons(data.results))
    .catchx((e) => setError (true));
  }, []);

  return error ? (
    <p></p>
  )
}