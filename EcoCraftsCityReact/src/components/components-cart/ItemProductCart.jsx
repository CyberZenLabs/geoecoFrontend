import React from 'react';
import {
	CustomTextBoxForCartSC,
	DivBoxTitleSC,
	DivImageSC,
	DivItemListSC,
	DivPriceSC, SpanPriceSC,
	SpanTitleSC,
} from '../../styled-components-css/styles.cart';
import ButtonGroup from './ButtonGroup';
import { DivBoxInputCartSC } from '../../styled-components-css/styles.productListCart';
import CustomInputCheckBox from '../CustomInputCheckBox/CustomInputCheckBox';

const ItemProductCart = props => {
	const { title, discr, src, price, isSelected } = props;

	function testOnClick() {
		
	}

	return (
		<DivItemListSC>
			<DivBoxInputCartSC>
				<CustomInputCheckBox isSelected={isSelected} onClick={testOnClick} />
			</DivBoxInputCartSC>
			<DivImageSC src={src}></DivImageSC>
			<DivBoxTitleSC>
				<CustomTextBoxForCartSC weight={600} color={'#252525'}>{title}</CustomTextBoxForCartSC>
				<CustomTextBoxForCartSC weight={400} color={'#252525'} size={18}>{discr}</CustomTextBoxForCartSC>
			</DivBoxTitleSC>
			<ButtonGroup></ButtonGroup>
			<DivPriceSC>
				<SpanPriceSC>{price} $</SpanPriceSC>
			</DivPriceSC>
		</DivItemListSC>
	);
};

export default ItemProductCart;
