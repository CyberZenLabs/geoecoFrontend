import styled from "styled-components/macro";
import {Link} from "react-router-dom";


export const BoxBottomMenuSC = styled.div`
  @media (max-width: 730px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: auto;
    justify-items: center;
    background: #DBF0C2;
    padding-left: 2%;
    padding-right: 2%;
    width: 100vw;
    height: 75px;
    max-height: 176px;
    position: fixed;
    bottom: 0;
    z-index:1000;
    ${'' /* padding-top: 26px;
    padding-bottom: 27px;
    padding-left: 63px;
    padding-right: 63px; */}
  }
  @media (min-width: 731px) {
    display: none;
  }
  @media (max-width: 360px) {
    height: 60px;
  }
`;

export const ContentBottomMenuSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 2.2em);
  justify-items: center;
  grid-row-gap: 10px;
`;

export const TitleElementSC = styled.p`
  font-size: 3vw;
  font-weight: 500;
  padding-bottom: 13px;
  @media (max-width: 360px) {
    display: none;
  }
`;

export const DivImgSC = styled.div`
  margin-top: 10px;
  padding: 0;
  height: max-content;
`;

export const BottomMenuLinkSC = styled(Link)`
  //display: inline-block;
  width: fit-content;
  text-decoration: none;
  color: var(--color-black);
  display: grid;
  grid-template-rows: 56% 44%;
`;

