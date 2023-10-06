import styled from "styled-components";
import bgImg from "./../../img/car-bgc-2.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
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
  padding: 60px 24px 60px 0;
`;
