import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Item from "./Item";
import { UrlImagen } from "../auxiliares/VariablesGlobales";
import "../style/_secciones.scss";
import Paginado from "./Paginado";
import usePaginado from "../hooks/usePaginado";

const Estrenos = () => {
  const {
    page,
    handleClickPrimera,
    handleClickAnteriorDoble,
    handleClickUltima,
    handleClickSiguienteDoble,
    handleClickAnterior,
    handleClickSiguiente,
  } = usePaginado();
  const { peliculas, totalPaginas } = useFetch("upcoming", page);

  return (
    <section className="seccion-container">
      <h2>Estrenos</h2>
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
    </section>
  );
};
export default Estrenos;
