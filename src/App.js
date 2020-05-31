import React, { useState } from "react";
import "./App.css";

import Buscador from "./components/Buscador";
import ListadoPeliculas from "./containers/ListadoPeliculas";

import { AppContext } from "./AppContext";

const PELICULAS_ALEATORIAS = [
  "batman",
  "avenger",
  "dragon",
  "guerra",
  "hacker"
];

function generaAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * (5 - 1)) * 1;
  return PELICULAS_ALEATORIAS[numeroAleatorio - 1];
}

function App() {
  const queryAleatoria = generaAleatorio() || PELICULAS_ALEATORIAS[0];
  const [peliculas, setPeliculas] = useState([]);
  const [query, setQuery] = useState(queryAleatoria);
  const [pagina, setPagina] = useState(2);

  return (
    <div className="App bg-dark text-light px-2">
      <AppContext.Provider
        value={{ peliculas, setPeliculas, query, setQuery, pagina, setPagina }}
      >
        <Buscador></Buscador>

        <ListadoPeliculas></ListadoPeliculas>
      </AppContext.Provider>
    </div>
  );
}

export default App;
