import Catalog from "../../components/Catalog/Catalog";
import CarFilter from "../../components/CarFilter/CarFilter";
import { useSelector } from "react-redux";

function CatalogPage() {
  const adverts = useSelector((state) => state.catalog.adverts);

  return (
    <div className="container">
      <CarFilter adverts={adverts} />
      <Catalog />
    </div>
  );
}

export default CatalogPage;
