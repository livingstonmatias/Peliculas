import React, { useContext, useState } from "react";

import { AppContext } from "../AppContext";

const Buscador = () => {
  const { setPeliculas, query, setQuery, setPagina } = useContext(AppContext);

  const buscar = async (e) => {
    e.preventDefault();

    // Reseteo numero de pagina
    setPagina(2);

    const res = await fetch(
      "http://www.omdbapi.com/?apikey=a24689ae&s=" + query
    );
    const data = await res.json();

    if (data.Response === "True") {
      setPeliculas(data.Search);
    }
  };

  return (
    <div className="form-group py-4 row">
      <div className="col-lg-4 col-md-12 offset-lg-4">
        <form onSubmit={buscar}>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill"
            placeholder="Buscar por el nombre de tu pelicula"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Buscador;
