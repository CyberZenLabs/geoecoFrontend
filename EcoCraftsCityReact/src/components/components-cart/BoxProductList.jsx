import React from 'react';
import {
  CustomTextBoxForCartSC,
  CustomTextBoxSC,
  DivBoxCheckSC,
  DivBoxListSC,
  DivBoxRowProductSC,
  DivBoxTitleSC,
  DivContainerProductSC,
  DivDeliveryInfoSC,
  DividerSC,
  DivImageSC,
  DivItemListSC,
  DivPaySC,
  DivPriceSC,
  DivProductItemsSC,
  DivProductsBoxSC,
  DivTitleBoxSC,
  H2TitleProductList,
  SpanTitleSC,
} from '../../styled-components-css/styles.cart';
import { DivBoxCountProductSC, InputCustomSC } from '../../styled-components-css/styles.productListCart';
import ButtonGroup from './ButtonGroup';
import ItemProductCart from './ItemProductCart';
import CustomInputCheckBox from '../CustomInputCheckBox/CustomInputCheckBox';
import ItemProductCartMin from './ItemProdictCartMinWidth';
import TotalPriceCart from './TotalPriceCart';

const BoxProductList = (props) => {
  const { arrayProd, onClickAll, widthWindow } = props;

  // console.log('>>>>>>>>>', widthWindow)
  return (
    <>
      <DivContainerProductSC>
        <DivProductItemsSC>
          <DivTitleBoxSC padding={false}>
            <H2TitleProductList>Store name</H2TitleProductList>
            <CustomTextBoxForCartSC weight={400} color={'#252525'}>
              Store Address
            </CustomTextBoxForCartSC>
          </DivTitleBoxSC>
          <DivProductsBoxSC>
            {arrayProd.map((item, i) => {
              return (
                <ItemProductCart
                  isSelected={item.isSelected}
                  title={item.name}
                  discr={'Product description'}
                  src={
                    'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'
                  }
                  price={5000}
                ></ItemProductCart>
              );
            })}
          </DivProductsBoxSC>
        </DivProductItemsSC>
        <DivPaySC>
          <TotalPriceCart/>
        </DivPaySC>
        {/* <DivBoxRowProductSC>
          {widthWindow > 660 ? (
            <>
              <DivBoxCheckSC>
                <CustomInputCheckBox onClick={onClickAll} />
                <label htmlFor="all"> Select all</label>
              </DivBoxCheckSC>
              <DividerSC></DividerSC>
            </>
          ) : null}

          <DivBoxListSC>
            {arrayProd.map((item, i) => {
              if (widthWindow > 660) {
                return (
                  <ItemProductCart
                    isSelected={item.isSelected}
                    title={item.name}
                    discr={'Product description'}
                    src={
                      'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'
                    }
                    price={5000}
                  ></ItemProductCart>
                );
              }
              return (
                <ItemProductCartMin
                  isSelected={item.isSelected}
                  title={item.name}
                  discr={'Product description'}
                  src={
                    'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'
                  }
                  price={5000}
                ></ItemProductCartMin>
              );
            })}
          </DivBoxListSC>
        </DivBoxRowProductSC>
        <TotalPriceCart></TotalPriceCart> */}
      </DivContainerProductSC>
    </>
  );
};

export default BoxProductList;
