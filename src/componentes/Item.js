const Item = ({ title, image }) => {
  return (
    <article>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </article>
  );
};

export default Item;
