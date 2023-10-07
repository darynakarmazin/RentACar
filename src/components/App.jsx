import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import Favorites from "../pages/Favorites/Favorites";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
