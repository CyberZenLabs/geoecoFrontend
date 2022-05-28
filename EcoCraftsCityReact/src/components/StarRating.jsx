import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  StarRadio,
  StarWrap,
} from "../styled-components-css/styles.star-rating";
const StarRating = ({ fixed, product }) => {
  const [rating, setRating] = useState(fixed ? fixed : null);

  return (
    <StarWrap product={product}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <StarRadio
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={fixed ? null : () => setRating(ratingValue)}
            />
            <FaStar
              color={ratingValue <= rating ? "#85CB33" : "lightgrey"}
              size={17}
            />
          </label>
        );
      })}
    </StarWrap>
  );
};

export default StarRating;
