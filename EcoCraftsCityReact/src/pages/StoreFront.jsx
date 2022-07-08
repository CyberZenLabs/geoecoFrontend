import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";

import {
  DivBackBoxSC,
  DivHistorySC,
  NavLinkSC,
} from "../styled-components-css/styles.product-detail";
import {
  DivItemsSC,
  DivStoreInfoDataSC,
  DivStoreInfoImageSC,
  DivStoreInfoSC,
  DivStoreInfoSc,
  DivStoreLeftPanelSC,
  DivStoreOptionsLinkSC,
  DivStoreOptionsSC,
  DivStoreWrapSC,
  DivStoreWrapSc,
  StoreInfoHeaderSC,
  StoreInfoSubHeaderSC,
} from "../styled-components-css/styles.store";
const StoreFront = () => {
  const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
  const routes = [
    {
      path: "/custom-props",
      breadcrumb: CustomPropsBreadcrumb,
      props: { someProp: "Hi" },
    },
  ];
  const breadcrumbs = useReactRouterBreadcrumbs(routes);

  return (
    <>
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
      <DivStoreWrapSC>
        <DivStoreLeftPanelSC>
          <DivStoreInfoSC>
            <DivStoreInfoImageSC
              src={"/default-images/plant.jpg"}
            ></DivStoreInfoImageSC>
            <DivStoreInfoDataSC>
              <StoreInfoHeaderSC>Ghbdtn</StoreInfoHeaderSC>
              <StoreInfoSubHeaderSC>Пока</StoreInfoSubHeaderSC>
            </DivStoreInfoDataSC>
          </DivStoreInfoSC>
          <DivStoreOptionsSC>
            <DivStoreOptionsLinkSC to="/">123</DivStoreOptionsLinkSC>
            <DivStoreOptionsLinkSC to="/">123</DivStoreOptionsLinkSC>
            <hr />
            <DivStoreOptionsLinkSC to="/">123</DivStoreOptionsLinkSC>
            <DivStoreOptionsLinkSC to="/">123</DivStoreOptionsLinkSC>
            <hr />
            <DivStoreOptionsLinkSC to="/">123</DivStoreOptionsLinkSC>
            <DivStoreOptionsLinkSC to="/">123</DivStoreOptionsLinkSC>
            <DivStoreOptionsLinkSC to="/">123</DivStoreOptionsLinkSC>
          </DivStoreOptionsSC>
        </DivStoreLeftPanelSC>
        <DivItemsSC>123</DivItemsSC>
      </DivStoreWrapSC>
    </>
  );
};

export default StoreFront;
