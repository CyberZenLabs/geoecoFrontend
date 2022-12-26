import { Margin } from '@mui/icons-material';


import React, { useEffect, useState } from "react";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

import { BreadCrumbs } from '../../components/BreadCrumbs';

  import { 
    DivMainBlockSC,
     DivBorderBlockSC,
     DivBannerShopContainerSC,
     DivGridCatalogShopSC,
     DivPageContentSC,
     SpanTitlePageSC
    
    } from "../../styled-components-css/styles-user-store-settings/styles.store-user";
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
    WrapShopContainerSC,
    DivBoxNewProductsBigST
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
      .get('https://geoeco-t7js76po3a-uc.a.run.app/api/v1/products')
      .then((res) => {
        setProducts(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DivMainBlockSC>
      <BreadCrumbs />

      <DivBorderBlockSC>
        <DivBannerShopContainerSC />


 
        <DivGridCatalogShopSC>
          <SettingsShopCatalog page={1} />

          <DivPageContentSC>
            <SpanTitlePageSC>Store name</SpanTitlePageSC>
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

                <DivButtonNext>Next</DivButtonNext>
              </DivNextGrid>
            </DivNextItems>
          </DivPageContentSC>
        </DivGridCatalogShopSC>
      </DivBorderBlockSC>
    </DivMainBlockSC>
  );
};
export default StoreNoAuth;
