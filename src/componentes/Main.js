import Carousel from "./Carousel";
import "../style/_main.scss";
import Tarjeta from "./Tarjeta";
// import useFetch from "../hooks/useFetch";

const Main = () => {
  // const { peliculas: populares } = useFetch("popular");
  // const { peliculas: top } = useFetch("top_rated");

  return (
    <main>
      {/* <h1>Buscador de Películas</h1> */}
      <Carousel />
      <section className="box-tarjetas ">
        <Tarjeta url="popular" titulo="Peliculas Populares" />
        <Tarjeta url="top_rated" titulo="Peliculas Mejor Puntadas" />
      </section>
    </main>
  );
};
export default Main;
