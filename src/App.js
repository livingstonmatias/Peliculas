import React, { useState } from "react";
import "./App.css";

import Buscador from "./components/Buscador";
import ListadoPeliculas from "./containers/ListadoPeliculas";

import { AppContext } from "./AppContext";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [query, setQuery] = useState("");
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
