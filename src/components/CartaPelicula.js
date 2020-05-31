import React from "react";
import ModalDetallePelicula from "./ModalDetallePelicula";

const CartaPelicula = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className="card w-100 h-100">
      <img src={Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <div className="card-text d-flex justify-content-between">
          <span>{Type}</span>
          <span>{Year}</span>
        </div>

        <ModalDetallePelicula imdbID={imdbID}></ModalDetallePelicula>
      </div>
    </div>
  );
};

export default CartaPelicula;
