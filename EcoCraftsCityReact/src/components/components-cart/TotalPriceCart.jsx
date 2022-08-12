import React, { useState } from 'react';
import { MdInfoOutline } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import { ButtonCustomSC } from '../../styled-components-css/styles.custom-button';
import {
  ButtonModalAdreeSC,
  CustomTextBoxForCartSC,
  DivBoxTotalPriceSC,
  DivColumnsDeliverySC,
  DivColumnsTotalPriceSC,
  DivContainerInputRadioSC,
  DivDeliveryInfoSC,
  DivTitleBoxSC,
  DivTotalPriceSC,
  H2TitleProductList,
} from '../../styled-components-css/styles.cart';
import {
  DivMainTotalboxSC,
  DivTotalTitleSC,
  DivTotalGoodsSC,
  DivTotalSaleSC,
  DivTotalDeliveryDescSC,
  DivTotalDeliveryTitleSC,
  DivTotalDeliveryAddressSC,
  DivTotalDateTitleSC,
  DivTotalDateSC,
  DivTotalPaymentTitleSC,
  DivTotalPaymentSC,
  DivTotalConditionsSC,
  DivBoxButtonContentSC,
  DivTotalConditiosContainerSC,
  DivButtonconteainerSC,
} from '../../styled-components-css/styles.price-cart';
import InputRadio from '../component-input-radio/InputRadio';
import DropDownSelect from './DropDownSelect';

const TotalPriceCart = (props) => {
  //   const [isChecked, setIsChecked] = useState(false);
  //   const toggleCheck = () => {
  //     setIsChecked(!isChecked);
  //   };
  return (
    <>
      <DivBoxTotalPriceSC>
        <DivTitleBoxSC padding={false}>
          <H2TitleProductList size={26}>Оформление покупки</H2TitleProductList>
          {/* <CustomTextBoxForCartSC weight={400} color={'#252525'}>
            Адрес магазина
          </CustomTextBoxForCartSC> */}
        </DivTitleBoxSC>
        <DivDeliveryInfoSC>
          <DivColumnsDeliverySC>
            <CustomTextBoxForCartSC weight={600} size={18} color={'#252525'}>
              Способ доставки:
            </CustomTextBoxForCartSC>
            <DropDownSelect />
            {/* <CustomTextBoxForCartSC weight={500} size={16} color={'#252525'}>
              
            </CustomTextBoxForCartSC> */}
          </DivColumnsDeliverySC>
          <DivColumnsDeliverySC>
            <CustomTextBoxForCartSC weight={600} size={18} color={'#252525'}>
              Доставка:
            </CustomTextBoxForCartSC>
            <ButtonModalAdreeSC>Выбрать адрес доставки</ButtonModalAdreeSC>
          </DivColumnsDeliverySC>
          <DivColumnsDeliverySC>
            <CustomTextBoxForCartSC weight={600} size={18} color={'#252525'}>
              Способ оплаты:
            </CustomTextBoxForCartSC>

            {/* <InputRadio isCheck={toggleCheck}/> */}
            <CustomTextBoxForCartSC weight={600} size={18} color={'#505050'}>
              Картой на сайте
            </CustomTextBoxForCartSC>
          </DivColumnsDeliverySC>
        </DivDeliveryInfoSC>
        <DivTotalPriceSC>
          <DivColumnsTotalPriceSC>
            <CustomTextBoxForCartSC align={'left'} weight={600} size={20} color={'#505050'}>
              Товары
            </CustomTextBoxForCartSC>
            <CustomTextBoxForCartSC align={'right'} weight={600} size={20}>
              15000 ₽
            </CustomTextBoxForCartSC>
          </DivColumnsTotalPriceSC>
          <DivColumnsTotalPriceSC>
            <CustomTextBoxForCartSC align={'left'} weight={600} size={20} color={'#505050'}>
              Доставка
            </CustomTextBoxForCartSC>
            <CustomTextBoxForCartSC align={'right'} weight={600} size={20}>
              2000 ₽
            </CustomTextBoxForCartSC>
          </DivColumnsTotalPriceSC>
          <DivColumnsTotalPriceSC>
            <CustomTextBoxForCartSC align={'left'} weight={600} size={20} color={'#505050'}>
              Скидка
            </CustomTextBoxForCartSC>
            <CustomTextBoxForCartSC align={'right'} weight={600} size={20}>
              699 ₽
            </CustomTextBoxForCartSC>
          </DivColumnsTotalPriceSC>
          <DivColumnsTotalPriceSC>
            <CustomTextBoxForCartSC align={'left'} weight={600} size={24}>
              Итого
            </CustomTextBoxForCartSC>
            <CustomTextBoxForCartSC align={'right'} weight={600} size={24}>
              17699 ₽
            </CustomTextBoxForCartSC>
          </DivColumnsTotalPriceSC>
        </DivTotalPriceSC>
        <DivButtonconteainerSC>
          <ButtonCustomSC
            // onClick={() => setShowCatalog(!showCatalog)}
            width={'100%'}
            // padding={'8px 32px'}
            primary={true}
          >
            <DivBoxButtonContentSC>
              <CustomTextBoxForCartSC align={'center'} weight={600} size={16} color={'#fff'}>
                Оплатить заказ
              </CustomTextBoxForCartSC>
              <FiArrowRight size={'20px'} />
            </DivBoxButtonContentSC>
          </ButtonCustomSC>
        </DivButtonconteainerSC>
      </DivBoxTotalPriceSC>
    </>
    // <DivBoxTotalPriceSC>
    // 	<DivMainTotalboxSC>
    // 		<DivTotalTitleSC>
    // 			<h2>Итого</h2>
    // 			<h2>15000</h2>
    // 		</DivTotalTitleSC>
    // 		<DivTotalGoodsSC>
    // 			<p>Товары, 5 шт.</p>
    // 			<p>123126 р.</p>
    // 		</DivTotalGoodsSC>
    // 		<DivTotalSaleSC>
    // 			<p>Скидка</p>
    // 			<p>-44568 р.</p>
    // 		</DivTotalSaleSC>
    // 		<DivTotalDeliveryDescSC>
    // 			<p>Доставка</p>
    // 			<p>Бесплатно</p>
    // 		</DivTotalDeliveryDescSC>
    // 		<DivTotalDeliveryTitleSC>
    // 			<h3>Доставка:</h3>
    // 		</DivTotalDeliveryTitleSC>
    // 		<DivTotalDeliveryAddressSC>
    // 			<p>Адрес</p>
    // 		</DivTotalDeliveryAddressSC>
    // 		<DivTotalDateTitleSC>
    // 			<p>Дата:</p>
    // 		</DivTotalDateTitleSC>
    // 		<DivTotalDateSC>
    // 			<p>дд/мм</p>
    // 		</DivTotalDateSC>
    // 		<DivTotalPaymentTitleSC>
    // 			<p>Оплата:</p>
    // 		</DivTotalPaymentTitleSC>
    // 		<DivTotalPaymentSC>
    // 			<p>Карта</p>
    // 		</DivTotalPaymentSC>
    // 		<DivTotalConditionsSC>
    // 			<DivTotalConditiosContainerSC>
    // 				<MdInfoOutline size={'20px'} color={'00622A'} />
    // 				<p>Условия возврата и доставки</p>
    // 			</DivTotalConditiosContainerSC>
    // 		</DivTotalConditionsSC>

    // 		<DivButtonconteainerSC>
    // 			<ButtonCustomSC
    // 				// onClick={() => setShowCatalog(!showCatalog)}
    // 				width={'100%'}
    // 				// padding={'8px 32px'}
    // 				primary={true}
    // 			>
    // 				<DivBoxButtonContentSC>
    // 					<span>Оплатить заказ</span>
    // 					<FiArrowRight size={'20px'} />
    // 				</DivBoxButtonContentSC>
    // 			</ButtonCustomSC>
    // 		</DivButtonconteainerSC>
    // 	</DivMainTotalboxSC>
    // </DivBoxTotalPriceSC>
  );
};

export default TotalPriceCart;
