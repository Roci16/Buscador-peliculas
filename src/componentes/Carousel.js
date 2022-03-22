import "../style/_carousel.scss";

import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Item from "./Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const peliculas = useFetch("now_playing");

  return (
    // <p>l</p>
    <div className="carousel">
      <Slider
        dots={true}
        arrows={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        speed={2500}
        autoplaySpeed={3000}
        fade={true}
        // dots={true}
        // arrows={true}
        // slidesToShow={1}
        // autoplay={false}
        // autoplaySpeed={1000}
      >
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <div className="carousel-item">
              <img
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
