import React from 'react';
import StarRating from '../StarRating';
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
  ProductCardStoreName,
  DivGridPriceCartIcon,
  DivCart,
  DivProductImage
} from '../../styled-components-css/styles-user-store-settings/styles.product-card-user';

const ProductCard = ({ product, index }) => {
  return (
    <ProductCardContainer>
      <DivProductImage>
      </DivProductImage>

      <DivGridPriceCartIcon>
        <ProductCardPrice>{product.price}$</ProductCardPrice>
        <DivCart>
          <img src="/default-images/white_cart.svg" />
        </DivCart>
      </DivGridPriceCartIcon>

      <ProductCardName>{product.name}</ProductCardName>
      
        <StarRating product={true} fixed={4} />
      
      <ProductCardStoreName>My Shop</ProductCardStoreName>
      <ProductCardButton to={`/product/${index}`}>More</ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
