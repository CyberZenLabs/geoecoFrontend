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
      <DivItemsInfoSC>
        <ItemTitleSC>Растения: Крестовник роули</ItemTitleSC>
        <ItemTimeSC>Вчера 20:50</ItemTimeSC>
        <ItemInStockSC>Готовый товар:1шт</ItemInStockSC>
        <ItemPriceSC>26 001 ₽</ItemPriceSC>

        <ToEditSC to="/">Редактировать</ToEditSC>
        <ItemOptionsDropDownSC>...</ItemOptionsDropDownSC>
      </DivItemsInfoSC>
    ),
    bottom: (
      <BottomPanelSC>
        <BottomPanelChoiceSC>
        <InputCheckbox type="checkbox" id="todo" name="todo" value="todo"/>
         <Labelfor for="todo">Выбрать все</Labelfor>
         </BottomPanelChoiceSC>


        <BottomPanelTextSC to="/">
          <FaMarginCS>
            <FaRubleSign />
          </FaMarginCS>
          Изменить цену
        </BottomPanelTextSC>
        <BottomPanelTextDraftSC to="/">В черновики</BottomPanelTextDraftSC>
        <BottomPanelMoreSC to="/">Еще</BottomPanelMoreSC>
      </BottomPanelSC>
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
      </DivOptionsPanel2SC>),
      item: (
        <DivItemsInfoSC>
          <ItemTitleSC>Растения: Крестовник роули</ItemTitleSC>
        </DivItemsInfoSC>
      
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
  },
];

const StoreFront = ({ product }) => {
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
            <DivStoreOptionsLinkSC to="/">Настройки</DivStoreOptionsLinkSC>
            <br />
            <HrLinkSC />
            <DivStoreOptionsLinkSC to="/">Магазин 50</DivStoreOptionsLinkSC>
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
            <StoreItemsNumSC>Товары: 1/3</StoreItemsNumSC>
            <StoreViewLinkSC to="/">
              Как посетители видят мой магазин
            </StoreViewLinkSC>
            <ProductCardButtonSC to="/">Добавить товар</ProductCardButtonSC>
          </DivStoreInfoStuffSC>
          <DivStoreInfoStuffButtonSC to="/">
            <ProductCardButtonAfterSC to="/">
              Добавить товар
            </ProductCardButtonAfterSC>{" "}
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
              <StoreSalesAndAccountLinkSC
                isActive={indexSelectedButton === 2}
                onClick={onClickTab(2)}
              >
                Акции
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
          <DivItemsSC>
            <DivItemsImageSC
              src={"/default-images/plant.jpg"}
            ></DivItemsImageSC>
            {listContent[indexSelectedButton].item}
          </DivItemsSC>
          {listContent[indexSelectedButton].bottom}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default StoreFront;
