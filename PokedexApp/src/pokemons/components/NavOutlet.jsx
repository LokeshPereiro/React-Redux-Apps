import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo_poke.png";
import { PokeContext } from "../../context";
export const NavOutlet = () => {
  const poke = useContext(PokeContext);
  // console.log(poke);
  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Pokedex" />
        </Link>

        <form>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
              //   value={valueSearch}
              //   onChange={onInputChange}
              placeholder="Buscar nombre de pokemon"
            />
          </div>

          <button className="btn-search">Buscar</button>
        </form>
      </header>
      <Outlet />
    </>
  );
};