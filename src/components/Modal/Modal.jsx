import {
  Overlay,
  ModalContainer,
  CloseButton,
  CarImage,
  CarWrapper,
  CarTitle,
  CarInfo,
  CarSescription,
  RentalBtn,
  SecondaryTitle,
  AccessoriesList,
  ConditionsList,
} from "./Modal.styled";
import crossImg from "./../../img/x.svg";

function Modal({ closeModal, advert }) {
  const conditions = advert.rentalConditions.split("\n");
  const address = advert.address.split(",");
  const city = address[address.length - 2];
  const country = address[address.length - 1];

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={closeModal}>
          <img src={crossImg} alt="cancel" />
        </CloseButton>
        <div>
          <CarWrapper>
            <CarImage src={advert.img} alt="car" width={461} height={248} />
          </CarWrapper>
          <CarTitle>
            <h2>
              {advert.make} <span>{advert.model}</span>, {advert.year}
            </h2>
          </CarTitle>
          <CarInfo>
            {city} | {country} | Id: {advert.id} | Year: {advert.year} | Type:{" "}
            {advert.type} | Fuel Consumption: {advert.fuelConsumption} | Engine
            Size: {advert.engineSize}
          </CarInfo>
          <CarSescription>{advert.description}</CarSescription>
          <SecondaryTitle>Accessories and functionalities:</SecondaryTitle>
          <AccessoriesList>
            {advert.functionalities.map((functionaliti) => {
              return <li> {functionaliti} | </li>;
            })}
          </AccessoriesList>
          <SecondaryTitle>Rental Conditions: </SecondaryTitle>
          <ConditionsList>
            {conditions.map((condition) => {
              return <li>{condition}</li>;
            })}
          </ConditionsList>
        </div>
        <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
