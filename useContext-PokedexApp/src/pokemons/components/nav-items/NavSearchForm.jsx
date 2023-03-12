import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokeContext } from "../../context";

export const NavSearchForm = () => {
  const { valueSearch, onInputChange } = useContext(PokeContext);
  const navigate = useNavigate();

  const handleSearchValue = (evt) => {
    evt.preventDefault();
    navigate("/search", {
      //setting written values in the url so that we can access it with useLocation() hook
      state: valueSearch,
    });
  };
  return (
    <>
      <form onSubmit={handleSearchValue}>
        <div className="d-flex align-items-center">
          <input
            type="search"
            className="form-control"
            name="valueSearch"
            value={valueSearch}
            onChange={onInputChange}
            placeholder="Search pokemons..."
          />
        </div>
        <button type="submit" className="btn-search">
          <i className="fas fa-search m-1" />
        </button>
      </form>
    </>
  );
};
