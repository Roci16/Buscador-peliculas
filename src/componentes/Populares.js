import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Item from "./Item";

const Populares = () => {
  const peliculas = useFetch("popular");

  return (
    <div>
      <h2>Populares</h2>
      {peliculas.map((pelicula) => (
        <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
          <Item
            title={pelicula.title}
            image={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
          />
        </Link>
      ))}
    </div>
  );
};
export default Populares;
