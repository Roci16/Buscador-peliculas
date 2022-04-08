import "../style/_carousel.scss";
import Item from "./Item";
import { UrlImagen } from "../auxiliares/VariablesGlobales";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ peliculas }) => {
  return (
    <div className="carousel">
      <Slider
        dots={false}
        arrows={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        speed={1000}
        autoplaySpeed={3000}
      >
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <Item
              image={`${UrlImagen}${pelicula.poster_path}`}
              styleContainer="carousel-item"
            />
            <div className="info-carousel">
              <h3>{pelicula.title}</h3>
              <p>{pelicula.overview}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
