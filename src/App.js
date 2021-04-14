import React, { useState } from "react";
import "./style.scss";
import ThreeRowsLayout from "./layouts/three-rows/three-rows-layout.js";

const BASIC_UNIT = 1024;
const CYLINDER = 7.84423828125;

const Header = () => {
  return (
    <>
      <div className="left">
        <div className="title">Hard Drive Size Calculator</div>
      </div>
      <div className="right">
        <div className="label">i</div>
      </div>
    </>
  );
};

const Content = ({ leftValue, rightValue, inputChange }) => {
  const leftInputChangedHandler = event => {
    inputChange({ left: event.target.value });
  };

  const rightInputChangeHandler = event => {
    inputChange({ right: event.target.value });
  };
  return (
    <>
      <div className="left">
        <input value={leftValue} onChange={leftInputChangedHandler} />
        <span>GB</span>
      </div>
      <div className="center">
        <div className="label">
          {" "}
          {`<`}={`>`}{" "}
        </div>
      </div>
      <div className="right">
        <input
          value={rightValue}
          onChange={event => inputChange({ right: event.target.value })}
        />
        <span>MB</span>
      </div>
    </>
  );
};

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

export const App = () => {
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

export default App;
