import { useState } from "react";

const usePaginado = () => {
  const [pagina, setPagina] = useState(1);

  const handleClickAnterior = () => {
    setPagina(page - 1);
  };

  const handleClickSiguiente = () => {
    setPagina(page + 1);
  };

  const handleClickAnteriorDoble = () => {
    setPagina(page - 2);
  };

  const handleClickSiguienteDoble = () => {
    setPagina(page + 2);
  };

  const handleClickUltima = (totalPages) => {
    setPagina(totalPages);
  };

  const handleClickPrimera = () => {
    setPagina(1);
  };

  return {
    pagina: pagina,
    handleClickAnterior: handleClickAnterior,
    handleClickSiguiente: handleClickSiguiente,
    handleClickSiguienteDoble: handleClickSiguienteDoble,
    handleClickAnteriorDoble: handleClickAnteriorDoble,
    handleClickPrimera: handleClickPrimera,
    handleClickUltima: handleClickUltima,
  };
};
export default usePaginado;
