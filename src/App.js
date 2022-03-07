import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Main from "./componentes/Main";
import Estrenos from "./componentes/Estrenos";
import Populares from "./componentes/Populares";
import Buscador from "./componentes/Buscador";
import DetallePelicula from "./componentes/DetallePelicula";

const App = () => {
  return (
    <div className="conteiner">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/estrenos" element={<Estrenos />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/buscar" element={<Buscador />} />
          <Route path="/movie/:idPelicula" element={<DetallePelicula />} />
          {/* Ruteo de app-movie-jhonhks.herokuapp.com */}
          {/* <Route path="/" element={<Home/>}>Aca va el home</Route>
                <Route path="/nuevas-peliculas" element={<NuevasPeliculas/>}>despues del home si se hace
                click en nuevas peliculas</Route>
                <Route path="/populares" element={<Populares/>}>despues del home sigue eso si se hace click en populares</Route>
                <Route path="/buscar/search?s=:variableDelImput" element={<Buscar/>}>despues del home sigue 
                eso si se aprieta busqueda aparese solo search y si se hace una busqueda</Route>
                <Route path="/movie/:variableNumericaID"> ver pelicula en id</Route>
                <Route path="/*"> error 404</Route> */}
          {/* ESTA PAG NO TIENE PAGINADO EN BUSQUEDA Y EL PAGINADO DE POPULARES Y NUEVAS PELIS NO ESTA RUTEADO */}
        </Routes>

        {/* populares y estrenos pueden ser una variable que tiene que rellenarse dependiendo que elijan*/}
        {/* en el map va el Link para hacerle click */}
        {/* links en los li del nav */}
      </BrowserRouter>
    </div>
  );
};

export default App;
