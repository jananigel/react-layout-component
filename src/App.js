import React, { useState } from "react";
import "./style.scss";
import HardDriveSizeCalculator from "./components/hard-drive-size-calculator/hard-drive-size-calculator.js";
import Modal from "./components/modal/modal.js";

export const App = () => {
  const [variables, setVariables] = useState({
    isShowModal: false
  });

  const onInfoClick = e => {
    setVariables({
      isShowModal: true
    });
  };

  const onModalClose = e => {
    setVariables({
      isShowModal: false
    });
  };

  return (
    <>
      <HardDriveSizeCalculator headerActionClick={onInfoClick} />
      {variables.isShowModal && <Modal closeClick={onModalClose} />}
    </>
  );
};

export default App;
