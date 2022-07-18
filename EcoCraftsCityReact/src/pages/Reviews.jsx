import React, { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
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
} from "../styled-components-css/styles.reviews";
import axios from "axios";
import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";
import RatioCard from "../components/RatioCard";
import ReviewBox from "../components/ReviewBox";

const Reviews = ({ shop, index }) => {
  const [shopRaiting, setShopRaiting] = useState();

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
      <WrapShopContainerSC></WrapShopContainerSC>
      <ReviewContainerSC>
        <DivShopContainerSC>

          <DivShopInfoSC>
            <ImgShopInfoSC src={"/default-images/plant.jpg"}></ImgShopInfoSC>
            <DivTitleShopInfoSC>
              <TitleShopInfoSC>Название магазина и о чем он</TitleShopInfoSC>
              <LocationShopInfoSC>Где находится</LocationShopInfoSC>
              <DivStarHideSC>
                <StarRating fixed={true} value={shopRaiting} />
              </DivStarHideSC>
            </DivTitleShopInfoSC>
          </DivShopInfoSC>

          <DivLinksInfoSC>
            <LinkShopInfoSC to="/">Профиль</LinkShopInfoSC>
            <LinkShopInfoSC to="/">Магазины 50</LinkShopInfoSC>
            <DivLinkReviewRaitingSC>
              <LinkShopInfoSC to="/">Отзывы </LinkShopInfoSC>
              <StarRating fixed={true} value={shopRaiting} />
            </DivLinkReviewRaitingSC>
            <LinkShopInfoSC to="/">Оплата и Доставка</LinkShopInfoSC>
          </DivLinksInfoSC>

          <DivLinksAdaptiveSC>
            <LinkShopInfoSC to="/">Профиль</LinkShopInfoSC>
            <LinkShopInfoSC to="/">Магазин 50</LinkShopInfoSC>
            <ButtonDropDownSC>
              ...
            </ButtonDropDownSC>
          </DivLinksAdaptiveSC>

        </DivShopContainerSC>
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
            <ReviewBox/>
          </DivReviewsBoxSC>
          <DivPagenationBoxSC>
            <ButtonPageBoxSC>1</ButtonPageBoxSC>
            <ButtonPageBoxSC>2</ButtonPageBoxSC>
            <ButtonPageBoxSC>3</ButtonPageBoxSC>
            <ButtonPageBoxSC>Дальше</ButtonPageBoxSC>
          </DivPagenationBoxSC>
        </DivCardReviewsBoxSC>
      </ReviewContainerSC>
    </>
  );
};

export default Reviews;
