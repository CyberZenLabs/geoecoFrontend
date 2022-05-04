import React, {useState, useEffect} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components/macro";
import {Style} from "@mui/icons-material";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "../apis/admin-rest";
import hostName from "../tools/HostName";
// const axios = require("axios");
import {useCookies} from 'react-cookie';
import image from '../img/backgroundForm.svg'
import image2 from '../img/woodAndPeaples.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        // paddingTop: '20px',
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Registration = (props) => {
    const [response, error, loading, axiosFetch] = useAxiosFunction();

    const classes = useStyles();
    const [firstName, getFirstName] = useState("");
    const [lastName, getLastName] = useState("");
    const [confirmPass, getConfirmPass] = useState("");
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");
    const [open, setOpen] = useState(false)
    const [openError, setOpenError] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {

        if (response.length === 0) {
            if (error !== '') {
                setOpenError(true)
            }
        } else {
            console.log('>>>>>>>>>', response.token)
            setCookie('token', response.token)
            setOpen(true)

        }
    }, [response, error])

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
                passwordConfirm: confirmPass
            }
        })


    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setOpenError(false)
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
                                        id={'name'}
                                        placeholder={'Имя'}
                                    />
                                </DivBoxSC>
                                <DivBoxSC>
                                    {/*<LabelSC htmlFor="lastName">Фамилия</LabelSC>*/}
                                    <InputSC
                                        value={lastName}
                                        onChange={onChange(getLastName)}
                                        type="text"
                                        id={'lastName'}
                                        placeholder={'Фамилия'}
                                    />
                                </DivBoxSC>
                            </DivBoxColumnsSC>
                            <DivBoxRowSC>
                                {/*<LabelSC htmlFor="email">Электронная почта</LabelSC>*/}
                                <InputFullWidthSC
                                    value={email}
                                    type="text"
                                    onChange={onChange(getEmail)}
                                    id={'email'}
                                    placeholder={'Электронная почта'}
                                />
                            </DivBoxRowSC>
                            <DivBoxColumnsSC>
                                <DivBoxSC>
                                    {/*<LabelSC htmlFor="pass">Пароль</LabelSC>*/}
                                    <InputSC
                                        value={password}
                                        type="password"
                                        onChange={onChange(getPassword)}
                                        id={'pass'}
                                        placeholder={'Пароль'}
                                    />
                                </DivBoxSC>
                                <DivBoxSC>
                                    {/*<LabelSC htmlFor="confirmedPass">Подтвердить пароль</LabelSC>*/}
                                    <InputSC
                                        value={confirmPass}
                                        onChange={onChange(getConfirmPass)}
                                        type="password"
                                        id={'confirmedPass'}
                                        placeholder={'Подтвердить пароль'}
                                    />
                                </DivBoxSC>
                            </DivBoxColumnsSC>
                            <DivBoxRowSC>
                                <ButtonSC
                                    onClick={handleSubmit}
                                    disabled={firstName === '' || lastName === '' || confirmPass === ''
                                        || email === '' || password === ''}
                                    statusOpasity={firstName === '' || lastName === '' || confirmPass === ''
                                        || email === '' || password === '' || confirmPass !== password}
                                >
                                    дальше
                                </ButtonSC>
                            </DivBoxRowSC>
                            <DivBoxRowSC>
                                <DivBoxTextSC>
                                    <SpanQuSC>Уже имеете аккаунт? </SpanQuSC>
                                    <a href="">Войти</a>
                                </DivBoxTextSC>
                            </DivBoxRowSC>
                        </DivBoxRowsSC>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                                Данные сохранились успешно
                            </Alert>
                        </Snackbar>
                        <Snackbar
                            open={openError}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <Alert onClose={handleClose} severity="error">{error}</Alert>
                        </Snackbar>
                    </DivBoxFormSC>
                    <DivBackgroundPeopleSC>

                    </DivBackgroundPeopleSC>
                </DivBoxBoxFormSC>
            </DivBackgroundFormSC>


        </DivRegSC>
    );

};

const H4Title = styled.h4`
  //position: absolute;
  //width: 338px;
  //height: 59px;
  //left: 703px;
  //top: 212px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 59px;
  margin: 35px 0;
  /* identical to box height */
  margin-top: 16px;
  color: #252525;
  //text-align: center;
`;

const LabelSC = styled.label`
  //position: absolute;
  display: inline-block;
  width: 100%;
  height: 24px;
  left: 0px;
  top: calc(50% - 24px / 2 - 192px);

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: rgba(37, 37, 37, 0.8);
  margin-bottom: 10px;
`;

const DivBoxSC = styled.div`
  //position: absolute;
  width: 100%;
  height: 92px;
  left: 0px;
  top: 119px;
`;

const DivBoxRowsSC = styled.div`
  display: grid;
  grid-template-rows: 85px 85px 85px 85px 85px;
`;
const DivBoxColumnsSC = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const InputSC = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0px 18px 18px;

  //position: absolute;
  width: 235px;
  height: 56px;
  left: 0px;
  top: calc(50% - 56px / 2 - 140px);

  border: 2px solid rgba(37, 128, 57, 0.7);
  box-sizing: border-box;
  border-radius: 20px;
`;

const DivBoxRowSC = styled.div`
  width: 100%;
`;

const InputFullWidthSC = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0px 18px 18px;

  //position: absolute;
  width: 93%;
  height: 56px;
  left: 0px;
  top: calc(50% - 56px / 2 - 140px);

  border: 2px solid rgba(37, 128, 57, 0.7);
  box-sizing: border-box;
  border-radius: 20px;
`;

const ButtonSC = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;

  //position: absolute;
  width: 514px;
  height: 56px;
  left: calc(50% - 514px / 2);
  top: calc(50% - 56px / 2 + 213px);

  background: #258039;
  border-radius: 20px;
  border: none;
  color: #fff;
  margin-top: 20px;
  text-transform: capitalize;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  opacity: ${p => p.statusOpasity ? 0.5 : 1};
`;

const DivBoxTextSC = styled.div`
  margin-top: 35px;
`;

const SpanQuSC = styled.span`
  color: rgba(37, 37, 37, 0.7);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const LinkSC = styled.a`
  color: #258039;
`;

const DivBoxFormSC = styled.div`
  width: 552px;
  //height: 680px;
  
`

const DivBoxBoxFormSC = styled.div`
  width: 1620px;
  padding: 50px;
  background: #fff;
  border-radius: 30px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
  //height: 680px;
`

const DivBackgroundFormSC = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  justify-items: center;
  overflow: auto;
  
  //padding: 50px 0;
`

const SpanSC = styled.span`
  margin-bottom: 20px;
  display: inline-block;
`
const DivRegSC = styled.div`
  height: calc(100% - 64px);
  overflow: auto;
  background: url(${image});
  display: grid;
  align-items: center;
`

const DivBackgroundPeopleSC = styled.div`
  position: absolute;
  background: url(${image2});
  
`

export default Registration;
