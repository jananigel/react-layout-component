import React, { useState } from "react";
import "./style.scss";
import HardDriveSizeCalculator from "./components/hard-drive-size-calculator/hard-drive-size-calculator.js";

export const App = () => {
  return (
    <>
      <HardDriveSizeCalculator></HardDriveSizeCalculator>
    </>
  );
};

export default App;
