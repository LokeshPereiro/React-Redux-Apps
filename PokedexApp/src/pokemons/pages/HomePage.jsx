import { useContext } from "react";
import { PokeContext } from "../context";
import { FilterSideBar, PokeList } from "../components";

export const HomePage = () => {
  const { loading, onLoadMorePokemons, active, setActive } =
    useContext(PokeContext);

  const showLoadBTN = (
    <button className="btn-load-more" onClick={onLoadMorePokemons}>
      Load more
    </button>
  );

  return (
    <>
      <div className="container-filter container mt-2">
        <div className="icon-filter" onClick={() => setActive(!active)}>
          <i className="fa-solid fa-filter"></i>
          <span>Filter</span>
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
