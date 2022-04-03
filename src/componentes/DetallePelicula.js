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
import Reparto from "./Reparto";

const DetallePelicula = () => {
  const params = useParams();
  const [pelicula, setPelicula] = useState([]);
  const [reparto, setReparto] = useState([]);

  useEffect(() => {
    fetch(`${UrlBase}${params.idPelicula}?${apiKey}${Lenguaje}`)
      .then((res) => res.json())
      .then((data) => {
        setPelicula(data);
        console.log(data);
      });
  }, [params.idPelicula]);

  useEffect(() => {
    fetch(`${UrlBase}${params.idPelicula}/credits?${apiKey}${Lenguaje}`)
      .then((res) => res.json())
      .then((data) => {
        setReparto(data.cast);
        console.log(data.cast);
      });
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
          <span>Lanzamiento: {pelicula.release_date}</span>
          <h3>Sinopsis</h3>
          <p>{pelicula.overview}</p>
          <h4>Reparto</h4>
          <div className="reparto-box">
            {reparto.map((reparto) => (
              <Reparto
                key={reparto.id}
                nombreOriginal={reparto.original_name}
                nombrePersonaje={reparto.character}
                image={`${UrlImagen}${reparto.profile_path}`}
              />
            ))}{" "}
          </div>
        </article>
      </article>
    </section>
  );
};
export default DetallePelicula;
