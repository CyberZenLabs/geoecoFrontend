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
                    {/*<DivBoxSocSC>*/}
                    {/*    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>*/}
                    {/*    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>*/}
                    {/*    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>*/}
                    {/*</DivBoxSocSC>*/}

                </DivBoxLogoSC>
            </DivHeaderSC>
        </DivBoxHeaderSC>
    );
};

const DivBoxLogoSC = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  height: 116px;
  width: 80px;
  background-size: 80px;
  display: grid;
  align-items: end;
`;

const DivBoxHeaderSC = styled.div`
    width: 100%;
  height: 119px;
  display: grid;
  justify-items: center;
`;

const DivHeaderSC = styled.div`
    max-width: 1420px;
  width: inherit;
  height: 100%;

  padding: 0 10px;
  box-sizing: border-box;
`

export default ResponsiveAppBar;