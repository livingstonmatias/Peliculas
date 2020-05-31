import React, { useContext } from "react";

import { AppContext } from "../AppContext";
import CartaPelicula from "../components/CartaPelicula";
import BotonVerMas from "../components/BotonVerMas";

const ListadoPeliculas = () => {
  const { peliculas, query } = useContext(AppContext);

  return (
    <>
      <div className="listado-peliculas">
        {peliculas.map((pelicula, index) => {
          return (
            <div key={index} className="text-dark w-100">
              <CartaPelicula {...pelicula}></CartaPelicula>
            </div>
          );
        })}
      </div>

      {peliculas.length === 0 && (
        <div className="w-100 d-flex justify-content-center">
          <div class="alert alert-danger" role="alert">
            No se encontraron resultados para la busqueda de:{" "}
            <strong>{query}</strong>
          </div>
        </div>
      )}
      <BotonVerMas></BotonVerMas>
    </>
  );
};

export default ListadoPeliculas;
