import React, { useState, useEffect } from "react";
import {
    DivBoxFirstRowSC,
    DivBoxMinWidthSC,
    DivBoxProductMinWidthSC,
    DivBoxRowProductSC,
    DivBoxTotalPriceSC,
    DivButtonTempSC,
    DivCartAddrDataSC,
    DivCartAddrDelivery,
    DivCartAddrDelTitleSC,
    DivCartBoxSC,
    DivCartMinSecondForm,
    DivCartWayToPay,
    DivCartWayToPayDataSC,
    DivCartWayToPayDivider1,
    DivCartWayToPayTitleSC, DivCartWayToPayTotalSC,
    DivContentCartSC,


} from "../styled-components-css/styles.cart";
import BoxProductList from "../components/components-cart/BoxProductList";
import TotalPriceCart from "../components/components-cart/TotalPriceCart";
import BoxInfoDelivery from '../components/components-cart/BoxInfoOfDelivery';
import {DivBoxButtonContentSC} from "../styled-components-css/styles.price-cart";
import {FiArrowRight} from "react-icons/fi";
import {ButtonCustomSC} from "../styled-components-css/styles.custom-button";
import CartTitleMinWidth from "../components/components-cart/CartTitleMinWidth";
import CustomInputCheckBox from "../components/CustomInputCheckBox/CustomInputCheckBox";
const arrayProduct = [
    {name :'Крестовник роули', isSelected: false },
    {name:'Деревянная ложка', isSelected: false},
    {name :'Деревянная бочка', isSelected: false },
    {name:'Соломенная корзина', isSelected: false },
    {name :'Стекляная солонка', isSelected: false },
]

const Cart = () => {
    const [arrayProd, setArrayProd] = useState([])
    const [widthWindow, setWidthWindow] = useState(0);
    const [statusOrder, setStatusOrder] = useState(0);

    useEffect(() => {
        setArrayProd(arrayProduct)
        window.onresize = onResizableWindow
        setWidthWindow(window.innerWidth)
    }, []);

  function onClickAll(status) {
    const tempArray = arrayProd.map((item, i) => {
      return {
        ...item,
        isSelected: !status,
      };
    });

    setArrayProd(tempArray);
  }


    const onResizableWindow = (e) => {
        setWidthWindow( e.currentTarget.innerWidth)
    }

    const onClickButton = (status) => (e) => {
        setStatusOrder(status)
    }


  return (
    <DivCartBoxSC>
        <DivContentCartSC>
            {
                widthWindow > 660 ?
                    <>
                        <DivBoxFirstRowSC>
                            <BoxProductList
                                onClickAll={onClickAll}
                                arrayProd={arrayProd}
                                widthWindow={widthWindow}
                            >

                            </BoxProductList>
                            <TotalPriceCart>

                            </TotalPriceCart>
                        </DivBoxFirstRowSC>
                        <BoxInfoDelivery>

                        </BoxInfoDelivery>
                    </>
                    :
                    <DivBoxMinWidthSC>
                        {
                            statusOrder === 0 ?
                                <>
                                    <CartTitleMinWidth>

                                    </CartTitleMinWidth>
                                    <DivBoxProductMinWidthSC>
                                        <BoxProductList
                                            onClickAll={onClickAll}
                                            arrayProd={arrayProd}
                                            widthWindow={widthWindow}
                                        >

                                        </BoxProductList>
                                    </DivBoxProductMinWidthSC>
                                </>
                                :
                                <DivCartMinSecondForm>
                                    <DivCartAddrDelivery>
                                        <DivCartAddrDelTitleSC>
                                            <h2>Адрес доставки</h2>
                                            <CustomInputCheckBox></CustomInputCheckBox>
                                        </DivCartAddrDelTitleSC>
                                        <DivCartAddrDataSC>
                                            <p>Перечень товаров и дата доставки</p>
                                        </DivCartAddrDataSC>
                                    </DivCartAddrDelivery>
                                    <DivCartWayToPay>
                                        <DivCartWayToPayTitleSC>
                                            <h2>Способ оплаты</h2>
                                            <h3>Привязать карту</h3>
                                        </DivCartWayToPayTitleSC>
                                        <DivCartWayToPayDivider1>
                                        </DivCartWayToPayDivider1>
                                        <DivCartWayToPayDataSC>
                                            <h1>4 товара на сумму</h1>
                                            <h2>26001 руб.</h2>
                                            <h3>Скидка</h3>
                                            <p>5%</p>
                                            <h3>Доставка</h3>
                                            <p>310 руб.</p>
                                        </DivCartWayToPayDataSC>
                                        <DivCartWayToPayTotalSC>
                                            <h1>Итого</h1>
                                            <h2>26001 руб.</h2>
                                        </DivCartWayToPayTotalSC>
                                    </DivCartWayToPay>

                                </DivCartMinSecondForm>
                        }

                        <DivButtonTempSC>
                            <ButtonCustomSC
                                onClick={statusOrder === 0 ? onClickButton(1) : null}
                                width={'100%'}
                                // padding={'8px 32px'}
                                primary={true}
                            >
                                <span>{statusOrder === 0 ? 'Оформить': 'Оплатить'}</span>
                            </ButtonCustomSC>
                        </DivButtonTempSC>

                    </DivBoxMinWidthSC>
            }

        </DivContentCartSC>

    </DivCartBoxSC>
  );
};

export default Cart;
