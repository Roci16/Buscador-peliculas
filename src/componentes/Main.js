import Carousel from "./Carousel";
import "../style/_main.scss";
import Tarjeta from "./Tarjeta";

const Main = () => {
  return (
    <main>
      {/* <h1>Buscador de Películas</h1> */}
      <Carousel />
      <article className="box-tarjetas">
        <Tarjeta />
        <Tarjeta />
      </article>
    </main>
  );
};
export default Main;
