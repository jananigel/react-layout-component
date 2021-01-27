import React from "react";
import "./three-rows-layout.scss";

export const ThreeRowsLayout = ({ header, content, footer }) => {
  console.log("header = ", header, " contnt = ", content, " footer = ", footer);
  return (
    <>
      <div class="main">
        <div className="header flex">{header}</div>
        <div className="container flex-center">{content}</div>
        <div className="footer flex-center">{footer}</div>
      </div>
    </>
  );
};

export default ThreeRowsLayout;
