import Filter from "../../components/Filter/Filter";
import Catalog from "../../components/Catalog/Catalog"


function CatalogPage() {
  return (
    <div className="container">
      <Filter />
      <Catalog/>
    </div>
  );
}

export default CatalogPage;
