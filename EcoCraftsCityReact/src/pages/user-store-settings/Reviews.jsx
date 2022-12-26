import React, { useEffect, useState } from "react";

import { FaArrowLeft } from "react-icons/fa";
import StarRating from "../../components/StarRating";
import SettingsShopCatalog from "../../components/components-user-store-settings/SettingsShopCatalog";


import { 
  DivMainBlockSC,
   DivBorderBlockSC,
   DivBannerShopContainerSC,
   DivGridCatalogShopSC
  
  } from "../../styled-components-css/styles-user-store-settings/styles.store-user";
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
} from "../../styled-components-css/styles-user-store-settings/styles.reviews";
import axios from "axios";
import{
  ImgBannerShopSC,
  DivBoxContentSC,
  DivBoxCatalogShopSC,
  DivBoxCatalog,
  SpanTitleCatalog,
  DivGridItems,
  DivNextItems,
  DivNextGrid,
  DivCountPage,
  DivNextPage,
  DivButtonNext,
  SpanTitleCatalogAdaptive,
  WrapShopContainerSC,
  DivBoxNewProductsBigST
} from "../../styled-components-css/styles-user-store-settings/styles.StoreNoAuth";

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


  useEffect(() => {
    axios
      .get("https://geoeco-t7js76po3a-uc.a.run.app/api/v1/products")
      .then((res) => {
        setShopRaiting(Math.round(res.data.data.data[0].ratingsAverage));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <DivMainBlockSC>
        


      <BreadCrumbs/>
        <DivBorderBlockSC>
        <DivBannerShopContainerSC/>
        <DivGridCatalogShopSC>

        <SettingsShopCatalog page={2}/>

        
          <DivModesBoxSC>
            <DivModeSC>Categories</DivModeSC>
            <DivModeSC>Filters</DivModeSC>
          </DivModesBoxSC>
          <DivTextButtonBoxSC>
            <ReviewBoxNameSC>Reviews</ReviewBoxNameSC>
            <DivButtonBoxSC>
              {/* <ButtonReviewPageSC to='/reviews'>О магазине</ButtonReviewPageSC>
              <ButtonReviewPageSC to='/reviews'>О товарах</ButtonReviewPageSC> */}
              <ButtonCustomSC
                width={"149px"}
                height={"40px"}
                borderRadius={"14px"}
              >
                About store
              </ButtonCustomSC>
              <ButtonCustomSC
                width={"149px"}
                height={"40px"}
                borderRadius={"14px"}
              >
               About products
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
              <ButtonPageBoxSC>Next</ButtonPageBoxSC>
            </DivPagenationBoxSC>
          </DivCardReviewsBoxSC>
        </DivGridCatalogShopSC>
        </DivBorderBlockSC>
      </DivMainBlockSC>
    </>
  );
};

export default Reviews;
