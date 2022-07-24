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
          <StoreCreationTitleSC>Редактирование профиля</StoreCreationTitleSC>
          <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Имя"/>
               
              </DivBoxRowModalSC>
              
              <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Фамилия"/>
               
              </DivBoxRowModalSC>
              <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Отчество"/>
               
              </DivBoxRowModalSC>
              <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Телефон"/>
               
              </DivBoxRowModalSC>
              <DivBoxRowModalSC>
                <EmailFieldSC 
                placeholder="Email"/>
               
              </DivBoxRowModalSC>
         
          
              <DivBoxRowModalContSC>
               <ButtonContinueModal>Изменить</ButtonContinueModal>
             </DivBoxRowModalContSC>
          <CenterItemsSC>
          
   
           
           
         
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default ModalRedact;