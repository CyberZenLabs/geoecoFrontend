import React from "react";
import StarRating from "./StarRating";
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
  ProductCardStoreName,
  StarAlign,
<<<<<<< HEAD
  DivGridPriceCartIcon,
  DivCart
=======
>>>>>>> main
} from "../styled-components-css/styles.product-card";

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductCardImage src="/default-images/plant.jpg" />

      <DivGridPriceCartIcon>
      <ProductCardPrice>{product.price}$</ProductCardPrice>
      <DivCart><img src="/default-images/white_cart.svg"  /></DivCart>
      </DivGridPriceCartIcon>
      
      <ProductCardName>{product.name}</ProductCardName>
      <StarAlign>
        <StarRating product={true} />
      </StarAlign>
      <ProductCardStoreName>Мой Огород</ProductCardStoreName>
      <ProductCardButton to="/product/1">В корзину</ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
