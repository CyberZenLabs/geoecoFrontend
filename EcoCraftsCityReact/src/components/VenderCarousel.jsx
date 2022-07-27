import React, { useState, useEffect, Children } from "react";
import { cloneElement } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import {
  DivButtonWrapSC,
  DivCarouselAllItemsSC,
  DivCarouselMainSC,
  DivCarouselWindowSC,
} from "../styled-components-css/styles.review-carousel";

const VenderCarousel = ({ children }) => {
  const [items, setItems] = useState([]);
  const [carouselNumber, setCarouselNumber] = useState(0);
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
          <DivCarouselAllItemsSC carouselNumber={carouselNumber}>
            {items}
          </DivCarouselAllItemsSC>
          <DivButtonWrapSC>
            {carouselNumber != 0 ? (
              <BsArrowLeftCircle
                onClick={() => setCarouselNumber(carouselNumber - 1)}
              />
            ) : (
              <div></div>
            )}
             {carouselNumber != items.length-3 ? (
               <BsArrowRightCircle
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
