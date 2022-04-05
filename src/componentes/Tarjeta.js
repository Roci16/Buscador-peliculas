import useFetch from "../hooks/useFetch";
import { UrlImagen } from "../auxiliares/VariablesGlobales";
import { Link } from "react-router-dom";
import Item from "./Item";

import "../style/_tarjeta.scss";

const Tarjeta = ({ url, titulo }) => {
  const { peliculas } = useFetch(url);
  return (
    <section className="seccion-home">
      <Link to={titulo === "Peliculas Populares" ? "/populares" : "/top_rated"}>
        <h2>{titulo}</h2>
      </Link>
      <article className="tarjetas-home">
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <Item
              title={pelicula.title}
              image={`${UrlImagen}${pelicula.poster_path}`}
              styleContainer="conteiner-tarjeta"
              styleTitle="titulo-tarjeta"
            />
          </Link>
        ))}
      </article>
    </section>
  );
};
export default Tarjeta;
