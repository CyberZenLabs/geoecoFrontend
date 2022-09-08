import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { DivWrapModal,H1ContentInfoSC,BlockModal,DivContentWrapModal, ButtonContinueModal, PContentInfoSC, BoldSC, } from "../styled-components-css/styles-seller-store-settings/styles.settingsSeller";
import {
  DivBoxRowModalContSC,
} from "../styled-components-css/styles.modal";
const MailModal = () => {
    const { mail, setMail} = useContext(AppContext);
    return (
        <>
          <BlockModal isOpen={mail} contentLabel="Modal">
           <DivWrapModal>
            <DivContentWrapModal>
           <H1ContentInfoSC>Address change</H1ContentInfoSC>
           <PContentInfoSC>We have sent you an email to <BoldSC>lisaraklova@gmail.com.</BoldSC> Follow the link in it to start the procedure.</PContentInfoSC>
          
               <ButtonContinueModal onClick={() => setMail(false)}>Continue</ButtonContinueModal>
          
           </DivContentWrapModal>
           </DivWrapModal>
          </BlockModal>
        </>
      );
    };
    
    export default MailModal;
    