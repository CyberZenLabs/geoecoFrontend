import { Margin } from '@mui/icons-material';

import React, { useEffect, useState } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "axios";

import {
    DivLogoST,
  DivInfoStoreST,
  MarginST,
  DivInfoST,
  SecondMenuST,
  DivStoreSetingST,
  TextBold,
  SpanLogoText,
  SpanTextTitleShopSC,
  DivBorderBox,
} from "../styled-components-css/styles.SettingsShop";

import{
    DivBoxNewProductsST,
    MenuProductST,
  GreenST,
  DivBoxNewProductsBigST,
  SpanTextTitleSC,
  DivAddProduct,
  SpanTextAddProdctSC,
  ButtonAddProductSC,
  DivAddProductBox,
  DivBoxItemsSC
    
  } from "../styled-components-css/styles.StoreNewProduct";
  
  import{
    ImgBannerShopSC,
    DivBoxContentSC,
    DivBoxCatalogShopSC,
    DivBoxCatalog,
    SpanTitleCatalog,
    DivGridItems,
    DivNextItems,
    DivNextGrid,
    DivCountPage,
    DivNextPage,
    DivButtonNext
  } from "../styled-components-css/styles.StoreNoAuth";

  import ProductCard from "../components/ProductCard";
  import SettingsShopCatalog from "../components/SettingsShopCatalog";
  import SettingsShopAdaptive from "../components/SettingsShopAdaptive";

const StoreNoAuth = () =>{

  const [products, setProducts] = useState([]);
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  useEffect(() => {
    // axiosFetch({
    //   axiosInstance: axios,
    //   auth: "",
    //   method: "GET",
    //   url: `https://radiant-river-29802.herokuapp.com/api/v1/products`,
    //   requestConfig: {},
    // });
    // setProducts([response]);

    axios
      .get("https://radiant-river-29802.herokuapp.com/api/v1/products")
      .then((res) => {
        setProducts(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return (


      
        <DivBoxNewProductsBigST>
            <DivBoxItemsSC>
            <MenuProductST> <GreenST>Назад</GreenST> <img src="/default-images/arrowGreen.svg"  /> Название магазина</MenuProductST>
            </DivBoxItemsSC>
            
            <DivBoxContentSC>
            <ImgBannerShopSC src="/banner-images/ShopBanner.jpg"></ImgBannerShopSC>
            
            <SettingsShopAdaptive></SettingsShopAdaptive>
            <DivBoxCatalogShopSC>

            <SettingsShopCatalog/>

            <DivBoxCatalog>
                <SpanTitleCatalog>Название магазина, что производят</SpanTitleCatalog>
                <DivGridItems>
                {products.map((product) => {
          return <ProductCard product={product} />;
        })}
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
                </DivGridItems>
                  <DivNextItems>
                    <DivNextGrid>
                        <DivCountPage>
                          <DivNextPage>
                            1
                          </DivNextPage>

                          <DivNextPage>
                            2
                          </DivNextPage>
                        </DivCountPage>
                        
                    <DivButtonNext>Дальше</DivButtonNext>
                    </DivNextGrid>
                  </DivNextItems>
            </DivBoxCatalog>

            </DivBoxCatalogShopSC>
            </DivBoxContentSC>
        </DivBoxNewProductsBigST>
        

        

    )
    
}
export default StoreNoAuth;