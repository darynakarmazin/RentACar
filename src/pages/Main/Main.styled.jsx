import styled from "styled-components";
import bgImg from "./../../img/car-bgc-3.jpg";

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
  padding: 60px 24px;
  border-radius: 12px;
  margin-top: 48px;
  border: 3px solid #3470ff;
  background: rgba(255, 255, 255, 0.5);

  h1 {
    color: #121417;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 48px;
  }

  p {
    color: #121417;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 24px;
  }
`;
