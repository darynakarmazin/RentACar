import React, { useEffect, useState } from "react";
import makes from "./makes.json";
import {
  FilterForm,
  InputDiv,
  InputLeft,
  InputPl,
  InputRight,
  Label,
  SearchButton,
  SelectDiv,
} from "./CarFilter.styled";
import MySelect from "../MySelect/MySelect";
import MySelectMake from "../MySelectMake/MySelectMake";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";

const CarFilter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const filters = useSelector(selectFilters);

  useEffect(() => {
    setSelectedMake(filters.selectedMake);
    setSelectedPrice(filters.selectedPrice);
    setMinMileage(filters.minMileage);
    setMaxMileage(filters.maxMileage);
  }, [
    filters.maxMileage,
    filters.minMileage,
    filters.selectedMake,
    filters.selectedPrice,
    filters.setMaxMileage,
  ]);

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
            <InputDiv>
              <InputPl>From</InputPl>
              <InputLeft
                type="number"
                value={minMileage}
                onChange={(e) => {
                  const value = Math.max(e.target.value, 0);
                  setMinMileage(value);
                }}
              />
            </InputDiv>
            <InputDiv>
              <InputPl>To</InputPl>
              <InputRight
                type="number"
                value={maxMileage}
                onChange={(e) => {
                  const value = Math.max(e.target.value, 0);
                  setMaxMileage(value);
                }}
              />
            </InputDiv>
          </div>
        </SelectDiv>
        <SearchButton type="submit">Search</SearchButton>
      </FilterForm>
    </div>
  );
};

export default CarFilter;
