import { useEffect, useState } from "react";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import { AdvertsList } from "../../components/Catalog/Catalog.styled";
import fetchAdverts from "../../Api/fetchAdverts";
import { useSelector } from "react-redux";

function Favorites() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdverts();
  }, []);

  const getAdverts = () => {
    fetchAdverts()
      .then((results) => {
        setAdverts(results);
      })
      .catch((err) => console.error("error:" + err));
  };

  const favorites = useSelector((state) => state.favorite.items);

  return (
    <div className="container">
      {adverts && (
        <>
          <AdvertsList>
            {favorites.map((advert) => {
              return <AdvertItem key={advert.id} advert={advert} />;
            })}
          </AdvertsList>
        </>
      )}
    </div>
  );
}

export default Favorites;
