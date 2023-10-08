import { useEffect, useState } from "react";
import { AdvertsList } from "./Catalog.styled";
import AdvertItem from "../AdvertItem/AdvertItem";
import ButtonLoad from "../ButtonLoad/ButtonLoad";
import { useDispatch, useSelector } from "react-redux";
import { onNextPage } from "../../redux/catalog/catalogSlice";
import fetchAdverts from "../../Api/fetchAdverts";

function Catalog() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.catalog.page);
  const [adverts, setAdverts] = useState([]);

  const onFindMore = () => {
    dispatch(onNextPage());
  };

  useEffect(() => {
    getAdverts(page);
  }, [page]);

  const getAdverts = (page) => {
    fetchAdverts(page)
      .then((results) => {
        setAdverts((prevAdverts) => [...prevAdverts, ...results]);
      })
      .catch((err) => console.error("error:" + err));
  };

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
