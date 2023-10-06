import { useEffect, useState } from "react";
import fetchAdverts from "../../Api/fetchAdverts";
import AdvertItem from "../AdvertItem/AdvertItem";
import { AdvertsList } from "./Catalog.styled";

function Catalog() {
  const [adverts, setAdverts] = useState("");

  useEffect(() => {
    fetchAdverts()
      .then((results) => {
        setAdverts(results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <>
      {adverts && (
        <AdvertsList>
          {adverts.map((advert) => {
            return <AdvertItem key={advert.id} advert={advert} />;
          })}
        </AdvertsList>
      )}
    </>
  );
}

export default Catalog;
