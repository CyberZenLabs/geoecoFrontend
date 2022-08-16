import { Margin } from '@mui/icons-material';


import React, { useEffect, useState } from "react";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

import { BreadCrumbs } from '../../components/BreadCrumbs';

import{
  DivBoxNewProductsBigST
  } from "../../styled-components-css/styles-seller-store-settings/styles.StoreNewProduct";
  import { DivWrapLinkSC } from "../../styled-components-css/styles-seller-store-settings/styles.store";
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from "../../styled-components-css/styles.product-detail";
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
    DivButtonNext,
    SpanTitleCatalogAdaptive,
    WrapShopContainerSC
  } from "../../styled-components-css/styles-user-store-settings/styles.StoreNoAuth";

  import ProductCard from "../../components/components-user-store-settings/ProductCardUser";
  import SettingsShopCatalog from "../../components/components-user-store-settings/SettingsShopCatalog";
  const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

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
      .get('https://radiant-river-29802.herokuapp.com/api/v1/products')
      .then((res) => {
        setProducts(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DivBoxNewProductsBigST>
      <BreadCrumbs />

      <DivBoxContentSC>
        <WrapShopContainerSC />


 
        <DivBoxCatalogShopSC>
          <SettingsShopCatalog page={1} />

          <DivBoxCatalog>
            <SpanTitleCatalog>Store name, что производят</SpanTitleCatalog>
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
                  <DivNextPage>1</DivNextPage>

                  <DivNextPage>2</DivNextPage>
                </DivCountPage>

                <DivButtonNext>Дальше</DivButtonNext>
              </DivNextGrid>
            </DivNextItems>
          </DivBoxCatalog>
        </DivBoxCatalogShopSC>
      </DivBoxContentSC>
    </DivBoxNewProductsBigST>
  );
};
export default StoreNoAuth;
