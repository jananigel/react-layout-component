import React from "react";
import styled from "@emotion/styled";

const Footer = ({ clearClick }) => {
  const onBtnClick = e => {
    clearClick(e);
  };

  return (
    <>
      <button onClick={onBtnClick}>Clear</button>
    </>
  );
};

export default Footer;