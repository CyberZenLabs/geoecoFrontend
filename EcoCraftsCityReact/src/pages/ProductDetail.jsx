import React, { useState } from "react";
import {
  DivBoxProductDetailSC,
  DivContentProductDetailSC,
  DivContentProductSC,
  DivProductDiscSC,
  DivProductDiscTitleSC,
  DivProductDiscContentSC,
  SpanQuestionSC,
  DivfirsrowInformSC,
  DivsecondrowInformSC,
  DivProductInformSC,
} from "../styled-components-css/styles.product-detail";
import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";
import "pure-react-carousel/dist/react-carousel.es.css";
import BreadcrumbsHistory from "../components/components-product-detail/BreadcrumbsHistory";
import ImageProduct from "../components/components-product-detail/ImageProduct";
import BoxPrice from "../components/components-product-detail/BoxPrice";
import BoxOther from "../components/components-product-detail/BoxOther";
import ReviewsBox from "../components/components-product-detail/ReviewsBox";

const listContent = [
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt perferendis quos voluptatibus? Beatae cum cumque dolore eveniet expedita, fugiat inventore laborum minus modi, placeat ratione reiciendis sapiente tempora ullam.\n" +
      "                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet atque deserunt dignissimos error, in iste maiores nemo odio odit officia omnis placeat possimus quae quaerat quidem, recusandae tempora ut?",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    text: "lorem",
  },
];

const ProductDetail = () => {
  // const breadcrumbs = useBreadcrumbs(routes);
  const [urlSrc, getUrlSrc] = useState(
    "https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg"
  );

  const [indexSelectedButton, getIndexButton] = useState(0);

  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };

  return (
    <DivBoxProductDetailSC>
      <DivContentProductDetailSC>
        <BreadcrumbsHistory />
        <DivContentProductSC>
          <ImageProduct />
          <BoxPrice />
        </DivContentProductSC>
        <BoxOther />
        <DivProductDiscSC>
      
         
          <DivProductDiscContentSC>
            <ReviewsBox
              indexSelectedButton={indexSelectedButton}
              onClickTab={onClickTab}
              listContent={listContent}
            />
            
          </DivProductDiscContentSC>
           
          
         
        </DivProductDiscSC>
        <DivProductDiscSC>
          
          <DivProductDiscTitleSC>
            <SpanQuestionSC>Отзывы и вопросы</SpanQuestionSC>
          </DivProductDiscTitleSC>
        
        </DivProductDiscSC>
      </DivContentProductDetailSC>
    </DivBoxProductDetailSC>
  );
};

export default ProductDetail;
