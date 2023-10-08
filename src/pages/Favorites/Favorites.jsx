import { useEffect, useState } from "react";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import { AdvertsList } from "../../components/Catalog/Catalog.styled";
import { AdvertsContainer, FavouritesContainer } from "./Favorites.styled";
import fetchAdverts from "../../Api/fetchAdverts";
import { useSelector } from "react-redux";
import CarFilter from "../../components/CarFilter/CarFilter";

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
    <FavouritesContainer className="container">
      <AdvertsContainer>
        {adverts && (
          <AdvertsList>
            {favorites.map((advert) => {
              return <AdvertItem key={advert.id} advert={advert} />;
            })}
          </AdvertsList>
        )}
      </AdvertsContainer>
      <CarFilter adverts={favorites} />
    </FavouritesContainer>
  );
}

export default Favorites;
