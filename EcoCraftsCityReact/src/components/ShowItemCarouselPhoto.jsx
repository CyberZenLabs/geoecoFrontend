
import React, { useState, useEffect } from "react";
import {
  DivPhotoShowWrapSC,
  DivPhotoSC,
  TextDecriptionPhotoSC
} from "../styled-components-css/styles.ShowItemCarouselPhoto";

const ShowItemCarouselPhoto = () => {
  const [widthWindow, setWidthWindow] = useState(
    document.documentElement.clientWidth
  );

  return (
    <>
      <DivPhotoShowWrapSC>
        
         <DivPhotoSC>

         </DivPhotoSC>

          <TextDecriptionPhotoSC>Описание фото</TextDecriptionPhotoSC>

        
      </DivPhotoShowWrapSC>
    </>
  );
};

export default ShowItemCarouselPhoto;