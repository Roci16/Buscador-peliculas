import useFetch from "../hooks/useFetch";

import { Link } from "react-router-dom";
import Item from "./Item";

import "../style/_tarjeta.scss";

const Tarjeta = ({ url, titulo }) => {
  const peliculas = useFetch(url);
  return (
    <section className="seccion-home">
      <h2>{titulo}</h2>
      <article className="tarjetas-home">
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <Item
              title={pelicula.title}
              image={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
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
