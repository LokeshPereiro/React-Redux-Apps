import { Outlet } from "react-router-dom";

import { NavLogo, NavSearchForm, NavDropdown, NavUpload } from "./nav-items";

export const NavOutlet = () => {
  return (
    <>
      <header className="navHeader">
        {/* Nav Logo */}
        <NavLogo />

        {/*Search Form */}
        <NavSearchForm />

        {/* upload action BTN */}
        <div>
          <NavUpload />

          {/* Dropdown */}
          <NavDropdown />
        </div>
      </header>
      <Outlet />
    </>
  );
};
