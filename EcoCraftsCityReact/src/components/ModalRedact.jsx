import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import {
  BlockModal,
  ButtonContinueModal,
  ButtonPrevModal,
  CenterItemsSC,
  DivBoxRowModalContSC,
  DivBoxRowModalSC,
  DivWrapModal,
  EmailFieldSC,
  IoIosArrowBackSC,
  StoreCreationTitleSC,
} from "../styled-components-css/styles.ModalRedact";               
const ModalRedact = () => {
  const { openRedact, setOpenRedact } = useContext(AppContext);

 
  return (
    <>
      <BlockModal isOpen={openRedact} contentLabel="Modals" >
        <DivWrapModal>
          <ButtonPrevModal onClick={() => setOpenRedact(false)}>
            <IoIosArrowBackSC />
          </ButtonPrevModal>
          <StoreCreationTitleSC>Edit profile</StoreCreationTitleSC>
          <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Name"/>
               
              </DivBoxRowModalSC>
              
              <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Surname"/>
               
              </DivBoxRowModalSC>
              <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Middle name"/>
               
              </DivBoxRowModalSC>
              <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Phone"/>
               
              </DivBoxRowModalSC>
              <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Email"/>
               
              </DivBoxRowModalSC>
         
          
              <DivBoxRowModalContSC>
               <ButtonContinueModal>Save</ButtonContinueModal>
             </DivBoxRowModalContSC>
          <CenterItemsSC>
          
   
           
           
         
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default ModalRedact;
