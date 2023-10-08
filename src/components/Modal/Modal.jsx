import {
  Overlay,
  ModalContainer,
  CloseButton,
  CarImage,
  CarWrapper,
  CarTitle,
  CarInfo,
  RentalBtn,
  SecondaryTitle,
  AccessoriesList,
  ConditionsList,
  CarDescription,
} from "./Modal.styled";
import crossImg from "./../../img/x.svg";

function Modal({ closeModal, advert }) {
  const conditions = advert.rentalConditions.split("\n");
  const address = advert.address.split(",");
  const city = address[address.length - 2];
  const country = address[address.length - 1];

  const handleOverlyClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={handleOverlyClick}>
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
            {city}&ensp;|&ensp;{country}&ensp;|&ensp;Id: {advert.id}
            &ensp;|&ensp;Year: {advert.year}&ensp;|&ensp;Type: {advert.type}
          </CarInfo>
          <CarInfo>
            Fuel Consumption: {advert.fuelConsumption}
            &ensp;|&ensp;Engine Size: {advert.engineSize}
          </CarInfo>
          <CarDescription>{advert.description}</CarDescription>
          <SecondaryTitle>Accessories and functionalities:</SecondaryTitle>
          <AccessoriesList>
            {advert.functionalities.map((functionaliti) => {
              return <li> {functionaliti} | </li>;
            })}
          </AccessoriesList>
          <SecondaryTitle>Rental Conditions: </SecondaryTitle>
          <ConditionsList>
            {conditions.map((condition, index) => {
              const characters = condition.split("");
              return (
                <li key={index}>
                  {characters.map((char, charIndex) => {
                    const isDigit = /^\d+$/.test(char);
                    return (
                      <span
                        key={charIndex}
                        style={{
                          color: isDigit ? "#3470FF" : "#363535",
                          fontWeight: isDigit ? 600 : 400,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </li>
              );
            })}
            <li>
              Mileage:{" "}
              <span style={{ color: "#3470FF", fontWeight: 600 }}>
                {Number(advert.mileage).toLocaleString("en")}
              </span>
            </li>
            <li>
              Price:{" "}
              <span style={{ color: "#3470FF", fontWeight: 600 }}>
                {advert.rentalPrice}
              </span>
            </li>
          </ConditionsList>
        </div>
        <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
