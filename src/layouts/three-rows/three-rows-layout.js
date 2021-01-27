import React from "react";
import "./three-rows-layout.scss";

export const ThreeRowsLayout = ({header, content, footer}) => {
  console.log('header = ', header, ' contnt = ', content, ' footer = ', footer);
  return (
  <>
    <div class="main">
      <div className="header flex">
        {header}
      </div>
      <div class="container flex-center">
        {content}
      </div>
      <div class="footer flex-center">
        {footer}
      </div>
    </div>
  </>
  )
}

export default ThreeRowsLayout