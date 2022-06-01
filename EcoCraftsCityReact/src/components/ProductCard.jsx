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
      <ProductCardPrice>777$</ProductCardPrice>
      <ProductCardName>Росток на посадку</ProductCardName>
      <StarRating product={true} />
      <ProductCardStoreName>Мой Огород</ProductCardStoreName>
      <ProductCardButton to="/product/1">Посмортеть</ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
