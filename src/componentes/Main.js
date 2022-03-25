import Carousel from "./Carousel";
import "../style/_main.scss";
import Tarjeta from "./Tarjeta";

const Main = () => {
  return (
    <main>
      <Carousel />
      <section className="box-tarjetas ">
        <Tarjeta url="popular" titulo="Peliculas Populares" />
        <Tarjeta url="top_rated" titulo="Peliculas Mejor Puntadas" />
      </section>
    </main>
  );
};
export default Main;
