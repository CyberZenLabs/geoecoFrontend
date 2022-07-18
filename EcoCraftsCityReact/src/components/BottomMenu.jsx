import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import UilListUl from "@iconscout/react-unicons/icons/uil-list-ul";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";
import UilShoppingCart from "@iconscout/react-unicons/icons/uil-shopping-cart";
import {
  BoxBottomMenuSC,
  ContentBottomMenuSC,
  DivImgSC,
  TitleElementSC,
  BottomMenuLinkSC,
} from "../styled-components-css/styles.bottom-menu";

const BottomMenu = () => {
  return (
    <BoxBottomMenuSC>
      <BottomMenuLinkSC to="/">
        <ContentBottomMenuSC>
          <DivImgSC>
            <BiHomeAlt size="2rem" />
          </DivImgSC>
          <TitleElementSC>Главная</TitleElementSC>
        </ContentBottomMenuSC>
      </BottomMenuLinkSC>

      <BottomMenuLinkSC to="/">
        <ContentBottomMenuSC>
          <DivImgSC>
            <UilListUl size="2rem" />
          </DivImgSC>
          <TitleElementSC>Каталог</TitleElementSC>
        </ContentBottomMenuSC>
      </BottomMenuLinkSC>

      <BottomMenuLinkSC to="/">
        <ContentBottomMenuSC>
          <DivImgSC>
            <UilShoppingCart size="2rem" />
          </DivImgSC>
          <TitleElementSC>Корзина</TitleElementSC>
        </ContentBottomMenuSC>
      </BottomMenuLinkSC>

      <BottomMenuLinkSC to="/">
        <ContentBottomMenuSC>
          <DivImgSC>
            <UilSearch size="2rem" />
          </DivImgSC>
          <TitleElementSC>Поиск</TitleElementSC>
        </ContentBottomMenuSC>
      </BottomMenuLinkSC>
    </BoxBottomMenuSC>
  );
};

export default BottomMenu;
