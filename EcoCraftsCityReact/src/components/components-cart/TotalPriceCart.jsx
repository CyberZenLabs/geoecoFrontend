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
          <H2TitleProductList size={26}>Checkout</H2TitleProductList>
        </DivTitleBoxSC>
        <DivDeliveryInfoSC>
          <DivColumnsDeliverySC>
            <CustomTextBoxForCartSC weight={600} size={18} color={'#252525'}>
              Delivery method:
            </CustomTextBoxForCartSC>
            <DropDownSelect />
          </DivColumnsDeliverySC>
          <DivColumnsDeliverySC>
            <CustomTextBoxForCartSC weight={600} size={18} color={'#252525'}>
              Delivery:
            </CustomTextBoxForCartSC>
            <ButtonModalAdreeSC>Choose destination</ButtonModalAdreeSC>
          </DivColumnsDeliverySC>
          <DivColumnsDeliverySC>
            <CustomTextBoxForCartSC weight={600} size={18} color={'#252525'}>
              Payment method:
            </CustomTextBoxForCartSC>

            {/* <InputRadio isCheck={toggleCheck}/> */}
            <CustomTextBoxForCartSC weight={600} size={18} color={'#505050'}>
              With a card on the site
            </CustomTextBoxForCartSC>
          </DivColumnsDeliverySC>
        </DivDeliveryInfoSC>
        <DivTotalPriceSC>
          <DivColumnsTotalPriceSC>
            <CustomTextBoxForCartSC align={'left'} weight={600} size={20} color={'#505050'}>
              Products
            </CustomTextBoxForCartSC>
            <CustomTextBoxForCartSC align={'right'} weight={600} size={20}>
              15000 $
            </CustomTextBoxForCartSC>
          </DivColumnsTotalPriceSC>
          <DivColumnsTotalPriceSC>
            <CustomTextBoxForCartSC align={'left'} weight={600} size={20} color={'#505050'}>
              Delivery
            </CustomTextBoxForCartSC>
            <CustomTextBoxForCartSC align={'right'} weight={600} size={20}>
              2000 $
            </CustomTextBoxForCartSC>
          </DivColumnsTotalPriceSC>
          <DivColumnsTotalPriceSC>
            <CustomTextBoxForCartSC align={'left'} weight={600} size={20} color={'#505050'}>
              Discount
            </CustomTextBoxForCartSC>
            <CustomTextBoxForCartSC align={'right'} weight={600} size={20}>
              699 $
            </CustomTextBoxForCartSC>
          </DivColumnsTotalPriceSC>
          <DivColumnsTotalPriceSC>
            <CustomTextBoxForCartSC align={'left'} weight={600} size={24}>
              Total
            </CustomTextBoxForCartSC>
            <CustomTextBoxForCartSC align={'right'} weight={600} size={24}>
              17699 $
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
                Pay for the order
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
    // 			<h2>Total</h2>
    // 			<h2>15000</h2>
    // 		</DivTotalTitleSC>
    // 		<DivTotalGoodsSC>
    // 			<p>Products, 5 pcs.</p>
    // 			<p>123126 р.</p>
    // 		</DivTotalGoodsSC>
    // 		<DivTotalSaleSC>
    // 			<p>Discount</p>
    // 			<p>-44568 р.</p>
    // 		</DivTotalSaleSC>
    // 		<DivTotalDeliveryDescSC>
    // 			<p>Delivery</p>
    // 			<p>Бесплатно</p>
    // 		</DivTotalDeliveryDescSC>
    // 		<DivTotalDeliveryTitleSC>
    // 			<h3>Delivery:</h3>
    // 		</DivTotalDeliveryTitleSC>
    // 		<DivTotalDeliveryAddressSC>
    // 			<p>Address</p>
    // 		</DivTotalDeliveryAddressSC>
    // 		<DivTotalDateTitleSC>
    // 			<p>Date:</p>
    // 		</DivTotalDateTitleSC>
    // 		<DivTotalDateSC>
    // 			<p>MM/DD</p>
    // 		</DivTotalDateSC>
    // 		<DivTotalPaymentTitleSC>
    // 			<p>Payment:</p>
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
    // 					<span>Pay</span>
    // 					<FiArrowRight size={'20px'} />
    // 				</DivBoxButtonContentSC>
    // 			</ButtonCustomSC>
    // 		</DivButtonconteainerSC>
    // 	</DivMainTotalboxSC>
    // </DivBoxTotalPriceSC>
  );
};

export default TotalPriceCart;
