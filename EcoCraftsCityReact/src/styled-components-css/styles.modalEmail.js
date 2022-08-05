import styled from "styled-components/macro";
import Modal from "react-modal";
import {IoIosArrowBack } from 'react-icons/io';

export const BlockModal = styled(Modal)`
z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
min-width: 360px;


  @media (max-width:1000px) {
    z-index: 1000;
    align-content: unset;
    justify-content: unset;
  }
`;
export const DivTextEmailSC = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-align: center;
`;
export const DivTexttimesSC = styled.div`

font-size: 22px;
margin-top:10px;
margin-bottom:20px;
text-align: center;
`;
export const DivTimerSC = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-align: center;
`;

export const DivWrapModal = styled.div`
  display: grid;
  width: 770px;
  height: 850px;
  background: #ffffff;
  border-radius: 30px;
  z-index:1000;
  @media (max-width:1000px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    align-content: flex-start;
    z-index:1000;
  }
  //border: 1px solid red;
`;
export const ButtonPrevModal = styled.button`
  width: 40px;
  height: 40px;
  margin: 20px auto auto 20px;
  border: none;
  background: rgba(196, 196, 196, 0.31);
  border-radius: 30px;
  cursor: pointer;
  :hover{
    background: rgba(172, 172, 172, 0.31);
  }
`;
export const IoIosArrowBackSC =styled(IoIosArrowBack)`
width: 30px;
height: 30px;
opacity: 60%;
position: relative;
right: 2px;
top: 2px;
`;
export const DivBoxRowModalSC = styled.div`
justify-self: center;
  margin-top: 40px;
 // border: 1px solid red;
  display: grid;
  justify-content: center;
  max-width: 500px;
margin-bottom:20px;
align-content: space-between;
align-items: center;
justify-items: center;
`;
export const DivBoxRowModalContSC = styled.div`
justify-self: center;
 // border: 1px solid red;
  display: grid;
  justify-content: center;
  max-width: 500px;
 height: 50px; 
 margin-top:5px;
 
`;
export const StoreCreationTitleSC = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 38px;
line-height: 46px;
text-align: center;
/* Вторичный */
color: #252525;
//border: 1px solid red;
@media (max-width:550px) {
    font-size: 25px;
}
`;
export const ButtonContinueModal = styled.button`
   width: 500px;
  max-width: 500px;
  min-width: 320px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
  gap: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  border-radius: 20px;
  position: absolute;
  border: none;
  /* Акцент */
  background: #85cb33;
  border-radius: 20px;
  :hover {
    background-color: #85cb33;
  }
  :enabled {
    background-color: #85cb33;
  }
:disabled {
  background-color: #76B42E;
  }
  @media (max-width:1000px) {
    width: 90%;
}
`;
export const PasswordFieldSC = styled.input`
box-sizing: border-box;
height:50px;
/* Auto layout */
display: flex;   
  width: 500px;
  max-width: 500px;
  min-width: 320px;
flex-direction: row;
align-items: center;
justify-self: center;
padding: 18px 0px 18px 18px;
gap: 294px;
position: absolute;
/* Акцент 70% */
border: 3px solid rgba(133, 203, 51, 0.7);
border-radius: 20px;

::placeholder{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
color: rgba(37, 37, 37, 0.7);
}
:hover{
    border: 3px solid  #76b42e;
}
@media (max-width:1000px) {
    width: 90%;
}
`;
export const EmailFieldSC = styled.input`
box-sizing: border-box;
height:50px;
/* Auto layout */
display: flex;   
  width: 500px;
  max-width: 500px;
  min-width: 320px;
flex-direction: row;
align-items: center;
justify-self: center;
padding: 18px 0px 18px 18px;
gap: 294px;
position: absolute;
/* Акцент 70% */
border: 3px solid rgba(133, 203, 51, 0.7);
border-radius: 20px;

::placeholder{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
color: rgba(37, 37, 37, 0.7);
}
:hover{
    border: 3px solid  #76b42e;
}
@media (max-width:1000px) {
    width: 90%;
}
`;
export const CenterItemsSC = styled.div`
height: 520px;
width: 90%;
max-width: 600px;
min-width: 320px;
justify-self: center;
display: grid;
//border: 1px solid red;
  justify-content: center;
  @media (max-width:1000px) {
margin-top: 40px;
transition: 0.5s;
  }
  @media (max-width:550px) {
    height: 250px;
  }
`;
