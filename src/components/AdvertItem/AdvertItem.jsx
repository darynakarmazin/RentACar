import {
  CarImage,
  CarInfo,
  CarTitle,
  CardLi,
  LearnButton,
} from "./AdvertItem.styled";

function AdvertItem({ advert }) {
  return (
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
          {advert.address} | {advert.rentalCompany} | Premium {advert.type} |
          {advert.model} | {advert.mileage} | {advert.functionalities[0]}
        </CarInfo>
      </div>

      <LearnButton>Learn more</LearnButton>
    </CardLi>
  );
}

export default AdvertItem;
