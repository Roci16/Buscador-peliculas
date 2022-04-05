import {
  BsChevronBarLeft,
  BsChevronDoubleLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleRight,
  BsChevronBarRight,
} from "react-icons/bs";

const Paginado = () => {
  return (
    <section>
      <button>
        <BsChevronBarLeft />
      </button>
      <button>
        <BsChevronDoubleLeft />
      </button>
      <button>
        <BsChevronLeft />
      </button>
      <button>
        <BsChevronRight />
      </button>
      <button>
        <BsChevronDoubleRight />
      </button>
      <button>
        <BsChevronBarRight />
      </button>
    </section>
  );
};
export default Paginado;
