import styled from 'styled-components/macro';
import image from '../img/geoecologo.png';
import { Link } from 'react-router-dom';

export const DivBoxLogoSC = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  height: 104px;
  width: 139px;
  background-size: 152px;
  display: grid;
  align-items: start;
`;

export const DivBoxHeaderSC = styled.div`
  width: 100%;
  height: 119px;
  display: grid;
  justify-items: center;
`;

export const DivHeaderSC = styled.div`
  max-width: 1420px;
  width: inherit;
  height: 100%;

  padding: 0 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 139px auto 300px;
`;

export const DivCatalogAndSearchBoxSC = styled.div`
  display: grid;
  grid-template-rows: 31px 88px;
`;

export const SpanFirstSC = styled(Link)`
  display: inline-block;
  //margin-right: 30px;
  font-size: 12px;
  font-family: var(--root-font-family);
  border: 2px solid rgba(133, 203, 51, 0.7);
border-radius: 20px;
color:#85CB33;
  width: fit-content;
  padding: 3px 5px;
  text-decoration: none;
  color: var(--color-black);
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const SpanSecondSC = styled(Link)`
  display: inline-block;
  font-size: 12px;
  font-family: var(--root-font-family);
  border-radius: 50px;

  width: fit-content;
  padding: 3px 5px;
  text-decoration: none;
  
`;

export const DivTextBoxSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);;
  align-items: start;
  align-items: center;
  @media (max-width: 731px) {
    display: none;
  }
`;

export const DivBoxButtonAndInputSC = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  @media (max-width: 730px) {
    display: none;
  }
`;

export const DivBoxIconHeaderSC = styled.div`
  display: grid;
  justify-items: end;
  align-items: center;
}
`;

export const DivBoxIconSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  width: 278px;
  align-items: center;
  @media (max-width: 1000px) {
    justify-items: center;
    
  
    }
`;

export const ButtonSC = styled.button`
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
  padding: 8px 32px;

  //position: absolute;
  width: 176px;
  height: 56px;
  //left: calc(50% - 514px / 2);
  //top: calc(50% - 56px / 2 + 213px);

  background: var(--green-color);
  border-radius: 20px;
  border: none;
  color: var(--white-color);
  //margin-top: 20px;
  text-transform: capitalize;
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  cursor: pointer;
  // opacity: ${(p) => (p.statusOpasity ? 0.5 : 1)};
`;

export const BoxContentButton = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
`;

export const InputSC = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0px 18px 18px;

  //position: absolute;
  width: auto;
  height: 56px;
  left: 0px;
  top: calc(50% - 56px / 2 - 140px);

  border: 2px solid var(--main-color);
  box-sizing: border-box;
  border-radius: 20px;
  ::placeholder {
    font-size: var(--font-size-icon-text);
  }
`;

export const DivInputBoxCS = styled.div`
  display: grid;
  width: auto;
  position: relative;
`;

export const DivIconBoxInput = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const LinkIconSC = styled(Link)`
  //display: inline-block;
  font-size: 12px;
  font-family: var(--root-font-family);
  border-radius: 50px;
  //background: rgba(133, 203, 51, 0.25);
  width: fit-content;
  padding: 3px 10px;
  text-decoration: none;
  color: var(--color-black);
  display: grid;
  grid-template-rows: 56% 44%;
  @media (max-width: 730px) {
    position: absolute;
    right: 10vw;
    top: 40px;
  }
`;

export const LinkIconHideSC = styled(Link)`
  //display: inline-block;
  font-size: 12px;
  font-family: var(--root-font-family);
  border-radius: 50px;
  //background: rgba(133, 203, 51, 0.25);
  width: fit-content;
  padding: 3px 5px;
  text-decoration: none;
  color: var(--color-black);
  display: grid;
  grid-template-rows: 56% 44%;
  @media (max-width: 730px) {
    display: none;
  }
`;
export const LinkLogoSC = styled(Link)``;

export const DivBoxIconEndSC = styled.div`
  display: grid;
  align-items: end;
  justify-items: center;
`;

export const SpanEndHeaderSC = styled.span`
  display: grid;
  align-items: start;
  color: rgba(37, 37, 37, 0.8);
  font-size: var(--font-size-icon-text);
  margin-top:3px;
`;
export const DivBoxButtonCreateStoreSC = styled.span`
:hover{
  background-color:#85CB33;
  color:white;
  cursor: pointer;
}
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 30px;
color:#85CB33;
font-size:16px;
height: 56px;
font-weight: semibold ;
@media (max-width: 1000px) {
  display:none;

  }

/* Акцент 70% */

border: 2px solid rgba(133, 203, 51, 0.7);
border-radius: 20px;
`;

export const LinkProfileBoxSC = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
