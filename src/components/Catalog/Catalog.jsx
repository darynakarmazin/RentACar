import { useEffect } from "react";
import { AdvertsList } from "./Catalog.styled";
import AdvertItem from "../AdvertItem/AdvertItem";
import ButtonLoad from "../ButtonLoad/ButtonLoad";
import { useDispatch, useSelector } from "react-redux";
import {
  onNextPage,
  setAdverts,
  firstAdverts,
} from "../../redux/catalog/catalogSlice";
import fetchAdverts from "../../Api/fetchAdverts";

function Catalog() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.catalog.page);
  const adverts = useSelector((state) => state.catalog.adverts);
  const filters = useSelector((state) => state.catalog.filters);

  const onFindMore = () => {
    dispatch(onNextPage());
    getAdverts(page);
  };

  const getAdverts = (page) => {
    fetchAdverts(page)
      .then((results) => {
        dispatch(setAdverts(results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    if (adverts.length === 0) {
      fetchAdverts(page).then((results) => {
        dispatch(firstAdverts(results));
      });
    }
  }, [adverts.length, dispatch, page]);

  const filteredAdverts = adverts.filter((adverts) => {
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

  console.log(filteredAdverts);

  return (
    <>
      {adverts && (
        <>
          <AdvertsList>
            {filteredAdverts.map((advert) => {
              return <AdvertItem key={advert.id} advert={advert} />;
            })}
          </AdvertsList>
          <ButtonLoad onFindMore={onFindMore} />
        </>
      )}
    </>
  );
}

export default Catalog;
