import React from "react";
import {
  AdvertsList,
  NoMatching,
} from "../../components/Catalog/Catalog.styled";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import { AdvertsContainer, FavouritesContainer } from "./Favorites.styled";
import { useSelector, useDispatch } from "react-redux";
import { setFiltersFavorite } from "../../redux/filters/filtersSlice";
import FavoriteSideBar from "../../components/FavoriteSideBar/FavoriteSideBar";
import { filtersFavorite, selectFavorites } from "../../redux/selectors";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const filters = useSelector(filtersFavorite);

  const handleFilterChange = (filters) => {
    dispatch(setFiltersFavorite(filters));
  };

  const filteredFavorites = favorites.filter((advert) => {
    if (filters.selectedMake && advert.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(advert.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && advert.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && advert.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    <FavouritesContainer className="container">
      <AdvertsContainer>
        {filteredFavorites.length > 0 ? (
          <AdvertsList>
            {filteredFavorites.map((advert) => (
              <AdvertItem key={advert.id} advert={advert} />
            ))}
          </AdvertsList>
        ) : (
          <NoMatching>Sorry, no matching favorites found</NoMatching>
        )}
      </AdvertsContainer>
      <FavoriteSideBar onFilterChange={handleFilterChange} />
    </FavouritesContainer>
  );
}

export default Favorites;
