import { Link } from "react-router-dom";
import styled from "styled-components/macro"; 

export const DivSelectSC = styled.div`
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
export const SelectSC = styled.div`
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
