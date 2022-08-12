import { Link } from "react-router-dom";
import styled from "styled-components/macro"; 

export const Main = styled("div")`
  font-family: sans-serif;
  width: 500px;
  max-width: 500px;
  min-width: 320px;
  @media (max-width: 1000px) {
    width: 430px;
  }
  @media (max-width:480px) {
  width: 340px;
}
`;

export const DropDownContainer = styled("div")`
  width: 10.5em;
  
`;

export const DropDownHeader = styled("div")`
display:flex;
justify-content: space-between;
  margin-bottom: 0.8em;
  padding: 12px 18px 12px 18px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 18px;
  color: #757575;
  background: #ffffff;
   width: 500px;
  max-width: 500px;
  min-width: 320px;
  border: 3px solid rgba(133, 203, 51, 0.7);
border-radius: 20px;
@media (max-width: 1000px) {
  width: 430px;
}
@media (max-width:480px) {
  width: 340px;
}
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin-bottom: 10px;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #757575;
  font-size: 1.3rem;
  font-weight: 500;
  width:500px;
  border: 3px solid rgba(133, 203, 51, 0.7);
border-radius: 20px;

  &:first-child {
    padding-top: 10px;
    
  }
  @media (max-width: 1000px) {
    width: 430px;
  }
  @media (max-width:480px) {
  width: 340px;
}
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 5px;
  width:100%;
`;