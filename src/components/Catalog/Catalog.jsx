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

  return (
    <>
      {adverts && (
        <>
          <AdvertsList>
            {adverts.map((advert) => {
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
