import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Item from "./Item";

const Estrenos = () => {
  const peliculas = useFetch("upcoming");

  return (
    <div>
      <h2>Estrenos</h2>
      {peliculas.map((pelicula) => (
        <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
          <Item
            title={pelicula.title}
            image={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
          />
        </Link>
      ))}
    </div>
  );
};
export default Estrenos;
