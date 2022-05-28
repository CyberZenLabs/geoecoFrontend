import React, {useState, useEffect} from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import styled from "styled-components/macro";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "../apis/admin-rest";
import hostName from "../tools/HostName";
import {useCookies} from "react-cookie";
import image from "../img/backgroundwood.svg";
import image2 from "../img/wood.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faArrowRight} from "@fortawesome/free-solid-svg-icons";
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
    DivBackgroundPeopleSC
} from '../styled-components-css/styles.registration'
import {ButtonCustomSC} from "../styled-components-css/styles.custom-button";

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

    return (
        <DivRegSC>
            <DivBackgroundFormSC>
                <DivBoxBoxFormSC>
                    <DivBoxFormSC>
                        <H4Title>Добро пожаловать в EcoCraftCity!</H4Title>
                        <SpanSC>Введите свои данные для регистрации</SpanSC>
                        <DivBoxRowsSC>
                            <DivBoxColumnsSC>
                                <DivBoxSC>
                                    {/*<LabelSC htmlFor="name">Имя</LabelSC>*/}
                                    <InputSC
                                        value={firstName}
                                        onChange={onChange(getFirstName)}
                                        type="text"
                                        id={"name"}
                                        placeholder={"Имя"}
                                    />
                                </DivBoxSC>
                                <DivBoxSC>
                                    {/*<LabelSC htmlFor="lastName">Фамилия</LabelSC>*/}
                                    <InputSC
                                        value={lastName}
                                        onChange={onChange(getLastName)}
                                        type="text"
                                        id={"lastName"}
                                        placeholder={"Фамилия"}
                                    />
                                </DivBoxSC>
                            </DivBoxColumnsSC>
                            <DivBoxRowSC>
                                {/*<LabelSC htmlFor="email">Электронная почта</LabelSC>*/}
                                <InputFullWidthSC
                                    value={email}
                                    type="text"
                                    onChange={onChange(getEmail)}
                                    id={"email"}
                                    placeholder={"Электронная почта"}
                                />
                            </DivBoxRowSC>
                            <DivBoxColumnsSC>
                                <DivBoxSC>
                                    {/*<LabelSC htmlFor="pass">Пароль</LabelSC>*/}
                                    <InputSC
                                        value={password}
                                        type="password"
                                        onChange={onChange(getPassword)}
                                        id={"pass"}
                                        placeholder={"Пароль"}
                                    />
                                </DivBoxSC>
                                <DivBoxSC>
                                    {/*<LabelSC htmlFor="confirmedPass">Подтвердить пароль</LabelSC>*/}
                                    <InputSC
                                        value={confirmPass}
                                        onChange={onChange(getConfirmPass)}
                                        type="password"
                                        id={"confirmedPass"}
                                        placeholder={"Подтвердить пароль"}
                                    />
                                </DivBoxSC>
                            </DivBoxColumnsSC>
                            <DivBoxRowSC>
                                <ButtonCustomSC
                                    onClick={handleSubmit}
                                    disabled={
                                        firstName === "" ||
                                        lastName === "" ||
                                        confirmPass === "" ||
                                        email === "" ||
                                        password === ""
                                    }
                                    statusOpasity={
                                        firstName === "" ||
                                        lastName === "" ||
                                        confirmPass === "" ||
                                        email === "" ||
                                        password === "" ||
                                        confirmPass !== password
                                    }
                                    width={'514px'}
                                    padding={'18px 32px'}
                                    primary
                                >
                                    продолжить&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </ButtonCustomSC>
                                {/*<ButtonSC*/}
                                {/*    onClick={handleSubmit}*/}
                                {/*    disabled={*/}
                                {/*        firstName === "" ||*/}
                                {/*        lastName === "" ||*/}
                                {/*        confirmPass === "" ||*/}
                                {/*        email === "" ||*/}
                                {/*        password === ""*/}
                                {/*    }*/}
                                {/*    statusOpasity={*/}
                                {/*        firstName === "" ||*/}
                                {/*        lastName === "" ||*/}
                                {/*        confirmPass === "" ||*/}
                                {/*        email === "" ||*/}
                                {/*        password === "" ||*/}
                                {/*        confirmPass !== password*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    продолжить&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>*/}
                                {/*</ButtonSC>*/}
                            </DivBoxRowSC>
                            <DivBoxRowSC>
                                <DivBoxTextSC>
                                    <SpanQuSC>Уже имеете аккаунт? </SpanQuSC>
                                    <LinkSC href="">
                                        Войти
                                    </LinkSC>
                                </DivBoxTextSC>
                            </DivBoxRowSC>
                        </DivBoxRowsSC>
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
                                sx={{width: "100%"}}
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
                    <DivBackgroundPeopleSC></DivBackgroundPeopleSC>
                </DivBoxBoxFormSC>
            </DivBackgroundFormSC>
        </DivRegSC>
    );
};

export default Registration;