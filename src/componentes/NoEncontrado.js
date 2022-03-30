import "../style/_error404.scss";
import imagen from "../img/no-encontrado.svg";

const NoEncontrado = () => {
  return (
    <div className="imagen-no-encontrada">
      <img src={imagen} alt="Imagen no encontrada" />
    </div>
  );
};
export default NoEncontrado;
