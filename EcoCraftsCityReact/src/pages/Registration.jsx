import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import styled from "styled-components/macro";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "../apis/admin-rest";
import hostName from "../tools/HostName";
import { useCookies } from "react-cookie";
import image from "../img/backgroundwood.svg";
import image2 from "../img/wood.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
} from "../styled-components-css/styles.registration";
import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";
import { registerSchema } from "../validations/validation.signup";
import { Formik, Form } from "formik";
import TextField from "../components/TextField";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Registration = (props) => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const [firstName, getFirstName] = useState("");
  const [lastName, getLastName] = useState("");
  const [confirmPass, getConfirmPass] = useState("");
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (response.length === 0) {
      if (error !== "") {
        setOpenError(true);
      }
    } else {
      console.log(">>>>>>>>>", response.token);
      setCookie("token", response.token);
      setOpen(true);
    }
  }, [response, error]);

  const onChange = (callback) => (e) => {
    callback(e.target.value);
  };

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "POST",
      url: `/api/v1/users/signup`,
      requestConfig: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirm: confirmPass,
      },
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenError(false);
  };

  const startingValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  return (
    <DivRegSC>
      <DivBackgroundFormSC>
        <DivBoxBoxFormSC>
          <DivBoxFormSC>
            <H4Title>Добро пожаловать в EcoCraftCity!</H4Title>
            <SpanSC>Введите свои данные для регистрации</SpanSC>
            <Formik
              initialValues={startingValues}
              validationSchema={registerSchema}
              initialErrors={startingValues}
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
                          placeholder={"Имя"}
                        />
                      </DivBoxSC>
                      <DivBoxSC>
                        {/*<LabelSC htmlFor="lastName">Фамилия</LabelSC>*/}
                        <TextField
                          label="lastName"
                          type="text"
                          name="lastName"
                          fullsize={false}
                          placeholder={"Фамилия"}
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
                        placeholder={"Электронная почта"}
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
                          placeholder={"Пароль"}
                        />
                      </DivBoxSC>
                      <DivBoxSC>
                        {/*<LabelSC htmlFor="confirmedPass">Подтвердить пароль</LabelSC>*/}
                        <TextField
                          label="passwordConfirm"
                          type="password"
                          name="passwordConfirm"
                          fullsize={false}
                          placeholder={"Подтвердить пароль"}
                        />
                      </DivBoxSC>
                    </DivBoxColumnsSC>
                    <DivBoxRowSC>
                      <ButtonCustomSC
                       onClick={handleSubmit}
                       disabled={!formik.dirty || !formik.isValid}
                       statusOpasity={!formik.dirty || !formik.isValid}
                       width={"100%"}
                       padding={"18px 32px"}
                      >
                        продолжить&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
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
            </Snackbar>
          </DivBoxFormSC>
          <img
            src="/default-images/Иллюстрация.svg"
            className="image4registration"
          />
        </DivBoxBoxFormSC>
      </DivBackgroundFormSC>
    </DivRegSC>
  );
};

export default Registration;
