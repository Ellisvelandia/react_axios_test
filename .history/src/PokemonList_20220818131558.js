import { useEffect, useState } from "react";
import { axios } from "axios";

const PokemonList = () {
  const [pokemons, setPokemons] = useState ([]);
  const [error, setError] = useState (false);

  useEffect(() => {
    axios()
  }, [])
}