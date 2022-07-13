import React, {useEffect, useState} from "react";
import StarRating from "../components/StarRating";
import {
  DivLeftBoxShopSC,
  DivLinkReviewRaitingSC,
  DivLinksInfoSC,
  DivRigthBoxReviewSC,
  DivShopInfoSC,
  DivTitleShopInfoSC,
  ImgShopInfoSC,
  LinkShopInfo,
  LocationShopInfoSC,
  ReviewBoxNameSC,
  ReviewContainerSC,
  TitleShopInfoSC,
  WrapShopContainerSC,
} from "../styled-components-css/styles.reviews";
import axios from "axios";



const Reviews = ({shop, index}) => {

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
  }, [])
  
  return (
    <>
      <WrapShopContainerSC>
      </WrapShopContainerSC>
      <ReviewContainerSC>
        <DivLeftBoxShopSC>
          <DivShopInfoSC>
            <ImgShopInfoSC
              src={"/default-images/plant.jpg"}
            ></ImgShopInfoSC>
            <DivTitleShopInfoSC>
              <TitleShopInfoSC>Название магазина и о чем он</TitleShopInfoSC>
              <LocationShopInfoSC>Где находится</LocationShopInfoSC>
            </DivTitleShopInfoSC>
          </DivShopInfoSC>
          <DivLinksInfoSC>
            <LinkShopInfo to='/'>Профиль</LinkShopInfo>
            <LinkShopInfo to='/'>Магазины 50</LinkShopInfo>
            <DivLinkReviewRaitingSC>
              <LinkShopInfo to='/'>Отзывы </LinkShopInfo>
              <StarRating value={shopRaiting}/>
            </DivLinkReviewRaitingSC>
            
            <LinkShopInfo to='/'>Оплата и Доставка</LinkShopInfo>
          </DivLinksInfoSC>
        </DivLeftBoxShopSC>
        <DivRigthBoxReviewSC>
          <ReviewBoxNameSC>Отзывы</ReviewBoxNameSC>
        </DivRigthBoxReviewSC>
      </ReviewContainerSC>
    </>
  );
};

export default Reviews;
