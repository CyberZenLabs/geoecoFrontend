import React from 'react';
import {
	DivBoxCheckSC,
	DivBoxListSC,
	DivBoxRowProductSC,
	DivBoxTitleSC,
	DividerSC,
	DivImageSC,
	DivItemListSC,
	DivPriceSC,
	H2TitleProductList,
	SpanTitleSC,
} from '../../styled-components-css/styles.cart';
import {
	DivBoxCountProductSC,
	InputCustomSC,
} from '../../styled-components-css/styles.productListCart';
import ButtonGroup from './ButtonGroup';
import ItemProductCart from './ItemProductCart';
import CustomInputCheckBox from '../CustomInputCheckBox/CustomInputCheckBox';

const BoxProductList = props => {
	const { arrayProd, onClickAll } = props;

	
	return (
		<DivBoxRowProductSC>
			<div>
				<H2TitleProductList>Корзина</H2TitleProductList>
			</div>
			<DivBoxCheckSC>
				<CustomInputCheckBox onClick={onClickAll} />
				<label htmlFor='all'> Выбрать все</label>
			</DivBoxCheckSC>
			<DividerSC></DividerSC>
			<DivBoxListSC>
				{arrayProd.map((item, i) => {
					return (
						<ItemProductCart
							isSelected={item.isSelected}
							title={item.name}
							discr={'описание товара'}
							src={
								'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'
							}
							price={5000}
						></ItemProductCart>
					);
				})}
			</DivBoxListSC>
		</DivBoxRowProductSC>
	);
};

export default BoxProductList;