import React from "react";
import StarRating from "./StarRating";
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
  ProductCardStoreName,
} from "../styled-components-css/styles.product-card";

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <ProductCardImage src="/default-images/plant.jpg" />
      <ProductCardPrice>123</ProductCardPrice>
      <ProductCardName>Ascnana a</ProductCardName>
      <StarRating product={true} />
      <ProductCardStoreName>askn ansk an</ProductCardStoreName>
      <ProductCardButton>asmxa amck</ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
