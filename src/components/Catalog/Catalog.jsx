import { useEffect, useState } from "react";
import fetchAdverts from "../../Api/fetchAdverts";
import { AdvertsList } from "./Catalog.styled";
import AdvertItem from "../AdvertItem/AdvertItem";
import Button from "../Button/Button";

function Catalog() {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);

  const onFindMore = () => {
    setPage((prevPage) => prevPage + 1);
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
          <Button onFindMore={onFindMore} />
        </>
      )}
    </>
  );
}

export default Catalog;
