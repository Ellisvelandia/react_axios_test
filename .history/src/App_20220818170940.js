import './App.css';
import React, {useState} from "react";
import PokemonList from "./PokemonList";

function App() {
  const [Pokemon, setPokemon] = useState(initialState)
  return (
    <div className="App">
    <PokemonList/>
    </div>
  );
}

export default App;
