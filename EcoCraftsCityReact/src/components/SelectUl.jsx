import React, { useState } from "react";
import {CgSelect} from "react-icons/cg";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from '../styled-components-css/styles.selecs';



const options = [ "Individual", "Self-employed","IP","LLC",];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
     
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Legal status"}<CgSelect></CgSelect>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
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