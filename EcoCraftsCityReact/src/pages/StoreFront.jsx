import React, { useState } from "react";
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
} from "../styled-components-css/styles.store";
import { IoIosArrowDown } from "react-icons/io";
import { FaRubleSign } from "react-icons/fa";
import StarRating from "../components/StarRating";
const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  {
    path: "/custom-props",
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: "Hi" },
  },
];
const StoreFront = ({ product }) => {
  const [checked, setChecked] = useState(false);
  const check = () => {
    setChecked(!checked);
  };
  const [state, setState] = useState(false);
  const showDropdown = () => {
    setState(true);
  };
  const hideDropdown = () => {
    setState(false);
  };
  const [state1, setState1] = useState(false);
  const hideDropdown1 = () => {
    setState1(false);
  };
  const showDropdown1 = () => {
    setState1(true);
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

            <DivItemsImageSC src={"/default-images/plant.jpg"} />
            <DivSalePinSC>37%</DivSalePinSC>
          </div>
          <DivItemsInfoSC>
            <ItemTitleSC>Растения: Крестовник роули</ItemTitleSC>
            <ItemTimeSC>Вчера 20:50</ItemTimeSC>
            <ItemInStockSC>Готовый товар:1шт</ItemInStockSC>
            <ItemPriceSC>26 001 ₽</ItemPriceSC>

            <ToEditSC to="/">Редактировать</ToEditSC>
            <ItemOptionsDropDownSC
              onMouseLeave={hideDropdown1}
              onMouseEnter={showDropdown1}
            >
              ...
              {state1 ? (
                <UlDropdown1CS onMouseEnter={showDropdown1}>
                   <LiDropdownHideCS>
                    <LiDropdownLinkCS to="/">Редактировать</LiDropdownLinkCS>
                  </LiDropdownHideCS>
                  <LiDropdownCS>
                    <LiDropdownLinkCS to="/">Удалить</LiDropdownLinkCS>
                  </LiDropdownCS>
                  <LiDropdownCS>
                    <LiDropdownLinkCS to="/">В черновики</LiDropdownLinkCS>
                  </LiDropdownCS>
                  <LiDropdownCS>
                    <LiDropdownLinkCS to="/">Скопировать</LiDropdownLinkCS>
                  </LiDropdownCS>
                  <LiDropdownCS>
                    <LiDropdownLinkCS to="/">Посмотреть</LiDropdownLinkCS>
                  </LiDropdownCS>
                </UlDropdown1CS>
              ) : null}
            </ItemOptionsDropDownSC>
            
          </DivItemsInfoSC>
        </DivItemsSC>
      ),
      bottom: (
        <>
          <BottomPanelSC>
            <BottomPanelChoiceSC>
              <InputCheckbox
                type="checkbox"
                id="todo"
                name="todo"
                value="todo"
                checked={checked}
              />

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
            <BottomPanelMoreSC
              onMouseLeave={hideDropdown}
              onMouseEnter={showDropdown}
            >
              Еще
              {state ? (
                <UlDropdownCS onMouseEnter={showDropdown}>
                   <LiDropdownHideCS>
                    <LiDropdownLinkCS to="/">В черновики</LiDropdownLinkCS>
                  </LiDropdownHideCS>
                   <LiDropdownHideCS>
                    <LiDropdownLinkCS to="/">Изменить цену</LiDropdownLinkCS>
                  </LiDropdownHideCS>
                  <LiDropdownCS>
                    <LiDropdownLinkCS to="/">Сделать скидку</LiDropdownLinkCS>
                  </LiDropdownCS>
                  <LiDropdownCS>
                    <LiDropdownLinkCS to="/">Изменить статус</LiDropdownLinkCS>
                  </LiDropdownCS>
                  <LiDropdownCS>
                    <LiDropdownLinkCS to="/">Разместить</LiDropdownLinkCS>
                  </LiDropdownCS>
                  <LiDropdownCS>
                    <LiDropdownLinkCS to="/">Удалить</LiDropdownLinkCS>
                  </LiDropdownCS>
                </UlDropdownCS>
              ) : null}
            </BottomPanelMoreSC>
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
            <DivItemsImageSC src={"/default-images/plant.jpg"} />
          </div>
          <DivItemsInfo2PageSC>
            <ItemTitleSC>Растения: Крестовник роули</ItemTitleSC>
            <ItemTimeSC>
             
              <DivBottomAddItemNumItemSC>
                <PlusMinusButtonsItemCS>-</PlusMinusButtonsItemCS>1
                <PlusMinusButtonsItemCS>+</PlusMinusButtonsItemCS>
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
              <InputCheckbox
                type="checkbox"
                id="todo"
                name="todo"
                value="todo"
                checked={checked}
              />

              <Labelfor for="todo" onClick={check}>
                Выбрать все
              </Labelfor>
            </BottomPanelChoice2SC>

            <DivBottomAddItemNumSC>
              <PlusMinusButtonsCS>-</PlusMinusButtonsCS>1
              <PlusMinusButtonsCS>+</PlusMinusButtonsCS>
            </DivBottomAddItemNumSC>
            <BottomPanelSelectSC>
              Не более 5 дней{" "}
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
      <DivStoreWrapSC>
        <DivStoreLeftPanelSC>
          <DivStoreInfoSC>
            <DivStoreInfoImageSC
              src={"/default-images/plant.jpg"}
            ></DivStoreInfoImageSC>
            <DivStoreInfoDataSC>
              <StoreInfoHeaderSC>Название магазина</StoreInfoHeaderSC>
              <StoreInfoSubHeaderSC>Город</StoreInfoSubHeaderSC>
            </DivStoreInfoDataSC>
          </DivStoreInfoSC>
          <DivStoreOptionsSC>
            <DivStoreOptionsLinkSC to="/">Профиль</DivStoreOptionsLinkSC>
            <br />
            <DivStoreOptionsLinkSC to="/sellersettings">Настройки</DivStoreOptionsLinkSC>
            <br />
            <HrLinkSC />
            <DivStoreOptionsLinkStoreSC to="/">
              Магазин 50
            </DivStoreOptionsLinkStoreSC>
            <br />
            <DivStoreOptionsLinkSC to="/">
              Оплата и доставка
            </DivStoreOptionsLinkSC>
            <br />
            <HrLinkSC />
            <DivStoreOptionsLinkSC to="/">Покупки</DivStoreOptionsLinkSC>
            <br />
            <DivStoreOptionsLinkSC to="/">Продажи</DivStoreOptionsLinkSC>
            <br />
            <DivStarsPanelSC>
              <DivStoreOptionsLeftPanelSC>
                <DivStoreOptionsLinkSC to="/">Отзывы 30</DivStoreOptionsLinkSC>
                <br />
              </DivStoreOptionsLeftPanelSC>
              <DivStoreOptionsRightPanelSC>
                <StarRating product={true} />
              </DivStoreOptionsRightPanelSC>
            </DivStarsPanelSC>
          </DivStoreOptionsSC>
        </DivStoreLeftPanelSC>

        <DivStoreRightPanelSC>
          <DivStoreInfoStuffSC>
            <H1BoldTextSC>Магазин</H1BoldTextSC>
            <UilSearchHeadSC size="20" color="#85cb33" />
            <StoreItemsNumSC>Товары: 1/3</StoreItemsNumSC>
            <StoreViewLinkSC to="/">
              Как посетители видят мой магазин
            </StoreViewLinkSC>
            <StoreViewLinkDotsSC to="/">...</StoreViewLinkDotsSC>

            <ProductCardButtonSC to="/">Добавить товар</ProductCardButtonSC>
          </DivStoreInfoStuffSC>
          <StoreItemsNumBotSC>Товары: 1/3</StoreItemsNumBotSC>
          <DivStoreInfoStuffButtonSC to="/">
            <ProductCardButtonAfterSC to="/">
              Добавить товар
            </ProductCardButtonAfterSC>
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
              <ProductsNumSC
                isActive={indexSelectedButton === 0}
                onClick={onClickTab(0)}
              >
                Товары(1)
              </ProductsNumSC>
              <StoreSalesAndAccountLinkSC
                isActive={indexSelectedButton === 1}
                onClick={onClickTab(1)}
              >
                Учет товаров
              </StoreSalesAndAccountLinkSC>

              <StoreSalesAndAccountLinkSearchSC>
                <InputSC type="text" id={"search"} />
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
