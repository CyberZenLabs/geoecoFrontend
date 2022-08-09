import React, { useState,useContext } from "react";
import AppContext from "../context/AppContext";
import {CgSelect} from "react-icons/cg";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from '../styled-components-css/styles.selecs';



const options = [ "Физлицо", "Самозанятый","ИП","ООО",];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const {selectedOption,setSelectedOption}=useContext(AppContext);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    
    setSelectedOption(value);
    console.log(selectedOption);
    setIsOpen(false);
    
  };
  

  return (
    <Main>
     
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Юридический статус"}<CgSelect></CgSelect>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()} >
                  
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}