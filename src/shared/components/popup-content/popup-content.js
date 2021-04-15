import React from "react";

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

export default Content;
