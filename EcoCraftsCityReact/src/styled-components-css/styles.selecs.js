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
  padding: 15px 18px 18px 18px;
  height: 50px;
  font-weight: 500;
  font-size: 18px;
  color: #757575;
  background: #ffffff;
   width: 500px;
  max-width: 500px;
  min-width: 320px;
  border: 2px solid rgba(133, 203, 51, 0.7);
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
  border: 2px solid rgba(133, 203, 51, 0.7);
  box-sizing: border-box;
  color: #757575;
  font-size: 1.3rem;
  font-weight: 500;
  width:500px;
  border: 2px solid rgba(133, 203, 51, 0.7);
border-radius: 20px;

  &:first-child {
    padding-top: 10px;
    
  }
  @media (max-width: 1000px) {
    width: 430px;
  }
  @media (max-width:480px) {
<<<<<<< HEAD
    width: 340px;
  }

=======
  width: 340px;
}
>>>>>>> ca8e8f38b185d068092fa508342e7095b88f1c01
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 5px;
  width:100%;
`;