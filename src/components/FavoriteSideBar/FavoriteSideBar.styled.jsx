import styled from "styled-components";

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
  margin: 50px 0 100px;
`;

export const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  select {
    border: none;
    outline: none;
    border-radius: 14px;
    background: #f7f7fb;
    display: flex;
    width: 320px;
    padding: 14px 89px 14px 18px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    color: #121417;
    font-family: "Manrope", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const InputLeft = styled.input`
  border: none;
  outline: none;
  width: 160px;
  height: 54px;
  padding: 14px 24px 14px 62px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const InputRight = styled.input`
  border: none;
  outline: none;
  width: 160px;
  height: 54px;
  padding: 14px 24px 14px 38px;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  color: #121417;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SearchButton = styled.button`
  border-radius: 12px;
  background: #3470ff;
  padding: 14px 44px;
  width: 320px;
  color: var(--White, #fff);
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const Label = styled.label`
  color: #8a8a89;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;
