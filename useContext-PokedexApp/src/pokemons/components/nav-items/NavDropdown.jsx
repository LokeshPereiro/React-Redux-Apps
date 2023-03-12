import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../auth/context";
import { pokeball, defaultUser, profile, logout } from "../../../assets/images";

export const NavDropdown = () => {
  const { loggedUser, logOut } = useContext(AuthContext);
  // console.log(loggedUser);

  const handleLogout = () => {
    logOut();
  };
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-transparent dropdown-toggle profile-btn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={`${loggedUser?.photoURL ? loggedUser.photoURL : defaultUser}`}
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
    </>
  );
};
