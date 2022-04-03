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

const DetallePelicula = () => {
  const params = useParams();
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    fetch(`${UrlBase}${params.idPelicula}?${apiKey}${Lenguaje}`)
      .then((res) => res.json())
      .then((data) => setPelicula(data));
  }, [params.idPelicula]);

  return (
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
      <article>
        <h2> {pelicula.title}</h2>
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
      </article>
    </section>
  );
};
export default DetallePelicula;
