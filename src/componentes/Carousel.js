import "../style/_carousel.scss";
import Item from "./Item";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const peliculas = useFetch("now_playing");

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
        fade={true}
      >
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <Item
              title={pelicula.title}
              image={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
              styleContainer="carousel-item"
              styleTitle="titulo"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
