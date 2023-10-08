import React, { useState } from "react";
import makes from "./makes.json";
import { useSelector } from "react-redux";

const CarFilter = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const advertisements = useSelector((state) => state.catalog.adverts);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filteredAdvertisements = advertisements.filter((advertisement) => {
      if (selectedMake && advertisement.make !== selectedMake) {
        return false;
      }
      if (selectedPrice && advertisement.pricePerHour > Number(selectedPrice)) {
        return false;
      }
      if (minMileage && advertisement.mileage < Number(minMileage)) {
        return false;
      }
      if (maxMileage && advertisement.mileage > Number(maxMileage)) {
        return false;
      }
      return true;
    });
    console.log("Filtered Advertisements:", filteredAdvertisements);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Car brand</label>
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select a brand</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Price/ 1 hour</label>
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="">To $</option>
            {[...Array(21).keys()].map((price) => (
              <option key={price} value={price * 10}>
                ${price * 10}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Сar mileage / km</label>
          <input
            type="number"
            value={minMileage}
            onChange={(e) => setMinMileage(e.target.value)}
            placeholder="From"
          />
          <input
            type="number"
            value={maxMileage}
            onChange={(e) => setMaxMileage(e.target.value)}
            placeholder="To"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CarFilter;
