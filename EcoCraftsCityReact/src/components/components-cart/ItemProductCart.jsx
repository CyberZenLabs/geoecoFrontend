import React from 'react';
import {
	DivBoxTitleSC,
	DivImageSC,
	DivItemListSC,
	DivPriceSC,
	SpanTitleSC,
	SpanPriceSC,
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
				<SpanTitleSC>{title}</SpanTitleSC>
				<span>{discr}</span>
			</DivBoxTitleSC>
			<ButtonGroup></ButtonGroup>
			<DivPriceSC>
				<SpanPriceSC>{price} &#8381;</SpanPriceSC>
			</DivPriceSC>
		</DivItemListSC>
	);
};

export default ItemProductCart;
