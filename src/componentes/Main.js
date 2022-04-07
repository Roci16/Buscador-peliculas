import Carousel from "./Carousel";
import "../style/_main.scss";
import Tarjeta from "./Tarjeta";
import Cargando from "./Cargando";
import useFetch from "../hooks/useFetch";

const Main = () => {
  const { peliculas, cargando } = useFetch("now_playing");
  return (
    <main>
      <Cargando cargando={cargando} />
      {!cargando && (
        <>
          <Carousel peliculas={peliculas} />
          <section className="box-tarjetas ">
            <Tarjeta url="popular" titulo="Peliculas Populares" />
            <Tarjeta url="top_rated" titulo="Peliculas Mejor Puntadas" />
          </section>
        </>
      )}
    </main>
  );
};
export default Main;
