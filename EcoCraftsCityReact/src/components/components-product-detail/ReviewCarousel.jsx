import React, { useState, useEffect, Children } from "react";
import { cloneElement } from "react";
import {
  DivCarouselAllItemsSC,
  DivCarouselMainSC,
  DivCarouselWindowSC,
} from "../../styled-components-css/styles.review-carousel";

const ReviewCarousel = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: "1322px",
            maxWidth: "1322px",
          },
        });
      })
    );
  }, []);

  return (
    <>
      <DivCarouselMainSC>
        <DivCarouselWindowSC>
          <DivCarouselAllItemsSC>{items}</DivCarouselAllItemsSC>
        </DivCarouselWindowSC>
      </DivCarouselMainSC>
    </>
  );
};

export default ReviewCarousel;
