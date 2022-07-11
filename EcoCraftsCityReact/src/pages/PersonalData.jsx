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
  DivAddCardSClitl

} from "../styled-components-css/styles.personal-data1";

const PersonalData = () => {
    return (
      <DivBoxPersonalDataSC>
        <DivPersonalDataSC>
        <SpanPersonalDataSC>Личные данные</SpanPersonalDataSC>
        <DivBoxBlockSC>

        <DivBoxContentSC>
        <DivEllipseSC/>
        <ul>
          <li>
          <SpanInitialsSC>Фамилия Имя Отчество         <img src="/default-images/pencil.svg" className="image_plus" /> </SpanInitialsSC>
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
                <SpanTitleDataSC><SpanTextDataSC>name@mail.ru         <img src="/default-images/pencil.svg" className="image_plus" />
</SpanTextDataSC></SpanTitleDataSC>
                </li>
              </ul>
 
              <ul>
                <li>
                <SpanTitleDataSC>Телефон</SpanTitleDataSC>
                </li>
                <li>
                <SpanTitleDataSC><SpanTextDataSC>+7 (800) 555-35-335 <img src="/default-images/pencil.svg" className="image_plus" /></SpanTextDataSC></SpanTitleDataSC>
                </li>
              </ul>
         
        

        </DivBoxUserDataSC>
        
        </DivBoxBlockSC>
          
        <DivBoxBlockSC>
        <SpanInitialsSC>Банковские карты</SpanInitialsSC>
        <DivAddCardSClitl>
      
        <img src="/default-images/card.svg" className="image_cadr"  />
      
        <SpanConfirmAccountSC>
<SpanTextAddCardSC>Добавить карту</SpanTextAddCardSC></SpanConfirmAccountSC>
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
      </DivBoxPersonalDataSC>
      
    )
  }
  export default PersonalData;
  
 