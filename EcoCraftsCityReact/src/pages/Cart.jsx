import React, {useState, useEffect} from 'react'
import {
    DivBoxFirstRowSC,
    DivBoxRowProductSC,
    DivBoxTotalPriceSC,
    DivCartBoxSC,
    DivContentCartSC
} from "../styled-components-css/styles.cart";
import BoxProductList from "../components/components-cart/BoxProductList";
import TotalPriceCart from "../components/components-cart/TotalPriceCart";

const arrayProduct = [
    'Крестовник роули',
    'Деревянная ложка',
    'Деревянная бочка',
    'Соломенная корзина',
    'Стекляная солонка'
]

const Cart = () => {
    const [arrayProd, setArrayProd] = useState([])

    useEffect(() => {
        setArrayProd(arrayProduct)
    }, []);


  return (
    <DivCartBoxSC>
        <DivContentCartSC>
            <DivBoxFirstRowSC>
                <BoxProductList
                    arrayProd={arrayProd}
                >

                </BoxProductList>
                <TotalPriceCart>

                </TotalPriceCart>
            </DivBoxFirstRowSC>
            <div></div>
        </DivContentCartSC>
    </DivCartBoxSC>
  )
}

export default Cart


