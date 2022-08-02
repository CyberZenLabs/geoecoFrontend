import React, { useState, useEffect } from 'react';
import useAxiosFunction from '../hooks/useAxiosFunction';
import axios from '../apis/admin-rest';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  H4Title,
  LabelSC,
  DivBoxSC,
  DivBoxRowsSC,
  DivBoxColumnsSC,
  InputSC,
  DivBoxRowSC,
  InputFullWidthSC,
  ButtonSC,
  DivBoxTextSC,
  SpanQuSC,
  LinkSC,
  DivBoxFormSC,
  DivBoxBoxFormSC,
  DivBackgroundFormSC,
  SpanSC,
  DivRegSC,
  DivBackgroundPeopleSC,
} from '../styled-components-css/styles.registration';
import { ButtonCustomSC } from '../styled-components-css/styles.custom-button';
import { registerSchema } from '../validations/validation.signup';
import { Formik, Form } from 'formik';
import TextField from '../components/TextField';
import { toast } from 'react-toastify';
import { FlowerLoaderSc } from '../styled-components-css/styles.loader';
import { useNavigate } from 'react-router';
// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });


const Registration = (props) => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: ''
  });

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  let navigate = useNavigate();
  useEffect(() => {
    if (response.length === 0) {
      if (error) {
        if (error.message.includes('401')) {
          showToast('error', 'Не Верный Данные');
        } else {
          showToast('error', error);
        }
      }
    } else {
      console.log('>>>>>>>>>', response.token);
      showToast('success', 'Вы успешно зарегистрировались');
      setCookie('token', response.token);
      setOpen(true);
      navigate('/');
    }
  }, [response, error]);

  const showToast = (type, text) => {
    if (type === 'error') {
      toast.error(text ? text : error, {
        toastId: 'error',
      });
    } else if (type === 'success') {
      toast.success(text ? text : response, {
        toastId: 'success',
      });
    }
  };

  const onChange = (e) => {

  }

  const startingValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };
  return (
    <DivRegSC>
      <DivBackgroundFormSC>
        <DivBoxBoxFormSC>
          <DivBoxFormSC>
            <H4Title>Добро пожаловать в geoeco!</H4Title>
            <SpanSC>Введите свои данные для регистрации</SpanSC>
            <Formik
              initialValues={startingValues}
              validationSchema={registerSchema}
              initialErrors={startingValues}
              onSubmit={(values) => {
                console.log(values)
                axiosFetch({
                  axiosInstance: axios,
                  auth: 'login',
                  method: 'POST',
                  url: `/api/v1/users/signup`,
                  requestConfig: { ...values },
                });
              }}
            >
              {(formik) => (
                <Form>
                  <DivBoxRowsSC>
                    <DivBoxColumnsSC>
                      <DivBoxSC>
                        {/*<LabelSC htmlFor="name">Имя</LabelSC>*/}
                        <TextField
                          label="firstName"
                          type="text"
                          name="firstName"
                          fullSize={false}
                          placeholder={'Имя'}
                          onChange={onChange}
                        />
                      </DivBoxSC>
                      <DivBoxSC>
                        {/*<LabelSC htmlFor="lastName">Фамилия</LabelSC>*/}
                        <TextField
                          label="lastName"
                          type="text"
                          name="lastName"
                          fullsize={false}
                          placeholder={'Фамилия'}
                          onChange={onChange}
                        />
                      </DivBoxSC>
                    </DivBoxColumnsSC>
                    <DivBoxRowSC marginBottom={true}>
                      {/*<LabelSC htmlFor="email">Электронная почта</LabelSC>*/}
                      <TextField
                        label="email"
                        type="email"
                        name="email"
                        fullsize={true}
                        placeholder={'Электронная почта'}
                      />
                    </DivBoxRowSC>
                    <DivBoxColumnsSC>
                      <DivBoxSC>
                        {/*<LabelSC htmlFor="pass">Пароль</LabelSC>*/}
                        <TextField
                          label="password"
                          type="password"
                          name="password"
                          fullsize={false}
                          placeholder={'Пароль'}
                        />
                      </DivBoxSC>
                      <DivBoxSC>
                        {/*<LabelSC htmlFor="confirmedPass">Подтвердить пароль</LabelSC>*/}
                        <TextField
                          label="passwordConfirm"
                          type="password"
                          name="passwordConfirm"
                          fullsize={false}
                          placeholder={'Подтвердить пароль'}
                        />
                      </DivBoxSC>
                    </DivBoxColumnsSC>
                    <DivBoxRowSC>
                      <ButtonCustomSC
                        disabled={!formik.dirty || !formik.isValid}
                        statusOpasity={!formik.dirty || !formik.isValid}
                        width={'100%'}
                        padding={'18px 32px'}
                        type="submit"
                      >
                        {!loading ? (
                          <span>
                            Продолжить&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                          </span>
                        ) : (
                          <FlowerLoaderSc />
                        )}
                      </ButtonCustomSC>
                    </DivBoxRowSC>
                    <DivBoxRowSC>
                      <DivBoxTextSC>
                        <SpanQuSC>Уже имеете аккаунт? </SpanQuSC>
                        <LinkSC to="/signin">Войти</LinkSC>
                      </DivBoxTextSC>
                    </DivBoxRowSC>
                  </DivBoxRowsSC>
                </Form>
              )}
            </Formik>

            {/* <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Данные сохранились успешно
              </Alert>
            </Snackbar>
            <Snackbar
              open={openError}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Alert onClose={handleClose} severity="error">
                {error}
              </Alert>
            </Snackbar> */}
          </DivBoxFormSC>
          <img src="/default-images/Иллюстрация.svg" className="image4registration" />
        </DivBoxBoxFormSC>
      </DivBackgroundFormSC>
    </DivRegSC>
  );
};

export default Registration;
