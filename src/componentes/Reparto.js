import img from "../img/default.png";
import { UrlImagen } from "../auxiliares/VariablesGlobales";
import "../style/_reparto.scss";

const Reparto = ({ image, nombreOriginal, nombrePersonaje }) => {
  return (
    <article className="box-reparto">
      <div className="imagen-reparto">
        <img
          src={image === `${UrlImagen}null` ? img : image}
          alt={nombreOriginal}
        />
      </div>
      <h3>Nombre original: {nombreOriginal}</h3>
      <h3>Personaje: {nombrePersonaje}</h3>
    </article>
  );
};
export default Reparto;
