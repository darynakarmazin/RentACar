import { useEffect } from "react";
import { AdvertsList, NoMatching } from "./Catalog.styled";
import AdvertItem from "../AdvertItem/AdvertItem";
import ButtonLoad from "../ButtonLoad/ButtonLoad";
import { useDispatch, useSelector } from "react-redux";
import { onNextPage } from "../../redux/catalog/catalogSlice";
import { setAdverts, setAllAdverts } from "../../redux/catalog/operations";
import Loader from "../Loader/Loader";

function Catalog() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.catalog.isLoading);
  const page = useSelector((state) => state.catalog.page);
  const adverts = useSelector((state) => state.catalog.adverts);
  const filters = useSelector((state) => state.filters.filters);
  const allAdverts = useSelector((state) => state.catalog.allAdverts);

  const isFilterOn = Boolean(
    filters.selectedMake ||
      filters.selectedPrice ||
      filters.minMileage ||
      filters.maxMileage
  );

  useEffect(() => {
    if (adverts.length === 0) {
      dispatch(setAllAdverts());
      dispatch(setAdverts(page));
    }
  }, [adverts.length, dispatch, page]);

  const onFindMore = () => {
    dispatch(onNextPage());
    dispatch(setAdverts(page + 1));
  };

  const filteredAdverts = allAdverts.filter((adverts) => {
    if (filters.selectedMake && adverts.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(adverts.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && adverts.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && adverts.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {adverts && (
            <>
              {filteredAdverts.length > 0 ? (
                <AdvertsList>
                  {(isFilterOn ? filteredAdverts : adverts).map((advert) => {
                    return <AdvertItem key={advert.id} advert={advert} />;
                  })}
                </AdvertsList>
              ) : (
                <NoMatching>Sorry, no matching adverts found</NoMatching>
              )}
              <ButtonLoad onFindMore={onFindMore} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Catalog;
