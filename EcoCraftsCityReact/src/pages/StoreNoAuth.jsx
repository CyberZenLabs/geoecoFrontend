import { Margin } from '@mui/icons-material';
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";

import React, { useEffect, useState } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

import {

} from "../styled-components-css/styles-user-store-settings/styles.SettingsShop";

import{
  DivBoxNewProductsBigST
  } from "../styled-components-css/styles.StoreNewProduct";
  import { DivWrapLinkSC } from "../styled-components-css/styles.store";
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from "../styled-components-css/styles.product-detail";
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
  } from "../styled-components-css/styles.StoreNoAuth";

  import ProductCard from "../components/components-user-store-settings/ProductCardUser";
  import SettingsShopCatalog from "../components/components-user-store-settings/SettingsShopCatalog";
  const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
  const routes = [
    {
      path: "/custom-props",
      breadcrumb: CustomPropsBreadcrumb,
      props: { someProp: "Hi" },
    },
  ];
const StoreNoAuth = () =>{
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
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
            <DivWrapLinkSC>
          <DivHistorySC>
            <DivBackBoxSC>
              <FaArrowLeft color={"#85CB33"} size={15} />
              <NavLinkSC iscolor={true} to={"/"}>
                Назад
              </NavLinkSC>
            </DivBackBoxSC>
            <div>
              {breadcrumbs.map(({ match, breadcrumb }) => (
                <span key={match.pathname}>
                  <NavLinkSC to={match.pathname}>{breadcrumb} / </NavLinkSC>
                </span>
              ))}
            </div>
          </DivHistorySC>
        </DivWrapLinkSC>
            
            <DivBoxContentSC>
            <WrapShopContainerSC/>
            
            <DivBoxCatalogShopSC>

            <SettingsShopCatalog page={1}/>

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