import React from 'react';
import axios from '../apis/admin-rest';
import {
  DivMapBindingBoxSC,
  DivTextSC,
  DivButtonsSC,
  DivBox2ButtonsSC,
  DivContentMapBindingSC,
  DivBoxNumCardSC,
  DivBoxMMSC,
  DivBoxGGSC,
  DivBoxCVVCVCSC,
  DivSlashSC,
  DivImgBoxSC,
  DivContainerRowsMB,
  DivRowBoxSC,
  DivColumnsBoxSC,
  DivColumnMMBoxSC,
  DivColumnSlashBoxSC,
  DivColumnGGBoxSC,
  DivColumnCVVCVCBoxSC,
  DivBoxButtonLinkSC,
} from '../styled-components-css/styles.map-binding';
import TextField from '../components/TextField';
import { ButtonCustomWhiteSC } from '../styled-components-css/styles.custom-button-white';
import { Formik, Form } from 'formik';
import useAxiosFunction from '../hooks/useAxiosFunction';
import { BreadCrumbs } from '../components/BreadCrumbs';

const MapBinding = () => {
  const [axiosFetch] = useAxiosFunction();
  const startingValues = {
    cardNumber: '',
    month: '',
    year: '',
    text: '',
  };

  return (
    <DivMapBindingBoxSC>
      <BreadCrumbs />
      <DivContentMapBindingSC>
        <DivTextSC>Card linking</DivTextSC>
        <Formik
          initialValues={startingValues}
          //initialErrors={startingValues}
          onSubmit={(values) => {
            axiosFetch({
              axiosInstance: axios,
              method: 'POST',
              //url: `/api/v1/users/login`,
              requestConfig: { ...values },
            });
          }}
        >
          {(formik) => (
            <Form>
              <DivImgBoxSC>
                <DivContainerRowsMB>
                  <DivRowBoxSC>
                    <DivBoxNumCardSC>
                      <TextField
                        label="123"
                        format="/(\d{1,4})(\d{1,6})?(\d{1,5})?/"
                        startPattern="/^3[47]/"
                        type="amex"
                        name="cardnumber"
                        fullSize={false}
                        placeholder={'Сard number'}
                      />
                    </DivBoxNumCardSC>
                  </DivRowBoxSC>
                  <DivColumnsBoxSC>
                    <DivColumnMMBoxSC>
                      <DivBoxMMSC>
                        <TextField label="123" type="text" name="month" fullSize={false} placeholder={'MM'} />
                      </DivBoxMMSC>
                    </DivColumnMMBoxSC>
                    <DivColumnSlashBoxSC>
                      <DivSlashSC>/</DivSlashSC>
                    </DivColumnSlashBoxSC>
                    <DivColumnGGBoxSC>
                      <DivBoxGGSC>
                        <TextField label="123" type="text" name="year" fullSize={false} placeholder={'YY'} />
                      </DivBoxGGSC>
                    </DivColumnGGBoxSC>
                    <DivColumnCVVCVCBoxSC>
                      <DivBoxCVVCVCSC>
                        <TextField label="123" type="password" name="text" fullSize={false} placeholder={'CVV/CVC'} />
                      </DivBoxCVVCVCSC>
                    </DivColumnCVVCVCBoxSC>
                  </DivColumnsBoxSC>
                </DivContainerRowsMB>
              </DivImgBoxSC>
              <DivBox2ButtonsSC>
                <DivButtonsSC>
                  <ButtonCustomWhiteSC width={'100%'} padding={'18px 32px'} type="submit">
                    Cancel
                  </ButtonCustomWhiteSC>
                  <DivBoxButtonLinkSC
                    disabled={!formik.dirty || !formik.isValid}
                    statusOpasity={!formik.dirty || !formik.isValid}
                    width={'100%'}
                    padding={'18px 32px'}
                    type="submit"
                  >
                    Link
                  </DivBoxButtonLinkSC>
                </DivButtonsSC>
              </DivBox2ButtonsSC>
            </Form>
          )}
        </Formik>
      </DivContentMapBindingSC>
    </DivMapBindingBoxSC>
  );
};

export default MapBinding;
