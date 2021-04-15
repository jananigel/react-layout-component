import React, { useState } from "react";
import "../../style.scss";
import ThreeRowsLayout from "../../layouts/three-rows/three-rows-layout.js";
import Header from "../../shared/components/popup-header/popup-header.js";
import Footer from "../../shared/components/popup-footer/popup-footer.js";

export const Modal = ({closeClick}) => {
 
  const onClearClick = e => {
    setInputValue({
      leftValue: "",
      rightValue: ""
    });
  };

  const onCloseClick = e => {
    closeClick(e);
  }

  return (
    <>
      <ThreeRowsLayout
        header={<Header actionClick={onCloseClick}/>}
        content={
          'message in modal'
        }
        footer={<Footer clearClick={onClearClick} />}
      />
    </>
  );
};

export default Modal;
