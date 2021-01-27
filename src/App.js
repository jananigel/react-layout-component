import React from "react";
import "./style.scss";
import ThreeRowsLayout from "./layouts/three-rows/three-rows-layout.js";

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

const Content = () => {
  return (
    <>
      <div className="left">
        <input />
        <span>GB</span>
      </div>
      <div className="center">
        <div className="label"> = </div>
      </div>
      <div className="right">
        <input />
        <span>MB</span>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <button>Clear</button>
    </>
  );
};

export const App = () => {
  return (
    <>
      <ThreeRowsLayout
        header={<Header />}
        content={<Content />}
        footer={<Footer />}
      />
    </>
  );
};

export default App;
