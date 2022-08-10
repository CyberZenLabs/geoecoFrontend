import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import {
  DivBackBoxSC,
  DivHistorySC,
  NavLinkSC,
} from "../styled-components-css/styles.product-detail";
import {
  DivStoreLeftPanelSC,
  DivStoreRightPanelSC,
  DivStoreWrapSC,
  DivWrapLinkSC,
  H1BoldTextSC,
} from "../styled-components-css/styles.store";
import AppContext from "../context/AppContext";
import {
  ButtonContentEditSC,
  ButtonSave,
  DivContent1PageSC,
  DivContent2SC,
  DivContentDivisionSC,
  DivContentInfoButtonSC,
  DivContentRows2Page2SC,
  DivContentRows2PageSC,
  DivContentRowsSC,
  DivContentSC,
  DivFirstColumnSC,
  DivMainInfo2PageSC,
  DivMainInfoSC,
  DivPagesSC,
  DivStoreInfoStuffSC,
  EmailFieldSC,
  H1ContentDefinSC,
  H1ContentInfoSC,
  H1ContentNameMailSC,
  H1ContentNameSC,
  H1PageOptionHidesSC,
  H1PageOptionSC,
  DivBankCardSC,
  DivInfoCard,
  NumberCardSC,
  DivTextOpisanitSC,
  SmalPlaceholder,
  FlexSC,
  MarginLeftSC,
  DivMainInfo3PageSC,
  LightTextSC,
  ContentInfoSC,
  GridPayment,
} from "../styled-components-css/styles.PaymentAndDelivery";
import VendorNavMenu from "../components/VendorNavMenu";
import CustomInputCheckBox from "../components/CustomInputCheckBox/CustomInputCheckBox";
const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  {
    path: "/custom-props",
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: "Hi" },
  },
];
const PaymentAndDelivery = ({ product }) => {
  const { setPass, setMail } = React.useContext(AppContext);
  const openPass = () => {
    setPass(true);
  };
  const openMail = () => {
    setMail(true);
  };
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  const listContent = [
    {
      blocks: (
        <>
          <DivMainInfoSC>
          
              <H1ContentInfoSC>Банковская карта</H1ContentInfoSC>
              
          
            <DivContent1PageSC>
              <DivContentRowsSC>
                <DivBankCardSC><DivInfoCard><div><img src="/default-images/MIR.svg"  /></div><NumberCardSC>220220******5839</NumberCardSC><div><img src="/default-images/pencil.svg"  /></div></DivInfoCard></DivBankCardSC>
              <DivTextOpisanitSC>    На эту карту будут зачислены средства
от сделок, которые оплачены онлайн</DivTextOpisanitSC> 
              </DivContentRowsSC>
              
            </DivContent1PageSC>
          </DivMainInfoSC>

          
        </>
      ),
    },
    {
      blocks: (
        <>
          <DivMainInfo2PageSC>
            <DivContentInfoButtonSC>
              <H1ContentInfoSC>Гарантированная Доставка</H1ContentInfoSC>
            </DivContentInfoButtonSC>
            <DivContentSC>
              <DivContentDivisionSC>
                <DivContentRows2PageSC>
               
                  <H1ContentNameSC > <CustomInputCheckBox  / ><MarginLeftSC/> Почта России</H1ContentNameSC>
                  <H1ContentNameSC><CustomInputCheckBox/><MarginLeftSC/> СДЭК</H1ContentNameSC>
                 
                </DivContentRows2PageSC>
                
                <DivContentRows2PageSC>
                <H1ContentDefinSC>
                 
                 <EmailFieldSC
                   label="phone"
                   type="phone"
                   placeholder="г. Красноярск, Красноярский край, Россия"
                 />
                 <SmalPlaceholder>От 180 рублей в зависимости от региогна доставки</SmalPlaceholder>
               </H1ContentDefinSC>
               <H1ContentDefinSC>
               <FlexSC>
                 <EmailFieldSC
                   label="password"
                  
                   placeholder="200"
                 />
                 <img src="/default-images/Rub.svg"  />
                 </FlexSC>
               <SmalPlaceholder>  Фиксированная стоимость доставки для всех направлений</SmalPlaceholder>
               </H1ContentDefinSC>
               </DivContentRows2PageSC>
              </DivContentDivisionSC>
            
             
            </DivContentSC>
          </DivMainInfo2PageSC>

        
        </>
      ),
    },
    {
    blocks:(<>
    <DivMainInfo3PageSC>
          
            <DivContentSC>
           
            <DivContentInfoButtonSC>
              <H1ContentInfoSC>0 руб </H1ContentInfoSC>
            
            </DivContentInfoButtonSC>
            
             
            </DivContentSC>
            <DivContentSC>
           
           <DivContentInfoButtonSC>
            
             <H1ContentInfoSC>Ожидают зачисления </H1ContentInfoSC>
            
           </DivContentInfoButtonSC>
           
            
           </DivContentSC>
           <DivContentSC>
           
           <DivContentInfoButtonSC>
            
             <LightTextSC>Зачисление происходит автоматически</LightTextSC>
           </DivContentInfoButtonSC>
           
            
           </DivContentSC>
          </DivMainInfo3PageSC>
          <DivMainInfo3PageSC>
          <DivContentInfoButtonSC>
             <FlexSC> <ContentInfoSC>Важно:</ContentInfoSC><LightTextSC>Зачисление происходит автоматически после вручения посылки</LightTextSC></FlexSC>
            
            </DivContentInfoButtonSC>
            <DivContentSC>

           <GridPayment>Платежи Дата Сумма Статус</GridPayment> 
           
            
             
            </DivContentSC>
          </DivMainInfo3PageSC>
          </>),},
  ];

  
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
        <VendorNavMenu page={3}/>
        </DivStoreLeftPanelSC>
        <DivStoreRightPanelSC>
          <DivStoreInfoStuffSC>
            <H1BoldTextSC>Редактирование оплаты и доставки</H1BoldTextSC>
          </DivStoreInfoStuffSC>
          <DivPagesSC>
            <H1PageOptionSC
              isActive={indexSelectedButton === 0}
              onClick={onClickTab(0)}
            >
              Оплата
            </H1PageOptionSC>
            <H1PageOptionSC
              isActive={indexSelectedButton === 1}
              onClick={onClickTab(1)}
            >
              Доставка
            </H1PageOptionSC>
            <H1PageOptionSC
              isActive={indexSelectedButton === 2}
              onClick={onClickTab(2)}
            >
              Финансы
            </H1PageOptionSC>
          </DivPagesSC>
          {listContent[indexSelectedButton].blocks}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default PaymentAndDelivery;
