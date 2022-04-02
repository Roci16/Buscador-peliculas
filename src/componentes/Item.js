import img from "../img/default.png";
import { UrlImagen } from "../auxiliares/VariablesGlobales";
import "../style/_item.scss";

const Item = ({ title, image, styleContainer, styleTitle }) => {
  return (
    <article className={styleContainer}>
      <div className="conteiner-img">
        <img src={image === `${UrlImagen}null` ? img : image} alt={title} />
      </div>
      <h3 className={styleTitle}>{title}</h3>
    </article>
  );
};

export default Item;
