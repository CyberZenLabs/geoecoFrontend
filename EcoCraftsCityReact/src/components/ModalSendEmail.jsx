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
  DivTexttimesSC,
} from "../styled-components-css/styles.modalEmail";

const ModalSendEmail = () => {
  const { openEmail, setOpenEmail, modalData,disable,setDisable} = useContext(AppContext);
 
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
           
           
           <StoreCreationTitleSC>Store creaction</StoreCreationTitleSC>
          
              <DivBoxRowModalSC>
               
               
               <DivTextEmailSC>
                
               An email has been sent to your email address, open it and follow the link to confirm your email address. If you didn't receive the email, please check your Spam folder or resend.
               </DivTextEmailSC>
               <img src="/default-images/SendEmail.svg"   to="#"  /> 
               
              </DivBoxRowModalSC>
              <DivTimerSC><DivTexttimesSC><span>{minute}:{second}</span></DivTexttimesSC>
           <DivBoxRowModalContSC>
            {disable?( <ButtonContinueModal  disabled={disable}    onClick={() =>start() } >Please wait</ButtonContinueModal>):( <ButtonContinueModal  disabled={disable}    onClick={() =>start() } >Send again</ButtonContinueModal>)}
            
               
             </DivBoxRowModalContSC>
             </DivTimerSC>  
             
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default ModalSendEmail;
