import React, { useState } from "react";
import "../../style.scss";
import ThreeRowsLayout from "../../layouts/three-rows/three-rows-layout.js";
import Header from "../../shared/components/popup-header/popup-header.js";
import Footer from "../../shared/components/popup-footer/popup-footer.js";
import Content from "../../shared/components/popup-content/popup-content.js";

const BASIC_UNIT = 1024;
const CYLINDER = 7.84423828125;

export const HardDriveSizeCalculator = () => {
  const [inputValue, setInputValue] = useState({
    leftValue: "",
    rightValue: ""
  });
  const onInputChange = e => {
    let convertToRight, convertToLeft;
    if (e.left) {
      convertToRight = Math.round(
        Math.round((e.left * BASIC_UNIT) / CYLINDER) * CYLINDER
      );
    } else {
      convertToLeft = Math.round(
        Math.round((e.right / BASIC_UNIT) * CYLINDER) / CYLINDER
      );
    }
    setInputValue({
      leftValue: convertToLeft,
      rightValue: convertToRight
    });
  };
  const onClearClick = e => {
    setInputValue({
      leftValue: "",
      rightValue: ""
    });
  };
  return (
    <>
      <ThreeRowsLayout
        header={<Header />}
        content={
          <Content
            leftValue={inputValue["leftValue"]}
            rightValue={inputValue["rightValue"]}
            inputChange={onInputChange}
          />
        }
        footer={<Footer clearClick={onClearClick} />}
      />
    </>
  );
};

export default HardDriveSizeCalculator;
