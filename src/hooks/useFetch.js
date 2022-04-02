import { useState, useEffect } from "react";
import { UrlBase, apiKey, Lenguaje } from "../auxiliares/VariablesGlobales";

const useFetch = (categorias) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(`${UrlBase}${categorias}?${apiKey}${Lenguaje}&page=1`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [categorias]);

  return peliculas;
};

export default useFetch;
