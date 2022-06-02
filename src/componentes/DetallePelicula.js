import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  UrlBase,
  apiKey,
  Lenguaje,
  UrlImagen,
} from "../auxiliares/VariablesGlobales";
import "../style/_detalles.scss";
import img from "../img/default.png";
import cine from "../img/cine.jpg";
import Cargando from "./Cargando";

const DetallePelicula = () => {
  const params = useParams();
  // la pelicula es un objeto, no un array: deberia el estado iniciar como un objeto vacio
  const [pelicula, setPelicula] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    fetch(`${UrlBase}${params.idPelicula}?${apiKey}${Lenguaje}`)
      .then((res) => res.json())
      .then((data) => {
        setPelicula(data);
        setCargando(false);
      });
  }, [params.idPelicula]);

  return (
    <>
      <Cargando cargando={cargando} />
      {!cargando && (
        <section
          style={{
            backgroundImage:
              `url(${UrlImagen}${pelicula.backdrop_path})` ===
              `url(https://image.tmdb.org/t/p/original/null)`
                ? `url(${cine})`
                : `url(${UrlImagen}${pelicula.poster_path})`,
          }}
          className="fondo-detalle"
        >
          <article className="box-detalles">
            <div className="container-poster-detalle">
              <img
                src={
                  `${UrlImagen}${pelicula.poster_path}` ===
                  `https://image.tmdb.org/t/p/original/null`
                    ? `${img}`
                    : `${UrlImagen}${pelicula.poster_path}`
                }
                alt={pelicula.title}
              />
            </div>
            <article className="informacion-detalle">
              <h2> {pelicula.title}</h2>
              <span>
                Lanzamiento:
                {pelicula.release_date === ""
                  ? "Sin resultados"
                  : pelicula.release_date}
              </span>
              <h3>Sinopsis:</h3>
              <p>
                {pelicula.overview === ""
                  ? "Sin resultados"
                  : pelicula.overview}
              </p>
              {/* esto rompe, te dejo mas detalles en las observaciones */}
              <p>Géneros : {pelicula.genres && pelicula.genres[0].name}</p>
            </article>
          </article>
        </section>
      )}
    </>
  );
};
export default DetallePelicula;
