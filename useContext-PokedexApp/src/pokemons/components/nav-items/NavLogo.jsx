import { Link } from "react-router-dom";
import { logo } from "../../../assets/images";
export const NavLogo = () => {
  return (
    <>
      <div className="nav-logo">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Pokedex" />
        </Link>
      </div>
    </>
  );
};
