import React from 'react';
import { useState } from 'react';
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
  DivBoxRowsPriceSC,
  DivBoxTextPriceAndNumberSC,
  DivTextPriceAndNumberSC,
  DivBoxColumnsPriceSC,
  DivTextPriceSC,
  DivBoxTextPriceSC,
  DivBoxInputPrice,
  InputPrice,
  DivImgRubSC,
  DivBoxColumnsNumberSC,
  DivBoxTextNumberSC,
  DivTextNumberSC,
  DivBoxColumnsDiscountSC,
  DivTextDiscountSC,
  DivBoxTextDiscountSC,
  DivBoxInputDiscount,
  InputDiscount,
  DivImgRub2SC,
  DivBoxImgGrayRectangleDescriptionSC,
  DivImgGrayRectangleDescriptionSC,
  DivBoxRowsDesctriptionSC,
  DivContainerDescriptionSC,
  DivBoxTextDescriptionSC,
  DivTextDescriptionSC,
  DivBoxInputDescriptonSC,
  InputDescription,
  DivContainerCharacteristicsSC,
  DivBoxTextCharacteristicsSC,
  DivTextCharacteristicsSC,
  DivBoxInputCharacteristicsSC,
  InputCharacteristics,
  DivContainerKeywordsSC,
  DivBoxTextKeywordsSC,
  DivTextKeywordsSC,
  DivBoxInputKeywordsSC,
  InputKeywords,
  DivBoxImgGrayRectangleDeliverySC,
  DivImgGrayRectangleDeliverySC,
  DivContainerDeliverySC,
  DivBoxTextDeliverySC,
  DivTextDeliverySC,
  DivBoxItemDeliverySC,
  DivItemDeliverySC,
  DivBoxImgDotSC,
  DivImgDotSC,
  DivBoxTextRussianPostSC,
  DivTextRussianPostSC,
  DivContainerColumnsPostSC,
  DivTextFromThePriceSC,
  DivTextSDEKSC,
  DivBoxTextSDEKSC,
  DivContainerColumnsSDEKSC,
  DivBoxImgDot1SC,
  DivImgDot1SC,
  DivTextFromThePrice1SC,
  DivBoxTextFromThePrice1SC,
  DivBoxColumnButtonsPMSC,
  DivBoxButtonMinusSC,
  ButtonMinusSC,
  DivBoxNum1SC,
  DivBoxButtonPlusSC,
  ButtonPlusSC,
  DivButtonsSC,
  DivBoxButtonsSC,
  DivBoxTextFromThePriceSC,
  DivBoxTextRulesSC,
  DivTextRulesSC,
  DivBox2ButtonsSC,
} from '../styled-components-css/styles.AddNewProduct';
import { ButtonCustomSC } from '../styled-components-css/styles.custom-button';
import { ButtonCustomWhiteSC } from '../styled-components-css/styles.custom-button-white';

const AddNewProduct = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

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
        <DivBoxGrayRectangleRulesSC>
          <DivBoxTextRulesSC>
            <DivTextRulesSC>Правила</DivTextRulesSC>
          </DivBoxTextRulesSC>
        </DivBoxGrayRectangleRulesSC>
      </DivBoxColumnsRectangleSC>
      <DivBoxImgGrayRectanglePriceSC>
        <DivImgGrayRectanglePriceSC>
          <DivBoxRowsPriceSC>
            <DivBoxTextPriceAndNumberSC>
              <DivTextPriceAndNumberSC>Цена и колличество</DivTextPriceAndNumberSC>
            </DivBoxTextPriceAndNumberSC>
            <DivBoxColumnsPriceSC>
              <DivBoxTextPriceSC>
                <DivTextPriceSC>Цена</DivTextPriceSC>
              </DivBoxTextPriceSC>
              <DivBoxInputPrice>
                <InputPrice type="text" />
              </DivBoxInputPrice>
              <DivImgRubSC src={'/default-images/Rub.svg'}></DivImgRubSC>
            </DivBoxColumnsPriceSC>
            <DivBoxColumnsNumberSC>
              <DivBoxTextNumberSC>
                <DivTextNumberSC>Колличество</DivTextNumberSC>
              </DivBoxTextNumberSC>
              <DivBoxColumnButtonsPMSC>
                <DivBoxButtonMinusSC>
                  <ButtonMinusSC onClick={decrement}>-</ButtonMinusSC>
                </DivBoxButtonMinusSC>
                <DivBoxNum1SC>{counter}</DivBoxNum1SC>
                <DivBoxButtonPlusSC>
                  <ButtonPlusSC onClick={increment}>+</ButtonPlusSC>
                </DivBoxButtonPlusSC>
              </DivBoxColumnButtonsPMSC>
            </DivBoxColumnsNumberSC>
            <DivBoxColumnsDiscountSC>
              <DivBoxTextDiscountSC>
                <DivTextDiscountSC>Скидка</DivTextDiscountSC>
              </DivBoxTextDiscountSC>
              <DivBoxInputDiscount>
                <InputDiscount type="text" />
              </DivBoxInputDiscount>
              <DivImgRub2SC src={'/default-images/Rub.svg'}></DivImgRub2SC>
            </DivBoxColumnsDiscountSC>
          </DivBoxRowsPriceSC>
        </DivImgGrayRectanglePriceSC>
      </DivBoxImgGrayRectanglePriceSC>
      <DivBoxImgGrayRectangleDescriptionSC>
        <DivImgGrayRectangleDescriptionSC>
          <DivBoxRowsDesctriptionSC>
            <DivContainerDescriptionSC>
              <DivBoxTextDescriptionSC>
                <DivTextDescriptionSC>Описание</DivTextDescriptionSC>
              </DivBoxTextDescriptionSC>
              <DivBoxInputDescriptonSC>
                <InputDescription
                  type="text"
                  placeholder="Подробно опишите свой товар, укажите всё, что важно знать покупателю"
                />
              </DivBoxInputDescriptonSC>
            </DivContainerDescriptionSC>

            <DivContainerCharacteristicsSC>
              <DivBoxTextCharacteristicsSC>
                <DivTextCharacteristicsSC>Характеристики</DivTextCharacteristicsSC>
              </DivBoxTextCharacteristicsSC>
              <DivBoxInputCharacteristicsSC>
                <InputCharacteristics type="text" />
              </DivBoxInputCharacteristicsSC>
            </DivContainerCharacteristicsSC>

            <DivContainerKeywordsSC>
              <DivBoxTextKeywordsSC>
                <DivTextKeywordsSC>Ключевые слова</DivTextKeywordsSC>
              </DivBoxTextKeywordsSC>
              <DivBoxInputKeywordsSC>
                <InputKeywords type="text" placeholder="Укажите от 2 до 20 ключевых слов" />
              </DivBoxInputKeywordsSC>
            </DivContainerKeywordsSC>
          </DivBoxRowsDesctriptionSC>
        </DivImgGrayRectangleDescriptionSC>
      </DivBoxImgGrayRectangleDescriptionSC>
      <DivBoxImgGrayRectangleDeliverySC>
        <DivImgGrayRectangleDeliverySC>
          <DivContainerDeliverySC>
            <DivBoxTextDeliverySC>
              <DivTextDeliverySC>Настройка доставки</DivTextDeliverySC>
            </DivBoxTextDeliverySC>
            <DivBoxItemDeliverySC>
              <DivItemDeliverySC>
                <DivContainerColumnsPostSC>
                  <DivBoxImgDotSC>
                    <DivImgDotSC></DivImgDotSC>
                  </DivBoxImgDotSC>
                  <DivBoxTextRussianPostSC>
                    <DivTextRussianPostSC>Почта России</DivTextRussianPostSC>
                  </DivBoxTextRussianPostSC>
                  <DivBoxTextFromThePriceSC>
                    <DivTextFromThePriceSC>от 180 руб</DivTextFromThePriceSC>
                  </DivBoxTextFromThePriceSC>
                </DivContainerColumnsPostSC>

                <DivContainerColumnsSDEKSC>
                  <DivBoxImgDot1SC>
                    <DivImgDot1SC></DivImgDot1SC>
                  </DivBoxImgDot1SC>
                  <DivBoxTextSDEKSC>
                    <DivTextSDEKSC>СДЭК</DivTextSDEKSC>
                  </DivBoxTextSDEKSC>
                  <DivBoxTextFromThePrice1SC>
                    <DivTextFromThePrice1SC>200 руб</DivTextFromThePrice1SC>
                  </DivBoxTextFromThePrice1SC>
                </DivContainerColumnsSDEKSC>
              </DivItemDeliverySC>
            </DivBoxItemDeliverySC>
          </DivContainerDeliverySC>
        </DivImgGrayRectangleDeliverySC>
      </DivBoxImgGrayRectangleDeliverySC>
      <DivBoxButtonsSC>
        <DivBox2ButtonsSC>
          <DivButtonsSC>
            <ButtonCustomWhiteSC width={'100%'} padding={'18px 32px'} type="submit">
              В черновик
            </ButtonCustomWhiteSC>

            <ButtonCustomSC width={'100%'} padding={'18px 32px'} type="submit">
              Разместить
            </ButtonCustomSC>
          </DivButtonsSC>
        </DivBox2ButtonsSC>
      </DivBoxButtonsSC>
    </DivBoxAddNewProductSC>
  );
};

export default AddNewProduct;
