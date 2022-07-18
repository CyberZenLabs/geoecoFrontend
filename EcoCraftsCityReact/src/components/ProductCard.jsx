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

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductCardImage src="/default-images/plant.jpg" />
      <ProductCardPrice>{product.price}$</ProductCardPrice>
      <ProductCardName>{product.name}</ProductCardName>
      <StarRating product={true} />
      <ProductCardStoreName>Мой Огород</ProductCardStoreName>
      <ProductCardButton to="/product/1">Посмортеть</ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
