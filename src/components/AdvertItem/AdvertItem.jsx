import { useState } from "react";
import Modal from "../Modal/Modal";
import {
  CarImage,
  CarInfo,
  CarTitle,
  CardLi,
  LearnButton,
} from "./AdvertItem.styled";

function AdvertItem({ advert }) {
  const [openModal, setOpenModal] = useState(false);

  const address = advert.address.split(",");
  const city = address[address.length - 2];
  const country = address[address.length - 1];

  const openModalHendler = () => {
    setOpenModal(true);
  };

  const closeModalHendler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CardLi>
        <CarImage src={advert.img} alt="car img" height={268} />
        <div>
          <CarTitle>
            <h2>
              {advert.make} <span>{advert.model}</span>, {advert.year}
            </h2>
            <p>{advert.rentalPrice}</p>
          </CarTitle>

          <CarInfo>
            {city} | {country} | {advert.rentalCompany} | Premium {advert.type}{" "}
            |{advert.model} | {advert.mileage} | {advert.functionalities[0]}
          </CarInfo>
        </div>

        <LearnButton onClick={openModalHendler}>Learn more</LearnButton>
      </CardLi>
      {openModal && <Modal closeModal={closeModalHendler} advert={advert} />}
    </>
  );
}

export default AdvertItem;
