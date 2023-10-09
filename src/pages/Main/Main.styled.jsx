import styled from "styled-components";
import bgImg from "./../../img/car-bgc-3.jpg";

export const Container = styled.div`
  display: flex;
`;

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1)
    ),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 36px 24px;
  border-radius: 22px;
  margin-top: 48px;
  border: 5px solid #3470ff;
  background: rgba(255, 255, 255, 0.75);

  h1 {
    color: #121417;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.5;
  }

  h2 {
    margin-bottom: 24px;
  }

  p {
    color: #121417;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 24px;
  }
`;

export const NavigationLink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #121417;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.43;
  margin-top: 15px;

  a {
    border-radius: 22px;
    border: 3px solid #3470ff;
    padding: 18px 24px;

    &.active {
      background: #3470ff;
      color: var(--White, #fff);

      &:hover,
      &:focus {
        background: #0b44cd;
      }
    }

    &:hover,
    &:focus {
      border: 3px solid #0b44cd;
    }
  }
`;
