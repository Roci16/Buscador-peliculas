import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UrlBusqueda, UrlImagen } from "../auxiliares/VariablesGlobales";
import Item from "./Item";
import NoEncontrado from "./NoEncontrado";
import "../style/_buscador.scss";
import Paginado from "./Paginado";
import usePaginado from "../hooks/usePaginado";
import Cargando from "./Cargando";

const Buscador = () => {
  const {
    page,
    handleClickPrimera,
    handleClickAnteriorDoble,
    handleClickUltima,
    handleClickSiguienteDoble,
    handleClickAnterior,
    handleClickSiguiente,
  } = usePaginado();
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [resultado, setResultado] = useState(true);
  const [sinResultado, setSinResultado] = useState(false);
  const [valorInput, setValorInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    fetch(`${UrlBusqueda}${searchParams.get("query")}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCargando(false);
        if (!data.results.length) {
          setResultado(false);
          setSinResultado(true);
        } else {
          setResultado(true);
          setSinResultado(false);
          setPeliculas(data.results);
          setTotalPaginas(data.total_pages);
        }
      });
  }, [searchParams, page]);

  const handleChange = (e) => setValorInput(e.target.value);

  const handleSubmit = (e) => {
    setSearchParams({
      query: valorInput,
    });
    e.preventDefault();
  };

  return (
    <>
      <Cargando cargando={cargando} />
      {!cargando && (
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
                    image={`${UrlImagen}${pelicula.poster_path}`}
                    styleContainer="item-vista-general"
                    styleTitle="titulo-pelicula"
                  />
                </Link>
              ))}
              <div className="paginas-busqueda">
                <Paginado
                  handleClickAnterior={handleClickAnterior}
                  handleClickSiguiente={handleClickSiguiente}
                  handleClickSiguienteDoble={handleClickSiguienteDoble}
                  handleClickAnteriorDoble={handleClickAnteriorDoble}
                  handleClickPrimera={handleClickPrimera}
                  handleClickUltima={handleClickUltima}
                  page={page}
                  totalPaginas={totalPaginas}
                />
              </div>
            </article>
          )}
          {sinResultado && <NoEncontrado />}
        </section>
      )}
    </>
  );
};
export default Buscador;
