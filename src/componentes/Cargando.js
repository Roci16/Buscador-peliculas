import "../style/_cargando.scss";

const Cargando = ({ cargando }) => {
  return (
    cargando && (
      <article className="box-cargando">
        <div className="cargando" />
        <span>Cargando</span>
      </article>
    )
  );
};
export default Cargando;
