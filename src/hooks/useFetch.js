import { useState, useEffect } from "react";
import { UrlBase, apiKey, Lenguaje } from "../auxiliares/VariablesGlobales";

const useFetch = (categorias, page) => {
  const [peliculas, setPeliculas] = useState([]);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    fetch(`${UrlBase}${categorias}?${apiKey}${Lenguaje}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
        setTotalPaginas(data.total_pages);
        setCargando(false);
      });
  }, [categorias, page]);

  return {
    peliculas: peliculas,
    totalPaginas: totalPaginas,
    cargando: cargando,
  };
};

export default useFetch;
