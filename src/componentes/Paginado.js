import {
  BsChevronBarLeft,
  BsChevronDoubleLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleRight,
  BsChevronBarRight,
} from "react-icons/bs";
import "../style/_paginado.scss";

const Paginado = ({
  // excelente este componente!!
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
      <button
        onClick={handleClickPrimera}
        disabled={page === 1}
        aria-label="Primera página"
      >
        <BsChevronBarLeft />
      </button>
      <button
        onClick={handleClickAnteriorDoble}
        disabled={page === 2 || page === 1}
        aria-label="Retroceder dos página"
      >
        <BsChevronDoubleLeft />
      </button>
      <button
        onClick={handleClickAnterior}
        disabled={page === 1}
        aria-label="Página anterior"
      >
        <BsChevronLeft />
      </button>
      <span className="span-paginado">{page}</span>
      <button
        onClick={handleClickSiguiente}
        disabled={totalPaginas > 500 ? page === 500 : page === totalPaginas}
        aria-label="Página siguiente"
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
        aria-label="Avanzar dos página"
      >
        <BsChevronDoubleRight />
      </button>
      <button
        onClick={() =>
          handleClickUltima(totalPaginas > 500 ? 500 : totalPaginas)
        }
        disabled={totalPaginas > 500 ? page === 500 : page === totalPaginas}
        aria-label="Última página"
      >
        <BsChevronBarRight />
      </button>
    </section>
  );
};
export default Paginado;
