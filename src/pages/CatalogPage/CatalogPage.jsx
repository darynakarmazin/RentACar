import Catalog from "../../components/Catalog/Catalog";
import CarFilter from "../../components/CarFilter/CarFilter";

function CatalogPage() {
  return (
    <div className="container">
      <CarFilter />
      <Catalog />
    </div>
  );
}

export default CatalogPage;
