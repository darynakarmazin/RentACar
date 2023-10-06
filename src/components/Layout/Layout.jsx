import { NavLink, Outlet } from "react-router-dom";
import { Header, LogoNavLink, NavigationLinks } from "./Layout.styled";
import LogoImg from "./../../img/car-icon.svg";

function Layout() {
  return (
    <div>
      <Header className="container">
        <LogoNavLink to="/">
          <img src={LogoImg} alt="Car logo" width={40} /> RentACar
        </LogoNavLink>
        <NavigationLinks>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </NavigationLinks>
      </Header>
      <Outlet />
    </div>
  );
}

export default Layout;
