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
import { signInSchema } from "../validations/validation.signin";
import { Formik, Form } from "formik";
import TextField from "../components/TextField";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignIn = (props) => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [email, getEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let formData = {
      email,
      password,
    };

    console.log(formData);

    const signInResult = await signInSchema
      .validate(formData, { abortEarly: false })
      .catch((err) => {
        console.log(err);
      });

    if (isValid) {
      axiosFetch({
        axiosInstance: axios,
        method: "POST",
        url: `/api/v1/users/signup`,
        requestConfig: { ...formData },
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenError(false);
  };

  const startingValues = { email: "", password: "" }

  return (
    <DivRegSC>
      <DivBackgroundFormSC>
        <DivBoxBoxFormSC>
          <DivBoxFormSC>
            <H4Title>Войти в аккаунт!</H4Title>
            <SpanSC>Введите свои данные для входа</SpanSC>
            <Formik
              initialValues={startingValues}
              validationSchema={signInSchema}
              initialErrors={startingValues}
            >
              {(formik) => (
                <Form>
                  {console.log(formik)}
                  <DivBoxRowsSC>
                    <DivBoxRowSC>
                      {/*<LabelSC htmlFor="email">Электронная почта</LabelSC>*/}
                      <TextField
                        label="email"
                        type="email"
                        name="email"
                        fullSize={true}
                        placeholder={"Электронная почта"}
                      />
                    </DivBoxRowSC>
                
                      <DivBoxRowSC>
                        {/*<LabelSC htmlFor="pass">Пароль</LabelSC>*/}
                        <TextField
                          label="password"
                          name="password"
                          type="password"
                          fullSize={true}
                          placeholder={"Пароль"}
                        />

                       
                      </DivBoxRowSC>
                  
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
                        <SpanQuSC>Нет Аккаунта? </SpanQuSC>
                        <LinkSC to="/registration">Регистрироватся</LinkSC>
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
            src="/default-images/signin.svg"
            className="image4signin"
          />
        </DivBoxBoxFormSC>
      </DivBackgroundFormSC>
    </DivRegSC>
  );
};

export default SignIn;
