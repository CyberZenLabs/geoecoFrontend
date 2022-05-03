import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {Style} from "@mui/icons-material";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "../apis/admin-rest";
import hostName from "../tools/HostName";
// const axios = require("axios");

const useStyles = makeStyles((theme) => ({
    root: {
        // paddingTop: '20px',
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

const Registration = (props) => {
    const [response, error, loading, axiosFetch] = useAxiosFunction();

    const classes = useStyles();
    const [firstName, getFirstName] = useState("");
    const [lastName, getLastName] = useState("");
    const [confirmPass, getConfirmPass] = useState("");
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");

    const onChange = (callback) => (e) => {
        callback(e.target.value)
    };

    const handleSubmit = () => {
        axiosFetch({
            axiosInstance: axios,
            method: "POST",
            url: `/api/v1/users/signup`,
            requestConfig: {
                data: JSON.stringify(
                    {
                        firstName: "Kirdфыцйцвсфмz",
                        lastName: "Kadcфйцывсфымdad",
                        email: "kirdroasdфыыйфывмфсcv7z@gmail.com",
                        password: "asdfasdf",
                        passwordConfirm: "asdfasdf"

                    }
                )
            }
        })


    }
    console.log('>>>>>>>>>', response)
    return (
        <Container maxWidth="sm">
            <H4Title>Регистрация</H4Title>
            <DivBoxRowsSC>
                <DivBoxColumnsSC>
                    <DivBoxSC>
                        <LabelSC htmlFor="name">Имя</LabelSC>
                        <InputSC
                            value={firstName}
                            onChange={onChange(getFirstName)}
                            type="text"
                            id={'name'}
                        />
                    </DivBoxSC>
                    <DivBoxSC>
                        <LabelSC htmlFor="lastName">Фамилия</LabelSC>
                        <InputSC
                            value={lastName}
                            onChange={onChange(getLastName)}
                            type="text"
                            id={'lastName'}
                        />
                    </DivBoxSC>
                </DivBoxColumnsSC>
                <DivBoxRowSC>
                    <LabelSC htmlFor="email">Электронная почта</LabelSC>
                    <InputFullWidthSC
                        value={email}
                        type="text"
                        onChange={onChange(getEmail)}
                        id={'email'}
                    />
                </DivBoxRowSC>
                <DivBoxColumnsSC>
                    <DivBoxSC>
                        <LabelSC htmlFor="pass">Пароль</LabelSC>
                        <InputSC
                            value={password}
                            type="password"
                            onChange={onChange(getPassword)}
                            id={'pass'}
                        />
                    </DivBoxSC>
                    <DivBoxSC>
                        <LabelSC htmlFor="confirmedPass">Подтвердить пароль</LabelSC>
                        <InputSC
                            value={confirmPass}
                            onChange={onChange(getConfirmPass)}
                            type="password"
                            id={'confirmedPass'}
                        />
                    </DivBoxSC>
                </DivBoxColumnsSC>
                <DivBoxRowSC>
                    <ButtonSC onClick={handleSubmit}>
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
        </Container>
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
  font-size: 48px;
  line-height: 59px;
  /* identical to box height */

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
  grid-template-rows: 112px 112px 112px 112px 112px;
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
  margin-top: 35px;
  text-transform: capitalize;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
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

export default Registration;
