import React, { useContext, useEffect } from "react";

import { AppContext } from "../AppContext";

const Buscador = () => {
  const { setPeliculas, query, setQuery, setPagina } = useContext(AppContext);

  const buscar = async e => {
    if (e) {
      e.preventDefault();
    }

    // Reseteo numero de pagina
    setPagina(2);

    const res = await fetch(
      "https://www.omdbapi.com/?apikey=a24689ae&s=" + query
    );
    const data = await res.json();

    if (data.Response === "True") {
      setPeliculas(data.Search);
    } else {
      setPeliculas([]);
    }
  };

  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="form-group py-4 row">
      <div className="col-lg-4 col-md-12 offset-lg-4">
        <form className="d-flex" onSubmit={buscar}>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill"
            placeholder="Buscar por el nombre de tu pelicula"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            type="submit"
            class="btn btn-sm"
            style={{
              marginLeft: "-50px",
              fontSize: "20px"
            }}
          >
            <svg
              class="bi bi-search"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Buscador;
