import React, { useState } from 'react';
import useAxiosFunction from '../hooks/useAxiosFunction';
import axios from '../apis/admin-rest';
import { useEffect } from 'react';
import {
  DivStarsPanelSC,
  DivStoreInfoDataSC,
  DivStoreInfoImageSC,
  DivStoreInfoSC,
  DivStoreOptionsLeftPanelSC,
  DivStoreOptionsLinkSC,
  DivStoreOptionsLinkStoreSC,
  DivStoreOptionsRightPanelSC,
  DivStoreOptionsSC,
  HrLinkSC,
  StoreInfoHeaderSC,
  StoreInfoSubHeaderSC,
} from '../styled-components-css/styles.store';
import StarRating from './StarRating';

const VendorNavMenu = ({ page }) => {
  const [store, setStores] = useState([]);

  const [response, error, loading, axiosFetch] = useAxiosFunction();
  useEffect(() => {
    axios.get('https://radiant-river-29802.herokuapp.com/api/v1/store/62ed18caba878200162f0141').then((res) => {
      console.log(res);
      setStores(res.data.data.data);
    });
  }, []);
  const [indexSelectedButton, getIndexButton] = useState(null);
  useEffect(() => {
    getIndexButton(page);
  }, [page]);

  return (
    <>
      <DivStoreInfoSC>
        <DivStoreInfoImageSC src={'/default-images/plant.jpg'}></DivStoreInfoImageSC>
        <DivStoreInfoDataSC>
          <StoreInfoHeaderSC>{store.storeName}</StoreInfoHeaderSC>
          <StoreInfoSubHeaderSC>Город</StoreInfoSubHeaderSC>
        </DivStoreInfoDataSC>
      </DivStoreInfoSC>
      <DivStoreOptionsSC>
        <DivStoreOptionsLinkSC isActive={indexSelectedButton === 0} to="/vendorprofile">
          Профиль
        </DivStoreOptionsLinkSC>
        <br />
        <DivStoreOptionsLinkSC isActive={indexSelectedButton === 1} to="/sellersettings">
          Настройки
        </DivStoreOptionsLinkSC>
        <br />
        <HrLinkSC />
        <DivStoreOptionsLinkSC isActive={indexSelectedButton === 2} to="/store/1">
          Магазин 50
        </DivStoreOptionsLinkSC>
        <br />
        <DivStoreOptionsLinkSC to="#" isActive={indexSelectedButton === 3}>
          Оплата и доставка
        </DivStoreOptionsLinkSC>
        <br />
        <HrLinkSC />
        <DivStoreOptionsLinkSC isActive={indexSelectedButton === 4} to="/purchasesactive">
          Покупки
        </DivStoreOptionsLinkSC>
        <br />
        <DivStoreOptionsLinkSC to="#" isActive={indexSelectedButton === 5}>
          Продажи
        </DivStoreOptionsLinkSC>
        <br />
        <DivStarsPanelSC>
          <DivStoreOptionsLeftPanelSC>
            <DivStoreOptionsLinkSC to="#" isActive={indexSelectedButton === 6}>
              Отзывы 30
            </DivStoreOptionsLinkSC>
            <br />
          </DivStoreOptionsLeftPanelSC>
          <DivStoreOptionsRightPanelSC>
            <StarRating product={true} />
          </DivStoreOptionsRightPanelSC>
        </DivStarsPanelSC>
      </DivStoreOptionsSC>
    </>
  );
};

export default VendorNavMenu;
