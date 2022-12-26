import React, { useEffect, useState } from 'react';
import useAxiosFunction from '../hooks/useAxiosFunction';
import axios from '../apis/admin-rest';

import {
  SpanPersonalDataSC,
  DivBoxPersonalDataSC,
  DivPersonalDataSC,
  DivBoxBlockSC,
  DivBoxContentSC,
  DivEllipseSC,
  SpanInitialsSC,
  SpanConfirmAccountSC,
  ButtonAddCardSC,
  SpanTitleDataSC,
  SpanTextDataSC,
  DivAddEllipseSC,
  SpanTextAddCardSC,
  DivBoxUserDataSC,
  ButtonAddCardSClitl,
  SpanTextAddCardLittleSC,
} from '../styled-components-css/styles.personal-data';

import Modals from '../components/ModalRedact';
import ModalrRedact from '../components/ModalRedact';
import AppContext from '../context/AppContext';


const PersonalData = () => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [user, setUser] = useState([]);
    useEffect(() => {
      axios
      .get('https://geoeco-t7js76po3a-uc.a.run.app/api/v1/users/me')
        .then((res) => {
          setUser(res.data.data.data);
          console.log("user",res);
        })}
        ,[]);



  const openCarts = () => {
    setOpenRedact(true);
  };
  const { openRedact, setOpenRedact } = React.useContext(AppContext);


  return (
    <DivBoxPersonalDataSC>
      <DivPersonalDataSC>
        <SpanPersonalDataSC>Personal details</SpanPersonalDataSC>
        <DivBoxBlockSC>
          <DivBoxContentSC>
            <DivEllipseSC />

            <ul>
              <li>
                <SpanInitialsSC>
                {user.firstName}
                Full Name
                  <img src="/default-images/pencil.svg" className="image_plus" to="#" onClick={openCarts} />{' '}
                </SpanInitialsSC>
              </li>
              <li>
                <SpanConfirmAccountSC>Verify account</SpanConfirmAccountSC>
              </li>
            </ul>
          </DivBoxContentSC>
          <DivBoxUserDataSC>
            <ul>
              <li>
                <SpanTitleDataSC>E-mail</SpanTitleDataSC>
              </li>
              <li>
                <SpanTitleDataSC>
                  <SpanTextDataSC>name@mail.ru</SpanTextDataSC>
                </SpanTitleDataSC>
              </li>
            </ul>

            <ul>
              <li>
                <SpanTitleDataSC>Phone</SpanTitleDataSC>
              </li>
              <li>
                <SpanTitleDataSC>
                  <SpanTextDataSC>+7 (800) 555-35-335 </SpanTextDataSC>
                </SpanTitleDataSC>
              </li>
            </ul>
          </DivBoxUserDataSC>
        </DivBoxBlockSC>

        <DivBoxBlockSC>
          <SpanInitialsSC>Bank cards</SpanInitialsSC>
          <ButtonAddCardSClitl to="/map-binding">
            <img src="/default-images/card.svg" className="image_cadr" />

            <SpanConfirmAccountSC>
              <SpanTextAddCardLittleSC>Add a new card</SpanTextAddCardLittleSC>
            </SpanConfirmAccountSC>
          </ButtonAddCardSClitl>
          <ButtonAddCardSC to="/map-binding">
            <DivAddEllipseSC>
              <img src="/default-images/plus.svg" className="image_plus" />
            </DivAddEllipseSC>
            <SpanConfirmAccountSC>
              <SpanTextAddCardSC>Add a card</SpanTextAddCardSC>
            </SpanConfirmAccountSC>
          </ButtonAddCardSC>
        </DivBoxBlockSC>
      </DivPersonalDataSC>
      <ModalrRedact />
    </DivBoxPersonalDataSC>
  );

};
export default PersonalData;
