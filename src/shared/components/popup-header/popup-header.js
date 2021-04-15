import React from "react";
import styled from "@emotion/styled";

const LeftSide = styled.div`
  // color: #fff;
`;

const Header = () => {
  return (
    <>
      <LeftSide className="left">
        <div className="title">Hard Drive Size Calculator</div>
      </LeftSide>
      <div className="right">
        <div className="label">i</div>
      </div>
    </>
  );
};

export default Header;
