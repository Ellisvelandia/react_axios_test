import { useEffect, useState } from "react";
import { axios } from "axios";
import { Api } from "./api";

const PokemonList = () {
  const [pokemons, setPokemons] = useState ([]);
  const [error, setError] = useState (false);

  useEffect(() => {
   
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