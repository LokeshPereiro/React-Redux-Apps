import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_poke.png";
import { PokeContext } from "../context";

export const NavOutlet = () => {
  const { valueSearch, onInputChange } = useContext(PokeContext);
  const navigate = useNavigate();

  const handleSearchValue = (evt) => {
    evt.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });
  };
  return (
    <>
      <header className="navHeader">
        {/* Logo */}
        <div>
          <Link to="/" className="logo">
            <img src={logo} alt="Logo Pokedex" />
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSearchValue}>
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
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Busca tu pokemon favorito..."
            />
          </div>
          <button type="submit" className="btn-search">
            Buscar
          </button>
        </form>

        {/* Dropdown */}

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-transparent dropdown-toggle profile-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg"
              className="avatar"
            />
            <span>Lokesh Pereiro</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-user"></i>
                <span className="m-2">Profile</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-sliders"></i>
                <span className="m-2">Settings</span>
              </a>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-right-from-bracket"></i>
                <span className="m-2">LogOut</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};
