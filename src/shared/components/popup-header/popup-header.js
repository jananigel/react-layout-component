import React from "react";
import styled from "@emotion/styled";

const LeftSide = styled.div`
  // color: #fff;
`;

const Header = ({actionClick}) => {

  const onBtnClick = (e) => {
    actionClick(e);
  }

  return (
    <>
      <LeftSide className="left">
        <div className="title">Hard Drive Size Calculator</div>
      </LeftSide>
      <div className="right">
        <div className="label" onClick={onBtnClick}>i</div>
      </div>
    </>
  );
};

export default Header;
