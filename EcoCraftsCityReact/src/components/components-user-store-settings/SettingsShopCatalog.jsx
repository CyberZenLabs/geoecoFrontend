import React, { useEffect, useState } from "react";
import StarRating from "../../components/StarRating";
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axios from '../../apis/admin-rest';

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
  DivBoxButtonLinkSC
} from "../../styled-components-css/styles-user-store-settings/styles.SettingsShopCatalog";
  const SettingsShopCatalog = ({page}) =>{
    const [shopRaiting, setShopRaiting] = useState();
    const [store, setStores] = useState([]);

    const [response, error, loading, axiosFetch] = useAxiosFunction();

    useEffect(() => {
      axios
        .get('https://radiant-river-29802.herokuapp.com/api/v1/store/62ed18caba878200162f0141')
        .then((res) => {
          console.log(res);
          setStores(res.data.data.data);
        }) }, []);
      const [indexSelectedButton, getIndexButton] = useState(null);
      useEffect(()=>{
          getIndexButton(page);
      },[page])

    return (


<div>
<DivShopContainerSC>
            <DivShopInfoSC>
              <ImgShopInfoSC src={"/default-images/plant.jpg"}></ImgShopInfoSC>
              <DivTitleShopInfoSC>
                <TitleShopInfoSC>Название магазина</TitleShopInfoSC>
                <LocationShopInfoSC>Где находится</LocationShopInfoSC>
                <DivStarHideSC>
                  <StarRating fixed={true} value={shopRaiting} />
                </DivStarHideSC>
              </DivTitleShopInfoSC>
            </DivShopInfoSC>
            <DivBoxButtonLinkSC to = "#">Написать</DivBoxButtonLinkSC>
            <DivLinksInfoSC>
              <LinkShopInfoSC isActive={indexSelectedButton === 0} to="/VendorProfileUser">Профиль</LinkShopInfoSC>
              <LinkShopInfoSC isActive={indexSelectedButton === 1} to="/StoreNoAuth">Магазины 50</LinkShopInfoSC>
              <DivLinkReviewRaitingSC>
                <LinkShopInfoSC isActive={indexSelectedButton === 2} to="/Reviews">Отзывы </LinkShopInfoSC>
                <StarRating fixed={true} value={shopRaiting} />
              </DivLinkReviewRaitingSC>
              <LinkShopInfoSC isActive={indexSelectedButton === 3} to="#">Оплата и Доставка</LinkShopInfoSC>
            </DivLinksInfoSC>

            <DivLinksAdaptiveSC>
              <LinkShopInfoSC isActive={indexSelectedButton === 0} to="/VendorProfileUser">Профиль</LinkShopInfoSC>
              <LinkShopInfoSC isActive={indexSelectedButton === 1} to="/StoreNoAuth">Магазин 50</LinkShopInfoSC>
              <ButtonDropDownSC>...</ButtonDropDownSC>
            </DivLinksAdaptiveSC>
          </DivShopContainerSC>
</div>

    )}
    export default SettingsShopCatalog;
