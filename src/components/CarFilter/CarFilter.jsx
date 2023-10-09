import React, { useState } from "react";
import makes from "./makes.json";
import {
  FilterForm,
  InputLeft,
  InputRight,
  Label,
  SearchButton,
  SelectDiv,
} from "./CarFilter.styled";
import MySelect from "../MySelect/MySelect";
import MySelectMake from "../MySelectMake/MySelectMake";

const CarFilter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filters = {
      selectedMake,
      selectedPrice,
      minMileage,
      maxMileage,
    };

    onFilterChange(filters);
  };

  return (
    <div>
      <FilterForm onSubmit={handleFormSubmit}>
        <SelectDiv>
          <Label>Car brand</Label>
          {/* <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select a brand</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select> */}
          <MySelectMake
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
            makes={makes}
          />
        </SelectDiv>
        <SelectDiv>
          <Label>Price/ 1 hour</Label>
          <MySelect
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        </SelectDiv>
        <SelectDiv>
          <Label>Сar mileage / km</Label>
          <div>
            <InputLeft
              type="number"
              value={minMileage}
              onChange={(e) => setMinMileage(e.target.value)}
              placeholder="From"
            />
            <InputRight
              type="number"
              value={maxMileage}
              onChange={(e) => setMaxMileage(e.target.value)}
              placeholder="To"
            />
          </div>
        </SelectDiv>
        <SearchButton type="submit">Search</SearchButton>
      </FilterForm>
    </div>
  );
};

export default CarFilter;
