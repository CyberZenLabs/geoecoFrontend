import * as React from 'react';
import { Link } from "react-router-dom";
import image from '../img/logo.svg'
import styled from "styled-components/macro";
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import {
    DivBoxLogoSC,
    DivBoxHeaderSC,
    DivHeaderSC,
    DivCatalogAndSearchBoxSC,
    SpanFirstSC,
    SpanSecondSC,
    DivTextBoxSC,
    DivBoxButtonAndInputSC,
    DivBoxIconHeaderSC,
    DivBoxIconSC,
    ButtonSC,
    BoxContentButton,
    InputSC,
    DivInputBoxCS,
    DivIconBoxInput,
    LinkIconSC,
    DivBoxIconEndSC,
    SpanEndHeaderSC
} from '../styled-components-css/styles.navbar.jsx'

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
                                <span>
                                    Каталог
                                </span>

                            </BoxContentButton>

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

export default ResponsiveAppBar;