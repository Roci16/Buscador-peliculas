import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";
import NoEncontrado from "./NoEncontrado";
import "../style/_buscador.scss";

const Buscador = () => {
  const [resultado, setResultado] = useState(true);
  const [sinResultado, setSinResultado] = useState(false);
  const [valorInput, setValorInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "algo",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9b8ef974b251064418c46a5cc4a9bc01&language=es-ES&query=${searchParams.get(
        "query"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.results.length) {
          console.log(!data.results, "sin resultado :c");
          setResultado(false);
          setSinResultado(true);
        } else {
          console.log(!data.results, "tengo resultado");
          setResultado(true);
          setSinResultado(false);
          setPeliculas(data.results);
        }
      });
  }, [searchParams]);

  const handleChange = (e) => setValorInput(e.target.value);

  const handleSubmit = (e) => {
    setSearchParams({
      query: valorInput,
    });
    e.preventDefault();
  };

  return (
    <section className="seccion-busqueda">
      <div>
        <h2 className="titulo-buscador">
          Estas buscando: {searchParams.get("query")}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Buscador"
            value={valorInput}
          />
          <input type="submit" value="Buscar" />
        </form>
      </div>
      {resultado && (
        <article className="resultado-busqueda">
          {peliculas.map((pelicula) => (
            <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
              <Item
                title={pelicula.title}
                image={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                styleContainer="item-vista-general"
                styleTitle="titulo-pelicula"
              />
            </Link>
          ))}{" "}
        </article>
      )}
      {sinResultado && <NoEncontrado />}
    </section>
  );
};
export default Buscador;
