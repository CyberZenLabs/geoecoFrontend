import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

import {
  CatalogIconSc,
  CatalogNavSc,
  CatalogWrapSc,
  OverlayDivSc,
} from "../styled-components-css/styles.catalog";
import AppContext from "../context/AppContext";
import { UilMultiply } from "@iconscout/react-unicons";
import { AiOutlineConsoleSql } from "react-icons/ai";
import SubCatalog from "./SubCatalog";
import CatalogData from "../utils/navData";
import { IconContext } from "react-icons/lib";
const Catalog = () => {
  const { setShowCatalog, showCatalog } = useContext(AppContext);

  return (
    <>
      <IconContext.Provider value={{ color: "#252525" }}>
        <OverlayDivSc onClick={() => setShowCatalog(false)} show={showCatalog} />
        <CatalogNavSc show={showCatalog}>
          <CatalogWrapSc>
            <CatalogIconSc to="#" onClick={() => setShowCatalog(!showCatalog)}>
              <AiIcons.AiOutlineClose />
            </CatalogIconSc>
            {CatalogData.map((item, index) => {
              return <SubCatalog item={item} key={index} />;
            })}
          </CatalogWrapSc>
        </CatalogNavSc>
      </IconContext.Provider>
    </>
  );
};

export default Catalog;
