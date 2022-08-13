import React, { useState, useEffect } from 'react';
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
    DivCartWayToPayTitleSC,
    DivCartWayToPayTotalSC,
    DivCartWrapSC,
    DivContentCartSC,
    DivTitleBoxSC,
    H2TitleProductList,
} from '../styled-components-css/styles.cart';
import BoxProductList from '../components/components-cart/BoxProductList';
import TotalPriceCart from '../components/components-cart/TotalPriceCart';
import BoxInfoDelivery from '../components/components-cart/BoxInfoOfDelivery';
import { DivBoxButtonContentSC } from '../styled-components-css/styles.price-cart';
import { FiArrowRight } from 'react-icons/fi';
import { ButtonCustomSC } from '../styled-components-css/styles.custom-button';
import CartTitleMinWidth from '../components/components-cart/CartTitleMinWidth';
import CustomInputCheckBox from '../components/CustomInputCheckBox/CustomInputCheckBox';
import AppContext from "../context/AppContext";
const arrayProduct = [
    { name: 'Крестовник роули', isSelected: false },
    { name: 'Деревянная ложка', isSelected: false },
    { name: 'Деревянная бочка', isSelected: false },
    { name: 'Соломенная корзина', isSelected: false },
    { name: 'Стекляная солонка', isSelected: false },
];

const Cart = () => {
    const [arrayProd, setArrayProd] = useState([]);
    const [widthWindow, setWidthWindow] = useState(0);
    const [statusOrder, setStatusOrder] = useState(0);
    const {
        cartProductList
    } = React.useContext(AppContext);

    useEffect(() => {
        setArrayProd(arrayProduct);
        window.onresize = onResizableWindow;
        setWidthWindow(window.innerWidth);



    }, []);

    useEffect(() => {
        console.log('>>>>>', cartProductList)
    }, [cartProductList])

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
        setWidthWindow(e.currentTarget.innerWidth);
    };

    const onClickButton = (status) => (e) => {
        setStatusOrder(status);
    };

    return (
        <>
            <DivCartWrapSC>
                <DivTitleBoxSC padding={true}>
                    <H2TitleProductList>Корзина</H2TitleProductList>
                </DivTitleBoxSC>
                <DivCartBoxSC>
                    <BoxProductList onClickAll={onClickAll} arrayProd={arrayProd} widthWindow={widthWindow}></BoxProductList>
                    <BoxProductList onClickAll={onClickAll} arrayProd={arrayProd} widthWindow={widthWindow}></BoxProductList>
                    <BoxProductList onClickAll={onClickAll} arrayProd={arrayProd} widthWindow={widthWindow}></BoxProductList>
                </DivCartBoxSC>
            </DivCartWrapSC>
        </>
    );
};

export default Cart;
