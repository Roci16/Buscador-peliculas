import { useState } from "react";

const usePaginado = () => {
  const [page, setPage] = useState(1);

  const handleClickAnterior = () => {
    setPage(page - 1);
  };

  const handleClickSiguiente = () => {
    setPage(page + 1);
  };

  const handleClickAnteriorDoble = () => {
    setPage(page - 2);
  };

  const handleClickSiguienteDoble = () => {
    setPage(page + 2);
  };

  const handleClickUltima = (totalPaginas) => {
    setPage(totalPaginas);
  };

  const handleClickPrimera = () => {
    setPage(1);
  };

  return {
    page: page,
    handleClickAnterior: handleClickAnterior,
    handleClickSiguiente: handleClickSiguiente,
    handleClickSiguienteDoble: handleClickSiguienteDoble,
    handleClickAnteriorDoble: handleClickAnteriorDoble,
    handleClickPrimera: handleClickPrimera,
    handleClickUltima: handleClickUltima,
  };
};
export default usePaginado;
