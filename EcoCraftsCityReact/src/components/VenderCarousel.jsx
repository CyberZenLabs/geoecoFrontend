import React, { useState, useEffect, Children } from "react";
import { cloneElement } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  DivButtonWrapSC,
  DivCarouselAllItemsSC,
  DivCarouselMainSC,
  DivCarouselWindowSC,
  SpanTextTitleAdaptiveeSC
} from "../styled-components-css/styles.vendor-carousel";

const VenderCarousel = ({ children }) => {
  const [items, setItems] = useState([]);
  const [carouselNumber, setCarouselNumber] = useState(0);
  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: "360px",
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
          <DivCarouselAllItemsSC carouselNumber={carouselNumber}>
            {items}
          </DivCarouselAllItemsSC>
          <DivButtonWrapSC>
            {carouselNumber != 0 ? (
              <FiChevronLeft
                onClick={() => setCarouselNumber(carouselNumber - 1)}
              />
            ) : (
              <div></div>
            )}      <SpanTextTitleAdaptiveeSC>Отзывы</SpanTextTitleAdaptiveeSC>

             {carouselNumber != items.length-2 ? (
               <FiChevronRight
               onClick={() => setCarouselNumber(carouselNumber + 1)}
             />
            ) : (
              <div></div>
            )}
          </DivButtonWrapSC>
        </DivCarouselWindowSC>
      </DivCarouselMainSC>
    </>
  );
};

export default VenderCarousel;
