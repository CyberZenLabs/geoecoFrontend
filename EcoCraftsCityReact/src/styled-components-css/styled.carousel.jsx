import styled from "styled-components/macro";

export const DivBoxCarouselSC = styled.div`
  //position: relative;
  //height: 400px;
  //width: 100vw;
  display: grid;
  justify-items: center;
  //overflow: auto;
  
`;

export const DivContentCarouselSC = styled.div`
  //position: relative;
  //height: 400px;
  width:900px;
  column-gap: 100px;
  //overflow: auto;
  
`;

export const ButtonCarouselSC = styled.button`
  //position: relative;
  //height: 400px;
  width: max-content;
  height: max-content;
  /* background: #76b42e; */
  //overflow: auto;
  
`;

export const DivPageButtonSC = styled.div`
//position: absolute;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.11);
  border-radius: 30px;
  background-color: #ffffff;
  z-index: 200;
  font-size: 23px;
  color: black;
  :hover {
    color: rgb(133, 203, 51);
  }
`;
