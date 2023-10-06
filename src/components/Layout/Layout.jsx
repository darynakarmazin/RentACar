import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div> Layout </div>
      <Outlet />
    </div>
  );
}

export default Layout;
