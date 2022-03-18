import { useState, useEffect } from "react";

const useFetch = (categorias) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${categorias}?api_key=9b8ef974b251064418c46a5cc4a9bc01&language=es-ES&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [categorias]);

  return peliculas;
};

export default useFetch;
