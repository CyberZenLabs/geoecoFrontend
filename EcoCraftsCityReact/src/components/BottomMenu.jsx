import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilUser from '@iconscout/react-unicons/icons/uil-user';

import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import {
  BoxBottomMenuSC,
  ContentBottomMenuSC,
  DivImgSC,
  TitleElementSC,
  BottomMenuLinkSC,
} from '../styled-components-css/styles.bottom-menu';

const BottomMenu = () => {
  return (
    <BoxBottomMenuSC>
      <BottomMenuLinkSC to="/home">
        <ContentBottomMenuSC>
          <DivImgSC>
            <BiHomeAlt className="Icon-Bottom-Menu" />
          </DivImgSC>
          <TitleElementSC>Home</TitleElementSC>
        </ContentBottomMenuSC>
      </BottomMenuLinkSC>

      <BottomMenuLinkSC to="/">
        <ContentBottomMenuSC>
          <DivImgSC>
            <UilListUl className="Icon-Bottom-Menu" />
          </DivImgSC>
          <TitleElementSC>Catalog</TitleElementSC>
        </ContentBottomMenuSC>
      </BottomMenuLinkSC>

      <BottomMenuLinkSC to="/cart">
        <ContentBottomMenuSC>
          <DivImgSC>
            <UilShoppingCart className="Icon-Bottom-Menu" />
          </DivImgSC>
          <TitleElementSC>Cart</TitleElementSC>
        </ContentBottomMenuSC>
      </BottomMenuLinkSC>

      <BottomMenuLinkSC to="/signin">
        <ContentBottomMenuSC>
          <DivImgSC>
            <UilUser className="Icon-Bottom-Menu" />
          </DivImgSC>
          <TitleElementSC>Profile</TitleElementSC>
        </ContentBottomMenuSC>
      </BottomMenuLinkSC>
    </BoxBottomMenuSC>
  );
};

export default BottomMenu;
