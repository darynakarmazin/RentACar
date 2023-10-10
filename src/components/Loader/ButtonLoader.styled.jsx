import styled from "styled-components";

export const Lwrapper = styled.div`
  width: 212px;
  height: 36px;
  position: relative;
  z-index: 1;
`;

export const Lcircle = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  background-color: #e3ffa8;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 0.5s alternate infinite ease;

  @keyframes circle7124 {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0%;
    }

    &:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }
  }
`;

export const Lshadow = styled.div`
  width: 15px;
  height: 3px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 40px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 0.5s alternate infinite ease;

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }

    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }

    &:nth-child(4) {
      left: 45%;
      animation-delay: 0.2s;
    }

    &:nth-child(5) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }
  }
`;
