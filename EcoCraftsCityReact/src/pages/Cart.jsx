import React, {useState, useEffect} from 'react'
import {
    DivBoxFirstRowSC, DivBoxMinWidthSC, DivBoxProductMinWidthSC,
    DivBoxRowProductSC,
    DivBoxTotalPriceSC,
    DivCartBoxSC,
    DivContentCartSC,


} from "../styled-components-css/styles.cart";
import BoxProductList from "../components/components-cart/BoxProductList";
import TotalPriceCart from "../components/components-cart/TotalPriceCart";
import BoxInfoDelivery from '../components/components-cart/BoxInfoOfDelivery';
import {DivBoxButtonContentSC} from "../styled-components-css/styles.price-cart";
import {FiArrowRight} from "react-icons/fi";
import {ButtonCustomSC} from "../styled-components-css/styles.custom-button";
import CartTitleMinWidth from "../components/components-cart/CartTitleMinWidth";
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

    useEffect(() => {
        setArrayProd(arrayProduct)
        window.onresize = onResizableWindow
    }, []);

    function onClickAll(status) {
        const tempArray = arrayProd.map((item, i) => {
            
            return {
                ...item, 
                isSelected: !status
            }
        })

        setArrayProd(tempArray)
	}


    const onResizableWindow = (e) => {
        console.log('>>>>>>', e.currentTarget.innerWidth)
        setWidthWindow( e.currentTarget.innerWidth)
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
                        <CartTitleMinWidth></CartTitleMinWidth>
                        <DivBoxProductMinWidthSC>
                            <BoxProductList
                                onClickAll={onClickAll}
                                arrayProd={arrayProd}
                            >

                            </BoxProductList>
                        </DivBoxProductMinWidthSC>
                        <div>
                            <ButtonCustomSC
                                // onClick={() => setShowCatalog(!showCatalog)}
                                width={'100%'}
                                // padding={'8px 32px'}
                                primary={true}
                            >
                                <span>Оформить</span>
                            </ButtonCustomSC>
                        </div>

                    </DivBoxMinWidthSC>
            }

        </DivContentCartSC>
    </DivCartBoxSC>
  )
}

export default Cart


