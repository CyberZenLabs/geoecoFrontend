import React, {useState, useEffect} from 'react'
import {
    DivBoxFirstRowSC,
    DivBoxRowProductSC,
    DivBoxTotalPriceSC,
    DivCartBoxSC,
    DivContentCartSC,
    DivFirstRowDeliverySC,
    DivTextBoldSizeSC,
    DivInfoOfDeliverySC,
    DivRowDeliverySC,
    DivFirstRowInfoSC,
    DivSecondRowInfoSC,
    DivTextMinSizeSC,
    DivTextBoldSizeInfoDeliverySC,
    DivTextMinSizeInfoDeliverySC,
   
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
            <div>
            <DivFirstRowDeliverySC>
            

               <DivTextBoldSizeSC>Способ доставки <DivTextMinSizeSC>изменить</DivTextMinSizeSC> </DivTextBoldSizeSC> 
              
            </DivFirstRowDeliverySC>
            <DivInfoOfDeliverySC>
               <DivFirstRowInfoSC> <DivTextBoldSizeInfoDeliverySC>Способ доставки <DivTextMinSizeInfoDeliverySC>изменить</DivTextMinSizeInfoDeliverySC> </DivTextBoldSizeInfoDeliverySC> </DivFirstRowInfoSC>
               <DivSecondRowInfoSC> <DivTextBoldSizeInfoDeliverySC>Способ доставки <DivTextMinSizeInfoDeliverySC>изменить</DivTextMinSizeInfoDeliverySC> </DivTextBoldSizeInfoDeliverySC>   </DivSecondRowInfoSC>
            </DivInfoOfDeliverySC>
            </div>
           
        </DivContentCartSC>
    </DivCartBoxSC>
  )
}

export default Cart


