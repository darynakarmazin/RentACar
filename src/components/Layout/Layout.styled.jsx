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
  color: #121417;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.11;
  padding: 10px 0;
`;

export const NavigationLinks = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.43;

  a {
    border-radius: 12px;
    border: 3px solid #3470ff;
    padding: 6px 12px;

    &.active {
      background: #3470ff;
      color: var(--White, #fff);
    }
  }
`;
