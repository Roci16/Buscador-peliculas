import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  UrlBase,
  apiKey,
  Lenguaje,
  UrlImagen,
} from "../auxiliares/VariablesGlobales";
import "../style/_detalles.scss";

const DetallePelicula = () => {
  const params = useParams();
  const [pelicula, setPelicula] = useState([]);
  // console.log(params);
  // console.log(params.idPelicula);
  useEffect(() => {
    fetch(`${UrlBase}${params.idPelicula}?${apiKey}${Lenguaje}`)
      .then((res) => res.json())
      .then((data) => setPelicula(data));
  }, [params.idPelicula]);
  // ${UrlImagen}${pelicula.poster_path}
  // url(https://placekitten.com/500/)
  // console.log(setPelicula(data));
  return (
    // backdrop_path
    <section
      // style={{
      //   backgroundImage: `url(https://placekitten.com/500)`,
      // }}
      style={{
        backgroundImage: `url(${UrlImagen}${pelicula.backdrop_path})`,
      }}
      className="fondo-detalle"
    >
      <article>
        <h2> {pelicula.title}</h2>
        <div className="container-poster-detalle">
          <img
            src={`${UrlImagen}${pelicula.poster_path}`}
            alt={pelicula.title}
          />
        </div>
      </article>
    </section>
  );
};
export default DetallePelicula;
