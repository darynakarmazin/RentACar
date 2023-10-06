import { NavLink, Outlet } from "react-router-dom";
import LogoImg from "./../../img/car-icon.svg";

function Layout() {
  return (
    <div>
      <div>
        <NavLink to="/">
          <img src={LogoImg} alt="Car logo" width={40} /> RentACar
        </NavLink>
        <div>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
