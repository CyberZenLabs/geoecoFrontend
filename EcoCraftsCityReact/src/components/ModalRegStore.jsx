import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import useAxiosFunction from '../hooks/useAxiosFunction';
import '../page-css/select.css';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { registerModalSchema } from '../validations/validation.singupmodal';
import TextField from '../components/TextField';
import { ButtonCustomSC } from '../styled-components-css/styles.custom-button';
import { FlowerLoaderSc } from '../styled-components-css/styles.loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InpitReg from './InputReg';
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
  DivBoxRowsSC,
  DivBoxTextSC,
  SelectInputSC,
  OptionInputSC,
  DivBoxRowModaSelectlSC,
  SpanQuSC,
  LinkSC,
  DivBoxRowSC,
} from '../styled-components-css/styles.modalCreateStore';

import Modals from './ModalSendEmail';
import ModalSendEmail from './ModalSendEmail';
import App from './SelectUl';
const Modalstore = () => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const { openModal, setOpenModal, modalData } = useContext(AppContext);
  const { openEmail, setOpenEmail, disabled, setDisable } = useContext(AppContext);
  const openMod = () => {
    setOpenEmail(true);
    setOpenModal(false);

    setDisable(true);
  };

  const startingValues = {
    email: '',
    password: '',
    passwordConfirm: '',
    city: '',
  };
  return (
    <>
      <BlockModal isOpen={openModal} contentLabel="Modal">
        <DivWrapModal>
          <ButtonPrevModal onClick={() => setOpenModal(false)}>
            <IoIosArrowBackSC />
          </ButtonPrevModal>
          <CenterItemsSC>
            <Formik
              initialValues={startingValues}
              validationSchema={registerModalSchema}
              initialErrors={startingValues}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formik) => (
                <Form>
                  <DivBoxRowsSC>
                    <StoreCreationTitleSC>Sign up</StoreCreationTitleSC>
                    <DivBoxRowModalSC>
                      {/*<LabelSC htmlFor="email">Email</LabelSC>*/}
                      <InpitReg
                        label="email"
                        type="email"
                        name="email"
                        fullsize={true}
                        placeholder={'Email'}
                      />
                    </DivBoxRowModalSC>

                    <DivBoxRowModalSC>
                      {/*<LabelSC htmlFor="pass">Password</LabelSC>*/}
                      <InpitReg
                        label="password"
                        type="password"
                        name="password"
                        fullsize={false}
                        placeholder={'Password'}
                      />
                    </DivBoxRowModalSC>
                    <DivBoxRowModalSC>
                      {/*<LabelSC htmlFor="confirmedPass">Confirm password</LabelSC>*/}
                      <InpitReg
                        label="passwordConfirm"
                        type="password"
                        name="passwordConfirm"
                        fullsize={false}
                        placeholder={'Confirm password'}
                      />
                    </DivBoxRowModalSC>
                    <DivBoxRowModalSC>
                      {/*<LabelSC htmlFor="confirmedPass">Confirm password</LabelSC>*/}
                      <InpitReg
                        label="passwordConfirm"
                        type="text"
                        name="city"
                        fullsize={false}
                        placeholder={'City'}
                      />
                    </DivBoxRowModalSC>
                    <DivBoxRowModalSC>
                      <DivBoxRowModaSelectlSC>
                        <App />

                        <ButtonCustomSC
                          onClick={openMod}
                          disabled={!formik.dirty || !formik.isValid}
                          statusOpasity={!formik.dirty || !formik.isValid}
                          width={'100%'}
                          padding={'18px 32px'}
                          type="submit"
                        >
                          {!loading ? (
                            <span>
                              Continue&nbsp;&nbsp;
                              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                            </span>
                          ) : (
                            <FlowerLoaderSc />
                          )}
                        </ButtonCustomSC>
                        <DivBoxRowSC>
                          <DivBoxTextSC>
                            <SpanQuSC>Already have an account? </SpanQuSC>
                            <LinkSC to="/signin" onClick={() => setOpenModal(false)}>
                              Sign in
                            </LinkSC>
                          </DivBoxTextSC>
                        </DivBoxRowSC>
                      </DivBoxRowModaSelectlSC>
                    </DivBoxRowModalSC>
                  </DivBoxRowsSC>
                </Form>
              )}
            </Formik>
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default Modalstore;
