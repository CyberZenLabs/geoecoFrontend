import React, {useState, useEffect} from 'react'
import {
    DivBoxFirstRowSC,
    DivBoxRowProductSC,
    DivBoxTotalPriceSC,
    DivCartBoxSC,
    DivContentCartSC,
   
   
} from "../styled-components-css/styles.cart";
import BoxProductList from "../components/components-cart/BoxProductList";
import TotalPriceCart from "../components/components-cart/TotalPriceCart";
import BoxInfoDelivery from '../components/components-cart/BoxInfoOfDelivery';
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
                    <div>

                    </div>
            }

        </DivContentCartSC>
    </DivCartBoxSC>
  )
}

export default Cart


