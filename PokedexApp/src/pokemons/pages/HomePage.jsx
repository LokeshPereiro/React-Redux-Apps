import { useContext } from "react";
import { PokeContext } from "../context";
import { FilterSideBar, PokeList } from "../components";

export const HomePage = () => {
  const { loading, onLoadMorePokemons, active, setActive } =
    useContext(PokeContext);

  const showLoadBTN = (
    <button className="btn-load-more" onClick={onLoadMorePokemons}>
      Cargar más
    </button>
  );

  return (
    <>
      <div className="container-filter container mt-2">
        <div className="icon-filter" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span>Filtrar</span>
        </div>
      </div>
      <FilterSideBar />
      <PokeList />
      <div className="container-btn-load-more container">
        {loading ? "" : showLoadBTN}
      </div>
    </>
  );
};
