import React, { useState } from "react";

import Loading from "./Loading";

const ModalDetallePelicula = ({ imdbID }) => {
  const [detallePelicula, setDetallePelicula] = useState();

  const abrirModal = () => {
    window.$(`#modal-detalle-${imdbID}`).modal("show");
    fetchDetallePelicula();
  };

  const cerrarModal = () => {
    window.$(`#modal-detalle-${imdbID}`).modal("hide");
  };

  const fetchDetallePelicula = async () => {
    const res = await fetch(
      "https://www.omdbapi.com/?apikey=a24689ae&i=" + imdbID
    );
    const data = await res.json();

    if (data.imdbID) {
      setDetallePelicula(data);
    }
  };

  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={abrirModal}>
        Ver detalle
      </button>
      <div
        id={`modal-detalle-${imdbID}`}
        className="modal text-dark"
        tabIndex="-1"
        role="dialog"
      >
        {detallePelicula && (
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{detallePelicula.Title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={cerrarModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body row">
                <div className="col-lg-5 col-md-12 d-flex justify-content-center">
                  <img src={detallePelicula.Poster} />
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="d-flex flex-wrap">
                    <span class="badge badge-pill badge-info mx-1 my-1">
                      Año: {detallePelicula.Year}
                    </span>

                    <span class="badge badge-pill badge-info mx-1 my-1">
                      Clasificacion: {detallePelicula.Rated}
                    </span>

                    <span class="badge badge-pill badge-info mx-1 my-1">
                      Duracion: {detallePelicula.Runtime}
                    </span>

                    <span class="badge badge-pill badge-info mx-1 my-1">
                      Genero: {detallePelicula.Genre}
                    </span>
                  </div>

                  <div className="mt-3">{detallePelicula.Writer}</div>

                  <div className="mt-3">
                    <strong>Actores:</strong> {detallePelicula.Actors}
                  </div>

                  <div className="mt-3">
                    <ul class="list-group">
                      {detallePelicula.Ratings.map(rating => {
                        return (
                          <li
                            class="list-group-item d-flex justify-content-between"
                            key={rating.Source}
                          >
                            <strong>{rating.Source}</strong>
                            <span>{rating.Value}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={cerrarModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        {!detallePelicula && <Loading></Loading>}
      </div>
    </>
  );
};

export default ModalDetallePelicula;
