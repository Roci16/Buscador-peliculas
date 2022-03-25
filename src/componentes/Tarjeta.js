import useFetch from "../hooks/useFetch";
// const peliculas = useFetch("upcoming");

import { Link } from "react-router-dom";
import Item from "./Item";

import "../style/_tarjeta.scss";

const Tarjeta = ({ url, titulo }) => {
  console.log(url);

  const peliculas = useFetch(url);
  console.log(peliculas);
  console.log(useFetch(url));
  return (
    <section className="">
      <h2>{titulo}</h2>
      <article className="tarjetas-home">
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            {/* <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                alt={pelicula.title}
              />
            </div>
            <h3>{pelicula.title}</h3> */}
            {/* <Item
              title={pelicula.title}
              image={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
            /> */}
          </Link>
        ))}
      </article>
    </section>
  );
};
export default Tarjeta;
