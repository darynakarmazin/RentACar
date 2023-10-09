import React, { useState } from "react";
import makes from "./makes.json";
import {
  FilterForm,
  InputLeft,
  InputRight,
  Label,
  SearchButton,
  SelectDiv,
} from "./FavoriteSideBar.styled";
import MySelectFav from "../MySelectFav/MySelectFav";
import MySelectMakeFav from "../MySelectMakeFav/MySelectMakeFav";

const FavoriteSideBar = ({ onFilterChange }) => {
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
          <MySelectMakeFav
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
            makes={makes}
          />
        </SelectDiv>
        <SelectDiv>
          <Label>Price/ 1 hour</Label>
          <MySelectFav
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

export default FavoriteSideBar;
