import styled from "styled-components";
import bgImg from "./../../img/placeholder-2.png";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background: #fff;
  padding: 40px;
`;

export const CarWrapper = styled.div`
  border-radius: 14px;
  background: rgba(18, 20, 23, 0.1);
  background-image: linear-gradient(
      rgba(18, 20, 23, 0.2),
      rgba(255, 255, 255, 0.6)
    ),
    url(${bgImg});
  background-size: cover;
  background-position-y: 45%;
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
`;

export const CarImage = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;
  overflow: hidden;
`;

export const CarTitle = styled.div`
  display: flex;
  align-item: start;
  margin-bottom: 8px;

  h2 {
    color: #121417;
    font-family: "Manrope", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    text-wrap: nowrap;
  }

  span {
    color: #3470ff;
    font-family: "Manrope", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }
`;

export const CarInfo = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
`;

export const CarDescription = styled.p`
  color: #121417;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  line-height: 1.43;
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const RentalBtn = styled.a`
  padding: 12px 50px;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  display: inline-block;
  margin-top: 24px;
  margin-top: auto;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const SecondaryTitle = styled.h3`
  color: #121417;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const AccessoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: rgba(18, 20, 23, 0.5);
  font-family: "Manrope", sans-serif;
  list-style: none;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin-bottom: 24px;

  li {
    padding: 7px 14px;
    border-radius: 35px;
    background: #f9f9f9;
    color: #363535;
    font-family: "Manrope", sans-serif;
    font-size: 12px;
    line-height: 1.5;
  }
`;
