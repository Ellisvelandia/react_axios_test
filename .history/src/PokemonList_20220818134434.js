import { useEffect, useState } from "react";
import { axios } from "axios";

const PokemonList = () {
  const [pokemons, setPokemons] = useState ([]);
  const [error, setError] = useState (false);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon")
    .then((resp) {
      if (resp.status === 200) return resp.json();
      else throw n
    })
    .then((data) => setPokemons(data.results))
    .catch((e) => setError (true));
  }, []);

  return error ? (
    <p>Unable to axios data</p>
  ) :(
    <table>
      {pokemons.map((pokemon) => {
       <tr>
        <td>{pokemon.name}</td>
       </tr>
      })}
    </table>
  );
};