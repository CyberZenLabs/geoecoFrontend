import React from 'react'

import{
  SpanPersonalDataSC,
  DivBoxPersonalDataSC,
  DivPersonalDataSC,
  DivBoxBlockSC,
  DivBoxContentSC,

  DivEllipseSC,
  SpanInitialsSC,
  SpanConfirmAccountSC,
  DivAddCardSC,
  SpanTitleDataSC,
  SpanTextDataSC,
  DivAddEllipseSC,
  SpanTextAddCardSC,
  DivBoxUserDataSC,
  DivAddCardSClitl,
  SpanTextAddCardLittleSC

} from "../styled-components-css/styles.personal-data";

import Modals from "../components/ModalRedact";
import ModalrRedact from "../components/ModalRedact";
import AppContext from "../context/AppContext";


const PersonalData = () => {
  const openCarts = () => {
    setOpenRedact(true);
   
  };
  
  const { openRedact, setOpenRedact  } = React.useContext(AppContext);
  
  
    return (
      <DivBoxPersonalDataSC>
        <DivPersonalDataSC>
        <SpanPersonalDataSC>Личные данные</SpanPersonalDataSC>
        <DivBoxBlockSC>

        <DivBoxContentSC>
        
        <DivEllipseSC/>
       
        <ul>
          <li>
          <SpanInitialsSC>Фамилия Имя Отчество    <img src="/default-images/pencil.svg" className="image_plus"  to="#"  onClick={openCarts} />     </SpanInitialsSC>
          </li>
          <li>
          <SpanConfirmAccountSC>Подтвердить аккаунт</SpanConfirmAccountSC>
          </li>
        </ul>

        </DivBoxContentSC>
        <DivBoxUserDataSC>
        
          
              <ul>
                <li>
                <SpanTitleDataSC>E-mail</SpanTitleDataSC>
                </li>
                <li>
                <SpanTitleDataSC><SpanTextDataSC>name@mail.ru        
</SpanTextDataSC></SpanTitleDataSC>
                </li>
              </ul>
 
              <ul>
                <li>
                <SpanTitleDataSC>Телефон</SpanTitleDataSC>
                </li>
                <li>
                <SpanTitleDataSC><SpanTextDataSC>+7 (800) 555-35-335 </SpanTextDataSC></SpanTitleDataSC>
                </li>
              </ul>
         
        

        </DivBoxUserDataSC>
        
        </DivBoxBlockSC>
          
        <DivBoxBlockSC>
        <SpanInitialsSC>Банковские карты</SpanInitialsSC>
        <DivAddCardSClitl>
      
        <img src="/default-images/card.svg" className="image_cadr"  />
      
        <SpanConfirmAccountSC>
<SpanTextAddCardLittleSC>Добавить новую карту</SpanTextAddCardLittleSC></SpanConfirmAccountSC>
        </DivAddCardSClitl>
        <DivAddCardSC>
        <DivAddEllipseSC>
        <img src="/default-images/plus.svg" className="image_plus" />
        </DivAddEllipseSC>
        <SpanConfirmAccountSC>
<SpanTextAddCardSC>Добавить карту</SpanTextAddCardSC></SpanConfirmAccountSC>
        </DivAddCardSC>
        </DivBoxBlockSC>
        </DivPersonalDataSC>
      <ModalrRedact/>
      </DivBoxPersonalDataSC>
      
    )
  }
  export default PersonalData;
  
 