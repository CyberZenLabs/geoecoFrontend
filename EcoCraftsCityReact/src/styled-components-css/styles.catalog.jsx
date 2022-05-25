import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const OverlayDivSc = styled.div`
  z-index: 100;
  background: black;
  opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.show ? "static" : "none")};
`;

export const CatalogNavSc = styled.div`
  background: #252525;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ show }) => (show ? "0" : "-100%")};
  transition: 350ms;
  z-index: 1000000;
`;

export const CatalogWrapSc = styled.div`
  width: 100%;
`;

export const CatalogIconSc = styled(Link)`
  margin-left: 2rem;
  z-index: 10000;
  cursor: pointer;
  margin-left: 214px;
  margin-bottom: 20px;
  margin-top: 20px;
  z-index: 10000;
  cursor: pointer;
  display: block;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 10px 13px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #cecece;
    cursor: pointer;
  }
`;
export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  background: #85cb33;
  height: 68px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #6e6d6d;
    cursor: pointer;
  }
`;
