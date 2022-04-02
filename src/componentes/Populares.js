import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { UrlImagen } from "../auxiliares/VariablesGlobales";
import Item from "./Item";
import "../style/_secciones.scss";

const Populares = () => {
  const peliculas = useFetch("popular");

  return (
    <section className="seccion-container">
      <h2>Populares</h2>
      <section className="coleccion-tarjetas">
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <Item
              title={pelicula.title}
              image={`${UrlImagen}${pelicula.poster_path}`}
              styleContainer="item-vista-general"
              styleTitle="titulo-pelicula"
            />
          </Link>
        ))}
      </section>
    </section>
  );
};
export default Populares;
