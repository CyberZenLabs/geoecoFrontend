import React, { useState, useEffect } from 'react';

import axios from '../../apis/admin-rest';

import '../../page-css/dropdown.css';

import {
  DivStoreLeftPanelSC,
  DivStoreRightPanelSC,
  DivStoreWrapSC,
  H1BoldTextSC,
  StoreItemsNumSC,
  DivStoreInfoStuffSC,
  StoreViewLinkSC,
  DivOptionsPanelSC,
  DivOptionsPanel2SC,
  ProductsNumSC,
  StoreSalesAndAccountLinkSC,
  HrLineSC,
  DropDownOptionsSC,
  StoreSalesAndAccountLinkSearchSC,
  DivItemsOptionsSC,
  DivStoreInfoStuffButtonSC,
  ProductCardButtonAfterSC,
  ProductCardButtonSC,
  BottomPanelSC,
  BottomPanelChoiceSC,
  BottomPanelTextSC,
  BottomPanelTextDraftSC,
  InputSC,
  IoMarginCS,
  FaMarginCS,
  DivTwoButtonsSC,
  LeftButtonCS,
  RightButtonCS,
  UilSearchSC,
  DivIconBoxInput,
  InputCheckbox,
  Labelfor,
  SaveButtonSC,
  StoreViewLinkDotsSC,
  StoreItemsNumBotSC,
  UilSearchHeadSC,
  SaveButtonPanelSC,
  DivButtonBottomSaveSC,
  BottomPanel2PageSC,
  BottomPanelSelectSC,
  DivBottomAddItemNumSC,
  PlusMinusButtonsCS,
  BottomPanelChoice2SC,
  DivCountSC,
  UilSearchSC2,
} from '../../styled-components-css/styles-seller-store-settings/styles.store';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRubleSign } from 'react-icons/fa';
import VendorNavMenu from '../../components/VendorNavMenu';
import {
  ButtonAddProductSC,
  DivAddProduct,
  SpanTextAddProdctSC,
} from '../../styled-components-css/styles-seller-store-settings/styles.StoreNewProduct';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import VendorProduct from '../../components/VendorProduct';

const StoreFront = ({ product }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://geoeco-t7js76po3a-uc.a.run.app/api/v1/products').then((res) => {
      console.log(res);
      setProducts(res.data.data.data);
    });
  }, []);

  const [active2, setActive2] = useState(false);
   const HandleSelectOpen2 = () => {
    setActive2(!active2);
  };
  const [all, setAll] = useState(false);
  const ChooseAll = () => {
    setAll(!all);
  };
 
  const listContent = [
    {
      options: (
        <DivOptionsPanel2SC>
          <DropDownOptionsSC>
            Type
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Status
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Discounts
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Sorting
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            All categories
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
        </DivOptionsPanel2SC>
      ),

      item: products.map((product, i) => {
        return <VendorProduct product={product} index={i} indexpage={0} allchecked={all} />;
      }),
      bottom: (
        <>
          <BottomPanelSC>
            <BottomPanelChoiceSC>
              <InputCheckbox type="checkbox" id="todo" name="todo" value="todo" checked={all} onChange={ChooseAll} />

              <Labelfor onClick={ChooseAll}>Select all</Labelfor>
            </BottomPanelChoiceSC>

            <BottomPanelTextSC to="#">
              <FaMarginCS>
               $
              </FaMarginCS>
              Change the price
            </BottomPanelTextSC>

            <BottomPanelTextDraftSC to="#">To Drafts</BottomPanelTextDraftSC>

            <div className={active2 ? 'dots2 active' : 'dots2'} onClick={HandleSelectOpen2}>
              More
              {/* {active2 ? ( */}
              <div className="containerdropdown2 cut">
                <div className="drop cut2" />
                <div className="listdropdown">
                  <ul>
                    <li>Make a discount</li>
                    <li>Change status</li>
                    <li>Post</li>
                    <li>Remove</li>
                    <li className="hide">To Drafts</li>
                    <li className="hide">Change the price</li>
                  </ul>
                </div>
              </div>
              {/* ):null} */}
            </div>
          </BottomPanelSC>
        </>
      ),
    },
    {
      options: (
        <DivOptionsPanel2SC>
          <DropDownOptionsSC>
            All products
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Sorting
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
        </DivOptionsPanel2SC>
      ),

      item: products.map((product, i) => {
        return <VendorProduct product={product} index={i} indexpage={1} allchecked={all} />;
      }),
      bottom: (
        <>
          <BottomPanel2PageSC>
            <BottomPanelChoice2SC>
              <InputCheckbox type="checkbox" id="todo" name="todo" value="todo" checked={all} onChange={ChooseAll} />
              <Labelfor onClick={ChooseAll}>Select all</Labelfor>
            </BottomPanelChoice2SC>

            <DivBottomAddItemNumSC>
              <PlusMinusButtonsCS>&#8722;</PlusMinusButtonsCS>
              <DivCountSC>1</DivCountSC>
              <PlusMinusButtonsCS>+</PlusMinusButtonsCS>
            </DivBottomAddItemNumSC>
            <BottomPanelSelectSC>
            No more than 5 days
              <IoMarginCS>
                <IoIosArrowDown />
              </IoMarginCS>
            </BottomPanelSelectSC>
            <SaveButtonSC>Save</SaveButtonSC>
          </BottomPanel2PageSC>
          <DivButtonBottomSaveSC>
            <SaveButtonPanelSC>Save</SaveButtonPanelSC>
          </DivButtonBottomSaveSC>
        </>
      ),
    },
  ];

  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };

  return (
    <>
      <BreadCrumbs />
      <DivStoreWrapSC>
        <DivStoreLeftPanelSC>
          <VendorNavMenu page={2} />
        </DivStoreLeftPanelSC>

        <DivStoreRightPanelSC>
          {products ? (
            <>
              <DivStoreInfoStuffSC>
                <H1BoldTextSC>Store</H1BoldTextSC>
                <UilSearchHeadSC size="20" color="#85cb33" />
                <StoreItemsNumSC>Products: 1/3</StoreItemsNumSC>

                <StoreViewLinkSC to="/VendorProfileUser">Switch to visitors perspective</StoreViewLinkSC>
                <StoreViewLinkDotsSC to="/VendorProfileUser">...</StoreViewLinkDotsSC>
                <ProductCardButtonSC to="/addnewproduct">Add a new product</ProductCardButtonSC>
              </DivStoreInfoStuffSC>
              <StoreItemsNumBotSC>Products: 1/3</StoreItemsNumBotSC>
              <DivStoreInfoStuffButtonSC to="#">
                <ProductCardButtonAfterSC to="/addnewproduct">Add a new product</ProductCardButtonAfterSC>
              </DivStoreInfoStuffButtonSC>
              <DivTwoButtonsSC>
                <LeftButtonCS>
                  Products
                  <IoMarginCS>
                    <IoIosArrowDown />
                  </IoMarginCS>
                </LeftButtonCS>
                <RightButtonCS>
                  Filters
                  <IoMarginCS>
                    <IoIosArrowDown />
                  </IoMarginCS>
                </RightButtonCS>
              </DivTwoButtonsSC>
              <DivItemsOptionsSC>
                <DivOptionsPanelSC>
                  <ProductsNumSC isActive={indexSelectedButton === 0} onClick={onClickTab(0)}>
                    Products(1)
                  </ProductsNumSC>
                  <StoreSalesAndAccountLinkSC isActive={indexSelectedButton === 1} onClick={onClickTab(1)}>
                    Accounting
                  </StoreSalesAndAccountLinkSC>

                  <StoreSalesAndAccountLinkSearchSC>
                    <InputSC type="text" id={'search'} />
                    <DivIconBoxInput>
                      <UilSearchSC size="25" color="#85cb33" />
                      <UilSearchSC2 size="15" color="#85cb33" />
                    </DivIconBoxInput>
                  </StoreSalesAndAccountLinkSearchSC>
                </DivOptionsPanelSC>

                <HrLineSC />
                {listContent[indexSelectedButton].options}
              </DivItemsOptionsSC>
              {listContent[indexSelectedButton].item}
              {listContent[indexSelectedButton].bottom}
            </>
          ) : (
            <DivAddProduct>
              <SpanTextAddProdctSC>Add your first product</SpanTextAddProdctSC>
              <ButtonAddProductSC>Add a new product</ButtonAddProductSC>
            </DivAddProduct>
          )}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default StoreFront;
