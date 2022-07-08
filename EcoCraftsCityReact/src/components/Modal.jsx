import React, { useContext, useState } from "react";
import Modal from "react-modal";
import AppContext from "../context/AppContext";
const EcoModal = () => {
  const { open, setOpen, modalData } = useContext(AppContext);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  console.log(modalData);
  return (
    <>
      <Modal isOpen={open} style={customStyles} contentLabel="Example Modal">
        <button onClick={() => setOpen(false)}>close</button>
        {modalData &&
          modalData.inputs.map(({ inputName }) => (
            <input name={inputName} placeholder={inputName} />
          ))}
        <h1 style={modalData.modalStyles}>{modalData.title}</h1>
        <p>{modalData.description}</p>
        {modalData.button ? <button>Hello</button> : null}
      </Modal>
    </>
  );
};

export default EcoModal;
