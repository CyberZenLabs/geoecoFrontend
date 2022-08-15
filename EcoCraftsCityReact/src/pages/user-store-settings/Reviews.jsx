import React, { useEffect, useState } from "react";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { FaArrowLeft } from "react-icons/fa";
import StarRating from "../../components/StarRating";
import SettingsShopCatalog from "../../components/components-user-store-settings/SettingsShopCatalog";

import {
  ButtonDropDownSC,
  ButtonPageBoxSC,
  ButtonReviewPageSC,
  DivButtonBoxSC,
  DivCardReviewsBoxSC,
  DivLinkReviewRaitingSC,
  DivLinksAdaptiveSC,
  DivLinksInfoSC,
  DivModesBoxSC,
  DivModeSC,
  DivPagenationBoxSC,
  DivReviewsBoxSC,
  DivRowContentSC,
  DivShopContainerSC,
  DivShopInfoSC,
  DivStarHideSC,
  DivTextButtonBoxSC,
  DivTitleShopInfoSC,
  ImgShopInfoSC,
  LinkShopInfoSC,
  LocationShopInfoSC,
  ReviewBoxNameSC,
  ReviewContainerSC,
  TitleShopInfoSC,
  WrapShopContainerSC,
} from "../../styled-components-css/styles-user-store-settings/styles.reviews";
import axios from "axios";

import { DivWrapLinkSC } from "../../styled-components-css/styles-user-store-settings/styles.store-user";


import { ButtonCustomSC } from "../../styled-components-css/styles.custom-button";
import RatioCard from "../../components/RatioCard";
import ReviewBox from "../../components/ReviewBox";
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from "../../styled-components-css/styles.product-detail";
import { BreadCrumbs } from "../../components/BreadCrumbs";
const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  {
    path: "/custom-props",
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: "Hi" },
  },
];

const Reviews = ({ shop, index }) => {
  const [shopRaiting, setShopRaiting] = useState();
  const breadcrumbs = useReactRouterBreadcrumbs(routes);

  useEffect(() => {
    axios
      .get("https://radiant-river-29802.herokuapp.com/api/v1/products")
      .then((res) => {
        setShopRaiting(Math.round(res.data.data.data[0].ratingsAverage));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ReviewContainerSC>
      <BreadCrumbs/>


        <WrapShopContainerSC></WrapShopContainerSC>
        <DivRowContentSC>
        <SettingsShopCatalog page={2}/>

          <DivModesBoxSC>
            <DivModeSC>Рубрики</DivModeSC>
            <DivModeSC>Фильтры</DivModeSC>
          </DivModesBoxSC>
          <DivTextButtonBoxSC>
            <ReviewBoxNameSC>Отзывы</ReviewBoxNameSC>
            <DivButtonBoxSC>
              {/* <ButtonReviewPageSC to='/reviews'>О магазине</ButtonReviewPageSC>
              <ButtonReviewPageSC to='/reviews'>О товарах</ButtonReviewPageSC> */}
              <ButtonCustomSC
                width={"149px"}
                height={"40px"}
                borderRadius={"14px"}
              >
                О магазине
              </ButtonCustomSC>
              <ButtonCustomSC
                width={"149px"}
                height={"40px"}
                borderRadius={"14px"}
              >
                О товарах
              </ButtonCustomSC>
            </DivButtonBoxSC>
          </DivTextButtonBoxSC>
          <DivCardReviewsBoxSC>
            <RatioCard />
            <DivReviewsBoxSC>
              <ReviewBox />
            </DivReviewsBoxSC>
            <DivPagenationBoxSC>
              <ButtonPageBoxSC>1</ButtonPageBoxSC>
              <ButtonPageBoxSC>2</ButtonPageBoxSC>
              <ButtonPageBoxSC>3</ButtonPageBoxSC>
              <ButtonPageBoxSC>Дальше</ButtonPageBoxSC>
            </DivPagenationBoxSC>
          </DivCardReviewsBoxSC>
        </DivRowContentSC>
      </ReviewContainerSC>
    </>
  );
};

export default Reviews;
