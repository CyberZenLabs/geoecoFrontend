import React from "react";
import {
  DivProgressBarSC,
  DivProgressLineSC,
} from "../styled-components-css/styles.progress-bar";

const ProgressBar = ({ percent }) => {
  return (
    <DivProgressBarSC>
      <DivProgressLineSC
        style={{ 
          opacity: 1,
          width: `${percent}%`,
        }}
      ></DivProgressLineSC>
    </DivProgressBarSC>
  );
};

export default ProgressBar;
