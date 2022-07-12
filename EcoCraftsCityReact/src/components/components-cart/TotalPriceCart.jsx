import React from 'react';
import { MdInfoOutline } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import { ButtonCustomSC } from '../../styled-components-css/styles.custom-button';
import { DivBoxTotalPriceSC } from '../../styled-components-css/styles.cart';
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
} from '../../styled-components-css/styles.price-cart';

const TotalPriceCart = props => {
	return (
		<DivBoxTotalPriceSC>
			<DivMainTotalboxSC>
				<DivTotalTitleSC>
					<h2>Итого</h2>
					<h2>15000</h2>
				</DivTotalTitleSC>
				<DivTotalGoodsSC>
					<p>Товары, 5 шт.</p>
					<p>123126 р.</p>
				</DivTotalGoodsSC>
				<DivTotalSaleSC>
					<p>Скидка</p>
					<p>-44568 р.</p>
				</DivTotalSaleSC>
				<DivTotalDeliveryDescSC>
					<p>Доставка</p>
					<p>Бесплатно</p>
				</DivTotalDeliveryDescSC>
				<DivTotalDeliveryTitleSC>
					<h3>Доставка:</h3>
				</DivTotalDeliveryTitleSC>
				<DivTotalDeliveryAddressSC>
					<p>Адрес</p>
				</DivTotalDeliveryAddressSC>
				<DivTotalDateTitleSC>
					<p>Дата:</p>
				</DivTotalDateTitleSC>
				<DivTotalDateSC>
					<p>дд/мм</p>
				</DivTotalDateSC>
				<DivTotalPaymentTitleSC>
					<p>Оплата:</p>
				</DivTotalPaymentTitleSC>
				<DivTotalPaymentSC>
					<p>Карта</p>
				</DivTotalPaymentSC>
				<DivTotalConditionsSC>
					<DivTotalConditiosContainerSC>
						<MdInfoOutline size={'20px'} />
						<p>Условия возврата и доставки</p>
					</DivTotalConditiosContainerSC>
				</DivTotalConditionsSC>

				<ButtonCustomSC
					// onClick={() => setShowCatalog(!showCatalog)}
					width={'100%'}
					// padding={'8px 32px'}
					primary={true}
				>
					<DivBoxButtonContentSC>
						<span>Оплатить заказ</span>
						<FiArrowRight size={'20px'} />
					</DivBoxButtonContentSC>
				</ButtonCustomSC>
			</DivMainTotalboxSC>
		</DivBoxTotalPriceSC>
	);
};

export default TotalPriceCart;
