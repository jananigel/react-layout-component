import React, { useState } from "react";
import "../../style.scss";
import ThreeRowsLayout from "../../layouts/three-rows/three-rows-layout.js";
import Header from "../../shared/components/popup-header/popup-header.js";
import Footer from "../../shared/components/popup-footer/popup-footer.js";

export const Modal = () => {
 
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
          'message in modal'
        }
        footer={<Footer clearClick={onClearClick} />}
      />
    </>
  );
};

export default Modal;
