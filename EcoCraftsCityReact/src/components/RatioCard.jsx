import React from "react";
import {
  DivAlignBoxSC,
  DivColumnBoxSC,
  DivContainerSC,
  DivContentBoxSC,
  DivNumberReviewsSC,
  DivPercentSC,
  DivProgressBoxSC,
  DivRatioCardSC,
  DivRatioCardSlimSC,
  DivStarRatingSC,
  DivStatRatingSC,
  TextBoxSC,
  ValueRatingSC,
} from "../styled-components-css/styles.ratio-card";
import ProgressBar from "./ProgressBar";
import StarRating from "./StarRating";

const RatioCard = () => {
  return (
    <>
      <DivContainerSC>
        <DivContentBoxSC>
          <TextBoxSC>100% покупателей рекомендуют этот магазин</TextBoxSC>
          <DivRatioCardSlimSC>
            <ValueRatingSC>5.0</ValueRatingSC>
            <StarRating fixed={true} />
          </DivRatioCardSlimSC>
          <DivStatRatingSC>
            <DivRatioCardSC>
              <DivAlignBoxSC>
                <ValueRatingSC>5.0</ValueRatingSC>
                <StarRating fixed={true} />
              </DivAlignBoxSC>
            </DivRatioCardSC>

            <DivColumnBoxSC>
              <DivStarRatingSC>
                <StarRating value={5} fixed={true} />
                <StarRating value={4} fixed={true} />
                <StarRating value={3} fixed={true} />
                <StarRating value={2} fixed={true} />
                <StarRating value={1} fixed={true} />
              </DivStarRatingSC>

              <DivPercentSC>
                <TextBoxSC>70%</TextBoxSC>
                <TextBoxSC>30%</TextBoxSC>
                <TextBoxSC>0%</TextBoxSC>
                <TextBoxSC>0%</TextBoxSC>
                <TextBoxSC>0%</TextBoxSC>
              </DivPercentSC>

              <DivProgressBoxSC>
                <ProgressBar percent={70} />
                <ProgressBar percent={30} />
                <ProgressBar percent={0} />
                <ProgressBar percent={0} />
                <ProgressBar percent={0} />
              </DivProgressBoxSC>

              <DivNumberReviewsSC>
                <TextBoxSC>7 отзывов</TextBoxSC>
                <TextBoxSC>3 отзыва</TextBoxSC>
                <TextBoxSC>нет отзывов</TextBoxSC>
                <TextBoxSC>нет отзывов</TextBoxSC>
                <TextBoxSC>нет отзывов</TextBoxSC>
              </DivNumberReviewsSC>
            </DivColumnBoxSC>
          </DivStatRatingSC>
        </DivContentBoxSC>
      </DivContainerSC>
    </>
  );
};

export default RatioCard;