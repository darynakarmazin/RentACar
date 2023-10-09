import styled from "styled-components";

export const AdvertsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
  flex-wrap: wrap;
  margin: 50px 0 100px;
`;

export const NoMatching = styled.div`
  display: flex;
  width: 400px;
  margin: 100px auto;
  border-radius: 12px;
  background: #3470ff;
  padding: 10px 80px;
  align-items: center;
  color: var(--White, #fff);
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;
