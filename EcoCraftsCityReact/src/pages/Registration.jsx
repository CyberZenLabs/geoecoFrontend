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
                    showToast('error', 'Не верные данные');
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

    const onChange = (status, e) => {



        const regexp = /[A-zА-я]/g
        const regexp2 = /[\[\]\)\(\{\}\\']+/g

        let _values = values

        let arrayCherecters = e.target.value.replace(regexp2,'').match(regexp)
        values[status] = arrayCherecters.join('')
        setValues({..._values})
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
                        <H4Title>Welcome to geoeco!</H4Title>
                        <SpanSC>Enter your information to sign up</SpanSC>
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
                                                {/*<LabelSC htmlFor="name">Name</LabelSC>*/}
                                                <TextField
                                                    label="firstName"
                                                    type="text"
                                                    name="firstName"
                                                    fullSize={false}
                                                    placeholder={'Name'}
                                                    // onChange={onChange}
                                                    // values={values}
                                                />
                                            </DivBoxSC>
                                            <DivBoxSC>
                                                {/*<LabelSC htmlFor="lastName">Surname</LabelSC>*/}
                                                <TextField
                                                    label="lastName"
                                                    type="text"
                                                    name="lastName"
                                                    fullsize={false}
                                                    placeholder={'Surname'}
                                                    // onChange={onChange}
                                                    // values={values}
                                                />
                                            </DivBoxSC>
                                        </DivBoxColumnsSC>
                                        <DivBoxRowSC marginBottom={true}>
                                            {/*<LabelSC htmlFor="email">Email</LabelSC>*/}
                                            <TextField
                                                label="email"
                                                type="email"
                                                name="email"
                                                fullsize={true}
                                                placeholder={'Email'}
                                            />
                                        </DivBoxRowSC>
                                        <DivBoxColumnsSC>
                                            <DivBoxSC>
                                                {/*<LabelSC htmlFor="pass">Password</LabelSC>*/}
                                                <TextField
                                                    label="password"
                                                    type="password"
                                                    name="password"
                                                    fullsize={false}
                                                    placeholder={'Password'}
                                                />
                                            </DivBoxSC>
                                            <DivBoxSC>
                                                {/*<LabelSC htmlFor="confirmedPass">Confirm password</LabelSC>*/}
                                                <TextField
                                                    label="passwordConfirm"
                                                    type="password"
                                                    name="passwordConfirm"
                                                    fullsize={false}
                                                    placeholder={'Confirm password'}
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
                            Continue&nbsp;&nbsp;
                                                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                          </span>
                                                ) : (
                                                    <FlowerLoaderSc />
                                                )}
                                            </ButtonCustomSC>
                                        </DivBoxRowSC>
                                        <DivBoxRowSC>
                                            <DivBoxTextSC>
                                                <SpanQuSC>Already have an account? </SpanQuSC>
                                                <LinkSC to="/signin">Sign in</LinkSC>
                                            </DivBoxTextSC>
                                        </DivBoxRowSC>
                                    </DivBoxRowsSC>
                                </Form>
                            )}
                        </Formik>

                        {/* <DivBoxRowModalSC>
                   <StoreCreationTitleSC>Sign up</StoreCreationTitleSC>
             
                <PasswordFieldSC
                  label="repeat_password"
                  type="password"
                  name={repeat_password}
                  fullSize={true}
                  placeholder={repeat_password}
                />
                
              </DivBoxRowModalSC>
               <Snackbar
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