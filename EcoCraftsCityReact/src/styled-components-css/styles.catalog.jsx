import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const OverlayDivSc = styled.div`
  z-index: 100;
  background: black;
  opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.show ? 'static' : 'none')};
`;

export const CatalogNavSc = styled.div`
  background: white;

  width: 315px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ show }) => (show ? '0' : '-100%')};
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
  margin-left: 286px;
  margin-bottom: 20px;
  margin-top: 20px;
  z-index: 10000;
  cursor: pointer;
  display: block;
  color: black;
`;

export const SidebarLink = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 10px 13px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    border-left: 4px solid #85cb33;
    cursor: pointer;
  }
`;
export const SidebarLabel = styled.span`
  margin-left: 16px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #252525cc;
`;

export const DropdownLink = styled(Link)`
  height: 68px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  font-size: 18px;
  &:hover {
    cursor: pointer;

    border-left: 4px solid #85cb33;
  }
`;
