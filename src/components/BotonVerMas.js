import React, { useContext, useState } from "react";

import { AppContext } from "../AppContext";

const BotonVerMas = () => {
  const { peliculas, setPeliculas, query, pagina, setPagina } = useContext(
    AppContext
  );

  const fetchMasPeliculas = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=a24689ae&s=${query}&page=${pagina}`
    );
    const data = await res.json();

    if (data.Response === "True") {
      setPagina(pagina + 1);
      setPeliculas([...peliculas, ...data.Search]);
    }
  };

  return (
    <div>
      {peliculas.length > 0 && (
        <div className="d-flex justify-content-center mt-4 mb-2 w-100">
          <button
            className="btn btn-primary btn-sm"
            onClick={fetchMasPeliculas}
          >
            Ver mas
          </button>
        </div>
      )}
    </div>
  );
};

export default BotonVerMas;
