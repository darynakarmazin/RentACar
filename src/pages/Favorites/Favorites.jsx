import { useEffect, useState } from "react";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import Filter from "../../components/Filter/Filter";
import { AdvertsList } from "../../components/Catalog/Catalog.styled";
import { AdvertsContainer, FavouritesContainer } from "./Favorites.styled";
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
      <Filter />
    </FavouritesContainer>
  );
}

export default Favorites;
