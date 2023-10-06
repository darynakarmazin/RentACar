import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoNavLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const NavigationLinks = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
