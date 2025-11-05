// src/App.jsx
import React from "react";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokédex</h1>
      <PokemonList />
    </div>
  );
}

export default App;
