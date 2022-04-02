import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Item from "./Item";
import "../style/_secciones.scss";

const Top = () => {
  const peliculas = useFetch("top_rated");

  return (
    <section className="seccion-container">
      <h2>Mejores Puntuadas</h2>
      <section className="coleccion-tarjetas">
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <Item
              title={pelicula.title}
              image={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
              styleContainer="item-vista-general"
              styleTitle="titulo-pelicula"
            />
          </Link>
        ))}
      </section>
    </section>
  );
};
export default Top;
