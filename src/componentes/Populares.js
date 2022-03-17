import useFetch from "../hooks/useFetch";

const Populares = () => {
  const peliculas = useFetch("popular");

  return (
    <div>
      <h2>Populares</h2>

      {peliculas.map((pelicula) => (
        <div key={pelicula.id}>
          <h3>{pelicula.title} </h3>
          <img
            src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
            alt={pelicula.title}
          />
        </div>
      ))}
    </div>
  );
};
export default Populares;
