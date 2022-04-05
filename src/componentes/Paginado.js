import {
  BsChevronBarLeft,
  BsChevronDoubleLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleRight,
  BsChevronBarRight,
} from "react-icons/bs";

const Paginado = ({
  page,
  totalPaginas,
  handleClickPrimera,
  handleClickAnteriorDoble,
  handleClickUltima,
  handleClickSiguienteDoble,
  handleClickAnterior,
  handleClickSiguiente,
}) => {
  return (
    <section>
      <button onClick={handleClickPrimera} disabled={page === 1}>
        <BsChevronBarLeft />
      </button>
      <button
        onClick={handleClickAnteriorDoble}
        disabled={page === 2 || page === 1}
      >
        <BsChevronDoubleLeft />
      </button>
      <button onClick={handleClickAnterior} disabled={page === 1}>
        <BsChevronLeft />
      </button>
      <span>{page}</span>
      <button
        onClick={handleClickSiguiente}
        disabled={totalPaginas > 500 ? page === 500 : page === totalPaginas}
      >
        <BsChevronRight />
      </button>
      <button
        onClick={handleClickSiguienteDoble}
        disabled={
          totalPaginas > 500
            ? page === 500 || page >= 498
            : page === totalPaginas
        }
      >
        <BsChevronDoubleRight />
      </button>
      <button
        onClick={() =>
          handleClickUltima(totalPaginas > 500 ? 500 : totalPaginas)
        }
        disabled={totalPaginas > 500 ? page === 500 : page === totalPaginas}
      >
        <BsChevronBarRight />
      </button>
    </section>
  );
};
export default Paginado;
