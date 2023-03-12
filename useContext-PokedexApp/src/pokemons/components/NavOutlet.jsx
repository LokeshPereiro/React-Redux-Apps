import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import { PokeContext } from "../context";

import {
  logo,
  pokeball,
  defaultUser,
  profile,
  logout,
} from "../../assets/images";

export const NavOutlet = () => {
  const { valueSearch, onInputChange } = useContext(PokeContext);
  const { loggedUser, logOut } = useContext(AuthContext);
  // console.log(loggedUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
  };
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
        <div className="nav-logo">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo Pokedex" />
          </Link>
        </div>

        {/* Form */}
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
            Search
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
              src={`${
                loggedUser?.photoURL ? loggedUser.photoURL : defaultUser
              }`}
              className="avatar"
              style={{ width: "30px" }}
            />
            <span>{loggedUser?.displayName}</span>
          </button>

          <ul className="dropdown-menu p-2 m-0">
            <li>
              <Link to="/profile" className="dropdown-item">
                <img
                  style={{
                    width: "20px",
                  }}
                  src={profile}
                  alt="Profile icon"
                />
                <span className="m-2">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/my-poke" className="dropdown-item">
                <img
                  style={{
                    width: "20px",
                  }}
                  src={pokeball}
                  alt="Pokeball logo"
                />
                <span className="m-2">MyPokemons</span>
              </Link>
            </li>

            <hr className="dropdown-divider m-0" />

            <li onClick={handleLogout}>
              <Link className="dropdown-item">
                <img
                  style={{
                    width: "20px",
                  }}
                  src={logout}
                  alt="logout icon"
                />
                <span className="m-2">LogOut</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};
