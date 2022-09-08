import React, { useState, useEffect } from "react";
import {
  DivAvatarDateRatingInfoSC,
  DivDateRatingInfoSC,
  DivDateReviewCreateSC,
  DivReviewShowWrapSC,
  DivStarRaitingSC,
  DivUserReviewSC,
  ImgUserAvatarSC,
  LinkOnUserSC,
  TextBoxReviewSC,
} from "../../styled-components-css/styles.review-show";
import StarRating from "../StarRating";

const ReviewShow = () => {
  const [widthWindow, setWidthWindow] = useState(
    document.documentElement.clientWidth
  );

  return (
    <>
      <DivReviewShowWrapSC>
        <DivAvatarDateRatingInfoSC>
          <LinkOnUserSC to="/">
            <ImgUserAvatarSC src={"/default-images/plant.jpg"} />
          </LinkOnUserSC>

          <DivDateRatingInfoSC>
            <DivDateReviewCreateSC>
              <LinkOnUserSC to="/">
                <TextBoxReviewSC color={"black"} weight={"600"}>
                  Sam
                </TextBoxReviewSC>
              </LinkOnUserSC>
              <TextBoxReviewSC color={"#8b8b8b"}>
              July 22, 2022, 20:24
              </TextBoxReviewSC>
            </DivDateReviewCreateSC>
            <DivStarRaitingSC>
              <StarRating value={5} fixed={true} size={20} />
            </DivStarRaitingSC>
          </DivDateRatingInfoSC>
        </DivAvatarDateRatingInfoSC>

        <DivUserReviewSC>
          <TextBoxReviewSC>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt
            perferendis quos voluptatibus? Beatae cum cumque dolore eveniet
            expedita, fugiat inventore laborum minus modi
          </TextBoxReviewSC>
        </DivUserReviewSC>
      </DivReviewShowWrapSC>
    </>
  );
};

export default ReviewShow;
