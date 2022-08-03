import React, { useContext, useState,useEffect } from "react";
import { FaOpencart } from "react-icons/fa";
import AppContext from "../context/AppContext";
import { getPadTime } from "../HelpTimer/getPadTime";
import {openCarts} from "./Modal"
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
  PasswordFieldSC,
  DivTextEmailSC,
  DivTimerSC,
} from "../styled-components-css/styles.modalEmail";

const ModalSendEmail = () => {
  const { openEmail, setOpenEmail, modalData,} = useContext(AppContext);
  const [disable, setDisable] = React.useState(false);
  const [Timeleft, SetTimeleft] =useState(60);

   
  const minute =getPadTime( Math.floor(Timeleft/60));
  const second =getPadTime((Timeleft-minute*60));
  useEffect(()=>{
    const interval = setInterval(() => {
      disable&&SetTimeleft((Timeleft)=>Timeleft>=1?Timeleft-1:0)
   
   
    }, 1000);
    if(Timeleft===0){setDisable(false);};
    return()=>{clearInterval(interval)
    
   
    }
  },[Timeleft,disable]);
  
  const start =()=>{
   
    setDisable(true);
    if(Timeleft===0)SetTimeleft(60);
  
  
   console.log(disable);
   
  } 
  return (
    <>
      <BlockModal isOpen={openEmail} contentLabel="Modal" >
        <DivWrapModal>
          <ButtonPrevModal onClick={() => setOpenEmail(false)}>
            <IoIosArrowBackSC />
          </ButtonPrevModal>
          <CenterItemsSC>
           
           
           <StoreCreationTitleSC>Создание магазина</StoreCreationTitleSC>
          
              <DivBoxRowModalSC>
               
               
               <DivTextEmailSC>
                
               На вашу почту было отправлено письмо, откройте его и перейдите по ссылке для подтверждения электронного адреса. Если письмо не пришло проверьте папку Спам или повторите отправку.
               </DivTextEmailSC>
               <img src="/default-images/SendEmail.svg"   to="#"  /> 
               
              </DivBoxRowModalSC>
              <DivTimerSC><span>{minute}:{second}</span>
           <DivBoxRowModalContSC>
            {disable?( <ButtonContinueModal  disabled={disable}    onClick={() =>start() } >Пожалуйста подождите</ButtonContinueModal>):( <ButtonContinueModal  disabled={disable}    onClick={() =>start() } >Отправить еще раз</ButtonContinueModal>)}
            
               
             </DivBoxRowModalContSC>
             </DivTimerSC>  
             
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default ModalSendEmail;
