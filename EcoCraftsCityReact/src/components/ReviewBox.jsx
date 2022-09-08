import React from "react";
import {
  DivContentWrapSC,
  DivDateWrapSC,
  DivImgWrapSC,
  DivReviewWrapSC,
  ImgReviewerSC,
  H1СustomerNameSC,
  ButtonFilterSC,
  PReviewTextSC,
  DateTextSC,
} from "../styled-components-css/styles.review-box";
import StarRating from "./StarRating";

const ReviewBox = () => {
  return (
    <DivReviewWrapSC>
      <DivImgWrapSC>
        <ImgReviewerSC src={"/default-images/plant.jpg"} />
      </DivImgWrapSC>
      <DivContentWrapSC>
        <H1СustomerNameSC>Customer name</H1СustomerNameSC>
        <ButtonFilterSC>Filter</ButtonFilterSC>
        <StarRating value={4}/>
        <PReviewTextSC>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt
          perferendis quos voluptatibus? Beatae cum cumque dolore eveniet
          expedita, fugiat inventore laborum minus modi, placeat ratione
          reiciendis sapiente tempora ullam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Alias amet atque deserunt dignissimos
          error, in iste maiores nemo odio odit officia omnis placeat possimus
          quae quaerat quidem, recusandae tempora ut?
        </PReviewTextSC>
        <ButtonFilterSC>Show seller's response</ButtonFilterSC>
      </DivContentWrapSC>
      <DivDateWrapSC>
        <DateTextSC>21.05.2022</DateTextSC>
      </DivDateWrapSC>
    </DivReviewWrapSC>
  );
};

export default ReviewBox;
