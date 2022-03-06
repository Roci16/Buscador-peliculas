import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";

const Buscador = () => {
  const [valorInput, setValorInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: ".",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9b8ef974b251064418c46a5cc4a9bc01&language=es-ES&query=${searchParams.get(
        "query"
      )}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
      });
  }, [searchParams]);

  const handleChange = (e) => setValorInput(e.target.value);

  const handleSubmit = (e) => {
    setSearchParams({
      query: valorInput,
    });
    console.log(valorInput);
    e.preventDefault();
  };

  return (
    <section>
      <h2>Buscador</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Buscador"
          value={valorInput}
        />
        <input type="submit" value="Buscar" />
      </form>
      {peliculas.map((pelicula) => (
        <Item
          key={pelicula.id}
          title={pelicula.title}
          image={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
        />
      ))}
    </section>
  );
};
export default Buscador;
