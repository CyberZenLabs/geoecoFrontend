import React, { useState ,useEffect} from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
  BottomPanelSelectItemSC,
  DivBottomAddItemNumItemSC,
  DivCount1SC,
  DivItems2pageSC,
  DivItemsImageSC,
  DivItemsInfo2PageSC,
  DivItemsInfoSC,
  DivItemsSC,
  DivSalePinSC,
  InputCheckboxItem,
  IoMarginCS,
  ItemInStockSC,
  ItemPriceSC,
  ItemTimeSC,
  ItemTitleSC,
  PlusMinusButtonsItemCS,
  ToEditSC,
} from '../styled-components-css/styles-seller-store-settings/styles.store';

const VendorProduct = ({ product, index, indexpage,allchecked }) => {
  const [checked, setChecked] = useState(false);
  const check = () => {
    setChecked(!checked);
  };
  const [active, setActive] = useState(false);
  const HandleSelectOpen = () => {
    setActive(!active);
  };
  const [all, setAll] = useState(false);
  useEffect(() => {
   setAll(allchecked);
  
  }, [allchecked]);

  
  const listContent = [
    {
      page: (
        <DivItemsSC>
          <div>
           
            <InputCheckboxItem type="checkbox" name="todo" value="todo" checked={all===true ? all:null}  />

            <DivItemsImageSC src={'/default-images/plant.jpg'} />
            <DivSalePinSC>37%</DivSalePinSC>
          </div>
          <DivItemsInfoSC>
            <ItemTitleSC>{product.name}</ItemTitleSC>
            <ItemTimeSC>Yesterday 8:50PM</ItemTimeSC>
            <ItemInStockSC>In stock:1pcs.</ItemInStockSC>
            <ItemPriceSC>{product.price} $</ItemPriceSC>

            <ToEditSC to="#">Edit</ToEditSC>
<div className="TheVeryDotsDiv" onClick={HandleSelectOpen}> ...
            <div className={active ? 'dots active' : 'dots'} >
             
              {/* active ?( */}
              <div className="containerdropdown cut">
                <div className="drop cut2" />
                <div className="listdropdown">
                  <ul>
                    <li>Remove</li>
                    <li>Drafts</li>
                    <li>Copy</li>
                    <li>Show</li>
                    <li className="hide">Edit</li>
                  </ul>
                </div>
              </div>
              {/* ):null} */}
            </div></div>
          </DivItemsInfoSC>
        </DivItemsSC>
      ),
    },
    {
      page: (
        <DivItems2pageSC>
          <div>
            <InputCheckboxItem type="checkbox" name="todo" value="todo" checked={all===true ? all : null} />
            <DivItemsImageSC src={'/default-images/plant.jpg'} />
          </div>
          <DivItemsInfo2PageSC>
            <ItemTitleSC>{product.name}</ItemTitleSC>
            <ItemTimeSC>
              <DivBottomAddItemNumItemSC>
                <PlusMinusButtonsItemCS>&#8722;</PlusMinusButtonsItemCS>
                <DivCount1SC>1</DivCount1SC>
                <PlusMinusButtonsItemCS>+</PlusMinusButtonsItemCS>
              </DivBottomAddItemNumItemSC>
            </ItemTimeSC>
            <ItemPriceSC>
              <BottomPanelSelectItemSC>
              No more than 5 days
                <IoMarginCS>
                  <IoIosArrowDown />
                </IoMarginCS>
              </BottomPanelSelectItemSC>
            </ItemPriceSC>
          </DivItemsInfo2PageSC>
        </DivItems2pageSC>
      ),
    },
  ];

  return <>{listContent[indexpage].page}</>;
};

export default VendorProduct;
