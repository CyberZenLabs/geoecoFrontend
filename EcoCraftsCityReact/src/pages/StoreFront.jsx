import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import '../page-css/dropdown.css';
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from '../styled-components-css/styles.product-detail';
import {
  DivItemsSC,
  DivStoreInfoDataSC,
  DivStoreInfoImageSC,
  DivStoreInfoSC,
  DivStoreLeftPanelSC,
  DivStoreRightPanelSC,
  DivStoreOptionsLinkSC,
  DivStoreOptionsSC,
  DivStoreWrapSC,
  StoreInfoHeaderSC,
  StoreInfoSubHeaderSC,
  DivWrapLinkSC,
  HrLinkSC,
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
  DivItemsImageSC,
  DivItemsInfoSC,
  ItemTitleSC,
  ItemTimeSC,
  ItemInStockSC,
  ItemPriceSC,
  ToEditSC,
  ItemOptionsDropDownSC,
  StoreSalesAndAccountLinkSearchSC,
  DivItemsOptionsSC,
  DivStoreInfoStuffButtonSC,
  ProductCardButtonAfterSC,
  ProductCardButtonSC,
  BottomPanelSC,
  BottomPanelChoiceSC,
  BottomPanelTextSC,
  BottomPanelMoreSC,
  BottomPanelTextDraftSC,
  DivStoreOptionsLeftPanelSC,
  DivStoreOptionsRightPanelSC,
  InputSC,
  DivStarsPanelSC,
  IoMarginCS,
  FaMarginCS,
  DivTwoButtonsSC,
  LeftButtonCS,
  RightButtonCS,
  UilSearchSC,
  DivIconBoxInput,
  InputCheckbox,
  Labelfor,
  UlDropdownCS,
  LiDropdownCS,
  LiDropdownLinkCS,
  UlDropdown1CS,
  InputCheckboxItem,
  DivSalePinSC,
  DivStoreOptionsLinkStoreSC,
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
  DivItemsInfo2PageSC,
  DivBottomAddItemNumItemSC,
  PlusMinusButtonsItemCS,
  BottomPanelSelectItemSC,
  LiDropdownHideCS,
  DivCountSC,
  DivCount1SC,
} from '../styled-components-css/styles.store';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRubleSign } from 'react-icons/fa';
import StarRating from '../components/StarRating';
import VendorNavMenu from '../components/VendorNavMenu';
const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  {
    path: '/custom-props',
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: 'Hi' },
  },
];
const StoreFront = ({ product }) => {
  const [checked, setChecked] = useState(false);
  const check = () => {
    setChecked(!checked);
  }; 
  const [active2, setActive2] = useState(false);
  const [active, setActive] = useState(false);
  const HandleSelectOpen = () => {
    setActive(!active);
    setActive2(false);
  };
 
  const HandleSelectOpen2 = () => {
    setActive2(!active2);
    setActive(false);
  };
  const listContent = [
    {
      options: (
        <DivOptionsPanel2SC>
          <DropDownOptionsSC>
            Тип товара
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Статус
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Скидки
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Сортировка
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Все рубрики
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
        </DivOptionsPanel2SC>
      ),
      item: (
        <DivItemsSC>
          <div>
            <InputCheckboxItem
              type="checkbox"
              name="todo"
              value="todo"
              checked={checked}
              onChange={check}
              onClick={!checked}
            />

            <DivItemsImageSC src={'/default-images/plant.jpg'} />
            <DivSalePinSC>37%</DivSalePinSC>
          </div>
          <DivItemsInfoSC>
            <ItemTitleSC>Растения: Крестовник роули</ItemTitleSC>
            <ItemTimeSC>Вчера 20:50</ItemTimeSC>
            <ItemInStockSC>Готовый товар:1шт</ItemInStockSC>
            <ItemPriceSC>26 001 ₽</ItemPriceSC>

            <ToEditSC to="/">Редактировать</ToEditSC>

            <div className={active ? 'dots active' : 'dots'} onClick={HandleSelectOpen} >
              ...
              {/* active ?( */}
             <div className="containerdropdown cut">
                <div className="drop cut2" />
                <div className="listdropdown">
                  <ul>
                   
                    <li>Удалить</li>
                    <li>В черновики</li>
                    <li>Скопировать</li>
                    <li>Посмотреть</li>
                     <li className="hide">Редактировать</li>
                  </ul>
                </div>
              </div>
         {/* ):null} */}

            </div>
           
          </DivItemsInfoSC>
        </DivItemsSC>
      ),
      bottom: (
        <>
          <BottomPanelSC>
            <BottomPanelChoiceSC>
              <InputCheckbox type="checkbox" id="todo" name="todo" value="todo" checked={checked} />

              <Labelfor for="todo" onClick={check}>
                Выбрать все
              </Labelfor>
            </BottomPanelChoiceSC>

            <BottomPanelTextSC to="/">
              <FaMarginCS>
                <FaRubleSign />
              </FaMarginCS>
              Изменить цену
            </BottomPanelTextSC>

            <BottomPanelTextDraftSC to="/">В черновики</BottomPanelTextDraftSC>

            
              <div className={active2 ? 'dots2 active' : 'dots2'} onClick={HandleSelectOpen2}>
              Еще
              {/* {active2 ? ( */}
              <div className="containerdropdown2 cut">
                <div className="drop cut2" />
                <div className="listdropdown">
                  <ul>
                   
                    <li>Сделать скидку</li>
                    <li>Изменить статус</li>
                    <li>Разместить</li>
                    <li>Удалить</li>
                     <li className="hide">В черновики</li>
                     <li className="hide">Изменить цену</li>
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
            Все товары
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
          <DropDownOptionsSC>
            Сортировка
            <IoMarginCS>
              <IoIosArrowDown />
            </IoMarginCS>
          </DropDownOptionsSC>
        </DivOptionsPanel2SC>
      ),
      item: (
        <DivItemsSC>
          <div>
            <InputCheckboxItem
              type="checkbox"
              name="todo"
              value="todo"
              checked={checked}
              onChange={check}
              onClick={!checked}
            />
            <DivItemsImageSC src={'/default-images/plant.jpg'} />
          </div>
          <DivItemsInfo2PageSC>
            <ItemTitleSC>Растения: Крестовник роули</ItemTitleSC>
            <ItemTimeSC>
              <DivBottomAddItemNumItemSC>
                <PlusMinusButtonsItemCS>&#8722;</PlusMinusButtonsItemCS><DivCount1SC>1</DivCount1SC><PlusMinusButtonsItemCS>+</PlusMinusButtonsItemCS>
              </DivBottomAddItemNumItemSC>
            </ItemTimeSC>
            <ItemPriceSC>
              <BottomPanelSelectItemSC>
                Не более 5 дней
                <IoMarginCS>
                  <IoIosArrowDown />
                </IoMarginCS>
              </BottomPanelSelectItemSC>
            </ItemPriceSC>
          </DivItemsInfo2PageSC>
        </DivItemsSC>
      ),
      bottom: (
        <>
          <BottomPanel2PageSC>
            <BottomPanelChoice2SC>
              <InputCheckbox type="checkbox" id="todo" name="todo" value="todo" checked={checked} />
              <Labelfor for="todo" onClick={check}>
                Выбрать все
              </Labelfor>
            </BottomPanelChoice2SC>

            <DivBottomAddItemNumSC>
              <PlusMinusButtonsCS>&#8722;</PlusMinusButtonsCS><DivCountSC>1</DivCountSC><PlusMinusButtonsCS>+</PlusMinusButtonsCS>
            </DivBottomAddItemNumSC>
            <BottomPanelSelectSC>
              Не более 5 дней
              <IoMarginCS>
                <IoIosArrowDown />
              </IoMarginCS>
            </BottomPanelSelectSC>
            <SaveButtonSC>Сохранить</SaveButtonSC>
          </BottomPanel2PageSC>
          <DivButtonBottomSaveSC>
            <SaveButtonPanelSC>Сохранить</SaveButtonPanelSC>
          </DivButtonBottomSaveSC>
        </>
      ),
    },
  ];
  const breadcrumbs = useReactRouterBreadcrumbs(routes);

  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };

  return (
    <>
      <DivWrapLinkSC>
        <DivHistorySC>
          <DivBackBoxSC>
            <FaArrowLeft color={'#85CB33'} size={15} />
            <NavLinkSC iscolor={true} to={'/'}>
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
      <DivStoreWrapSC>
        <DivStoreLeftPanelSC>
        <VendorNavMenu page={2}/>
        </DivStoreLeftPanelSC>

        <DivStoreRightPanelSC>
          <DivStoreInfoStuffSC>
            <H1BoldTextSC>Магазин</H1BoldTextSC>
            <UilSearchHeadSC size="20" color="#85cb33" />
            <StoreItemsNumSC>Товары: 1/3</StoreItemsNumSC>
            <StoreViewLinkSC to="/">Как посетители видят мой магазин</StoreViewLinkSC>
            <StoreViewLinkDotsSC to="/">...</StoreViewLinkDotsSC>

            <ProductCardButtonSC to="/">Добавить товар</ProductCardButtonSC>
          </DivStoreInfoStuffSC>
          <StoreItemsNumBotSC>Товары: 1/3</StoreItemsNumBotSC>
          <DivStoreInfoStuffButtonSC to="/">
            <ProductCardButtonAfterSC to="/">Добавить товар</ProductCardButtonAfterSC>
          </DivStoreInfoStuffButtonSC>
          <DivTwoButtonsSC>
            <LeftButtonCS>
              Товары
              <IoMarginCS>
                <IoIosArrowDown />
              </IoMarginCS>
            </LeftButtonCS>
            <RightButtonCS>
              Фильтры
              <IoMarginCS>
                <IoIosArrowDown />
              </IoMarginCS>
            </RightButtonCS>
          </DivTwoButtonsSC>
          <DivItemsOptionsSC>
            <DivOptionsPanelSC>
              <ProductsNumSC isActive={indexSelectedButton === 0} onClick={onClickTab(0)}>
                Товары(1)
              </ProductsNumSC>
              <StoreSalesAndAccountLinkSC isActive={indexSelectedButton === 1} onClick={onClickTab(1)}>
                Учет товаров
              </StoreSalesAndAccountLinkSC>

              <StoreSalesAndAccountLinkSearchSC>
                <InputSC type="text" id={'search'} />
                <DivIconBoxInput>
                  <UilSearchSC size="25" color="#85cb33" />
                </DivIconBoxInput>
              </StoreSalesAndAccountLinkSearchSC>
            </DivOptionsPanelSC>

            <HrLineSC />
            {listContent[indexSelectedButton].options}
          </DivItemsOptionsSC>
          {listContent[indexSelectedButton].item}
          {listContent[indexSelectedButton].bottom}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default StoreFront;
