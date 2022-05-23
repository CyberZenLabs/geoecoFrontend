import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import image from '../img/logo.svg'
import styled from "styled-components/macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <DivBoxHeaderSC>
            <DivHeaderSC>
                <DivBoxLogoSC>


                </DivBoxLogoSC>

                <DivCatalogAndSearchBoxSC>
                    <DivTextBoxSC>
                        <SpanFirstSC to="/">
                            Продавайте на EcoCraftCity
                        </SpanFirstSC>
                        <SpanSecondSC to="/">
                            Работа в EcoCraftCity
                        </SpanSecondSC>
                    </DivTextBoxSC>
                    <DivBoxButtonAndInputSC>
                        <ButtonSC
                            // onClick={handleSubmit}
                            // disabled={
                            //     firstName === "" ||
                            //     lastName === "" ||
                            //     confirmPass === "" ||
                            //     email === "" ||
                            //     password === ""
                            // }
                            // statusOpasity={
                            //     firstName === "" ||
                            //     lastName === "" ||
                            //     confirmPass === "" ||
                            //     email === "" ||
                            //     password === "" ||
                            //     confirmPass !== password
                            // }
                        >
                            <BoxContentButton>
                                <UilListUl
                                    size="40"
                                    // color="#61DAFB"
                                />
                                {/*&nbsp;&nbsp;*/}
                                <span>
                                    Каталог
                                </span>

                            </BoxContentButton>

                            {/*<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>&nbsp;&nbsp;Каталог*/}
                        </ButtonSC>
                        <DivInputBoxCS>
                            <InputSC
                                // value={lastName}
                                // onChange={onChange(getLastName)}
                                type="text"
                                id={"search"}
                                placeholder={"Я ищу..."}
                            />
                            <DivIconBoxInput>
                                <UilSearch
                                    size="25"
                                    color="rgba(37, 37, 37, 0.7)"
                                />
                            </DivIconBoxInput>
                        </DivInputBoxCS>

                    </DivBoxButtonAndInputSC>

                </DivCatalogAndSearchBoxSC>
                <DivBoxIconHeaderSC>

                    <DivBoxIconSC>
                        <LinkIconSC to="/">
                            <DivBoxIconEndSC>
                                <UilUser
                                    size="35"
                                    color="rgba(37, 37, 37, 0.8)"
                                />
                            </DivBoxIconEndSC>

                            <SpanEndHeaderSC>
                                Войти
                            </SpanEndHeaderSC>
                        </LinkIconSC>
                        <LinkIconSC to="/">
                            <DivBoxIconEndSC>
                                <UilShoppingCart
                                    size="35"
                                    color="rgba(37, 37, 37, 0.8)"
                                />
                            </DivBoxIconEndSC>

                            <SpanEndHeaderSC>
                                Корзина
                            </SpanEndHeaderSC>
                        </LinkIconSC>
                    </DivBoxIconSC>
                </DivBoxIconHeaderSC>
            </DivHeaderSC>
        </DivBoxHeaderSC>
    );
};

const DivBoxLogoSC = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  height: 116px;
  width: 139px;
  background-size: 100px;
  display: grid;
  align-items: end;
`;

const DivBoxHeaderSC = styled.div`
    width: 100%;
  height: 119px;
  display: grid;
  justify-items: center;
  margin-top: 10px;
`;

const DivHeaderSC = styled.div`
    max-width: 1420px;
  width: inherit;
  height: 100%;

  padding: 0 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 139px auto 300px;
`;

const DivCatalogAndSearchBoxSC = styled.div`
    display: grid;
  grid-template-rows: 31px 88px;
`;

const SpanFirstSC = styled(Link)`
    display: inline-block;
    //margin-right: 30px;
  font-size: 12px;
  font-family: var(--root-font-family);
  border-radius: 50px;
  background: rgba(93, 162, 113, 0.25);
  width: fit-content;
  padding: 3px 5px;
  text-decoration: none;
  color: var(--color-black)
`;

const SpanSecondSC = styled(Link)`
    display: inline-block;
  font-size: 12px;
  font-family: var(--root-font-family);
  border-radius: 50px;
  background: rgba(133, 203, 51, 0.25);
  width: fit-content;
  padding: 3px 5px;
  text-decoration: none;
  color: var(--color-black)
`;

const DivTextBoxSC = styled.div`
    display: grid;
  grid-template-columns: 210px 200px auto;
  align-items: start;
`;

const DivBoxButtonAndInputSC = styled.div`
    display: grid;
  grid-template-columns: 200px auto;
`;

const DivBoxIconHeaderSC = styled.div`
    display: grid;
  justify-items: center;
`;

const DivBoxIconSC = styled.div`
    display: grid;
  grid-template-columns: 50% 50%;
  width: 200px;
`

const ButtonSC = styled.button`
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
  padding: 8px 32px;

  //position: absolute;
  width: 176px;
  height: 56px;
  left: calc(50% - 514px / 2);
  top: calc(50% - 56px / 2 + 213px);

  background: var(--green-color);
  border-radius: 20px;
  border: none;
  color: var(--white-color);
  //margin-top: 20px;
  text-transform: capitalize;
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  cursor: pointer;
  // opacity: ${(p) => (p.statusOpasity ? 0.5 : 1)};
`;

const BoxContentButton = styled.div`
    display: grid;
    grid-template-columns: 40px auto;
  align-items: center;
`

const InputSC = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0px 18px 18px;

  //position: absolute;
  width: auto;
  height: 56px;
  left: 0px;
  top: calc(50% - 56px / 2 - 140px);

  border: 2px solid var(--main-color);
  box-sizing: border-box;
  border-radius: 20px;
  ::placeholder {
    font-size: var(--font-size-icon-text);
  }
`;

const DivInputBoxCS = styled.div`
  display: grid;
    width: auto;
  position: relative;
`;

const DivIconBoxInput = styled.div`
    position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

const LinkIconSC = styled(Link)`
    //display: inline-block;
  font-size: 12px;
  font-family: var(--root-font-family);
  border-radius: 50px;
  //background: rgba(133, 203, 51, 0.25);
  width: fit-content;
  padding: 3px 5px;
  text-decoration: none;
  color: var(--color-black);
  display: grid;
  grid-template-rows: 50% 50%;
  
`;

const DivBoxIconEndSC = styled.div`
    display: grid;
  align-items: end;
  justify-items: center;
`;

const SpanEndHeaderSC = styled.span`
    display: grid;
  align-items: start;
  color: rgba(37, 37, 37, 0.8);
  font-size: var(--font-size-icon-text);
`

export default ResponsiveAppBar;