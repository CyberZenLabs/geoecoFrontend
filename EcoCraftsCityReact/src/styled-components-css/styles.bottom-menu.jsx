import styled from "styled-components/macro";
import {Link} from "react-router-dom";


export const BoxBottomMenuSC = styled.div`
display:none;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: auto;
    justify-items: center;
    background: #DBF0C2;
    padding-left: 2%;
    padding-right: 2%;
    width: 100vw;
    max-height: 176px;
    position: fixed;
    bottom: 0;
    z-index:1000;
    padding: 2% 5%;
    ${'' /* padding-top: 26px;
    padding-bottom: 27px;
    padding-left: 63px;
    padding-right: 63px; */}
  }

  @media (max-width: 360px) {
    height: 60px;
  }
`;

export const ContentBottomMenuSC = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr ;
  justify-items: center;
  grid-row-gap: 10px;
  align-items:center;
  height:100%;
  width:100%;
  @media (max-width: 360px) {
    grid-template-rows: 1fr ;

     }
`;

export const TitleElementSC = styled.p`
  font-size: 3vw;
  font-weight: 500;
  margin-bottom: 5px;
  align-self: end;
  @media (max-width: 360px) {
    display: none;
  }
`;

export const DivImgSC = styled.div`
  padding: 0;
  width:100%;
  height:100%;
  display:grid;
  align-items:end;
  justify-items:center;
  @media (max-width: 360px) {
    align-items:center;
  }
`;

export const BottomMenuLinkSC = styled(Link)`
  //display: inline-block;
  width: fit-content;
  text-decoration: none;
  color: var(--color-black);
  display: grid;
  height:50%;
  width:50%;
  @media (max-width: 360px) {
    align-self:center;
    height:80%;
  width:80%;
  margin-bottom:5px;

     }
`;

