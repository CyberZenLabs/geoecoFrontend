import React from 'react';
import {
  DivBoxItemsSC,
  MenuProductST,
  GreenST,
  DivBoxAddNewProductSC,
  DivBoxGrayRectangleRulesSC,
  DivBoxBigGrayRectangleSC,
  DivBoxTextNewProductSC,
  DivTextNewProductSC,
  DivBoxColumnsRectangleSC,
  DivBoxRowsNameProductSC,
  DivBoxTextNameProductSC,
  DivTextNameProduct,
  DivBoxColumnsFotosSC,
  DivBoxFoto1SC,
  DivBoxFoto2SC,
  DivBoxFoto3SC,
  DivBoxFoto4SC,
  DivButtonFoto1SC,
  DivFoto2SC,
  DivFoto3SC,
  DivFoto4SC,
  InputAboutYourself,
  DivBoxColumnAboutYourselfSC,
  DivTextSC,
  DivBoxInputAboutYourself,
  DivBoxText,
  DivBoxColumnProductNameSC,
  DivBoxText1,
  DivText1SC,
  DivBoxInputProductName,
  InputProductName,
  DivImgGrayRectanglePriceSC,
  DivBoxImgGrayRectanglePriceSC,
  DivContainerButtonSC,
  DivImgFotoSC,
  DivTextDovnloadFotoSC,
  DivBoxRowsRectamgleSC,
  DivBoxRowsPriceSC,
  DivBoxTextPriceAndNumberSC,
  DivTextPriceAndNumberSC,
} from '../styled-components-css/styles.AddNewProduct';

const AddNewProduct = () => {
  return (
    <DivBoxAddNewProductSC>
      <DivBoxItemsSC>
        <MenuProductST>
          {' '}
          <GreenST>Главная</GreenST> <img src="/default-images/arrowGreen.svg" /> Мой магазин{' '}
          <img src="/default-images/arrow.svg" /> Новый товар{' '}
        </MenuProductST>
      </DivBoxItemsSC>
      <DivBoxTextNewProductSC>
        <DivTextNewProductSC>Новый товар</DivTextNewProductSC>
      </DivBoxTextNewProductSC>
      {/* <DivBoxRowsRectamgleSC> */}
      <DivBoxColumnsRectangleSC>
        <DivBoxBigGrayRectangleSC>
          <DivBoxRowsNameProductSC>
            <DivBoxTextNameProductSC>
              <DivTextNameProduct>Фото, рубрика, название товара</DivTextNameProduct>
            </DivBoxTextNameProductSC>
            <DivBoxColumnsFotosSC>
              <DivBoxFoto1SC>
                <DivButtonFoto1SC>
                  <DivContainerButtonSC>
                    <DivImgFotoSC src={'/default-images/photo.svg'}></DivImgFotoSC>
                    <DivTextDovnloadFotoSC>Загрузить фото</DivTextDovnloadFotoSC>
                  </DivContainerButtonSC>
                </DivButtonFoto1SC>
              </DivBoxFoto1SC>
              <DivBoxFoto2SC>
                <DivFoto2SC></DivFoto2SC>
              </DivBoxFoto2SC>
              <DivBoxFoto3SC>
                <DivFoto3SC></DivFoto3SC>
              </DivBoxFoto3SC>
              <DivBoxFoto4SC>
                <DivFoto4SC></DivFoto4SC>
              </DivBoxFoto4SC>
            </DivBoxColumnsFotosSC>

            <DivBoxColumnAboutYourselfSC>
              <DivBoxText>
                <DivTextSC>Видео</DivTextSC>
              </DivBoxText>
              <DivBoxInputAboutYourself>
                <InputAboutYourself type="text" placeholder="Вставьте ссылку на YouTube или VK-видео" />
              </DivBoxInputAboutYourself>
            </DivBoxColumnAboutYourselfSC>

            <DivBoxColumnProductNameSC>
              <DivBoxText1>
                <DivText1SC>Название товара</DivText1SC>
              </DivBoxText1>
              <DivBoxInputProductName>
                <InputProductName type="text" placeholder="Введите название товара" />
              </DivBoxInputProductName>
            </DivBoxColumnProductNameSC>
          </DivBoxRowsNameProductSC>
        </DivBoxBigGrayRectangleSC>
        <DivBoxGrayRectangleRulesSC></DivBoxGrayRectangleRulesSC>
      </DivBoxColumnsRectangleSC>
      <DivBoxImgGrayRectanglePriceSC>
        <DivImgGrayRectanglePriceSC>
          <DivBoxRowsPriceSC>
            <DivBoxTextPriceAndNumberSC>
              <DivTextPriceAndNumberSC>Цена и колличество</DivTextPriceAndNumberSC>
            </DivBoxTextPriceAndNumberSC>
          </DivBoxRowsPriceSC>
        </DivImgGrayRectanglePriceSC>
      </DivBoxImgGrayRectanglePriceSC>
      {/* </DivBoxRowsRectamgleSC> */}
    </DivBoxAddNewProductSC>
  );
};

export default AddNewProduct;
