import "../style/_item.scss";

const Item = ({ title, image }) => {
  return (
    <article className="item-vista-general">
      <div className="conteiner-img">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
    </article>
  );
};

export default Item;
