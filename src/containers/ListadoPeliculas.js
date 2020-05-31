import React, { useContext } from "react";

import { AppContext } from "../AppContext";
import CartaPelicula from "../components/CartaPelicula";
import BotonVerMas from "../components/BotonVerMas";

const ListadoPeliculas = () => {
  const { peliculas } = useContext(AppContext);

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
      <BotonVerMas></BotonVerMas>
    </>
  );
};

export default ListadoPeliculas;
