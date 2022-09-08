import React from 'react';
import StarRating from './StarRating';
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
  ProductCardStoreName,
  StarAlign,
  DivGridPriceCartIcon,
  DivCart,
} from '../styled-components-css/styles.product-card';

const ProductCard = ({ product, index }) => {
  return (
    <ProductCardContainer>
      <ProductCardImage src="/default-images/plant.jpg" />

      <DivGridPriceCartIcon>
        <ProductCardPrice>{product.price}$</ProductCardPrice>
        <DivCart>
          <img src="/default-images/white_cart.svg" />
        </DivCart>
      </DivGridPriceCartIcon>

      <ProductCardName>{product.name}</ProductCardName>
      <StarAlign>
        <StarRating product={true} fixed={4} />
      </StarAlign>
      <ProductCardStoreName>My shop</ProductCardStoreName>
      <ProductCardButton to={`/product/${index}`}>More</ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
