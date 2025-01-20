import Modal from "./components/UI/Modal/Modal.tsx";
import { useState } from "react";
import { IButton } from "./types";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const buttons: IButton[] = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => alert("clicked continue"),
    },

    {
      type: "danger",
      label: "Close",
      onClick: () => closeOrOpenModal(),
    },
  ];

  const closeOrOpenModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Modal
        show={showModal}
        onClose={closeOrOpenModal}
        buttons={buttons}
        title="Some kinda modal title"
      >
        <div>This is modal content</div>
      </Modal>

      <div className="container">
        <div className="p-3">
          <p>lvl 1</p>
          <button className="btn btn-dark" onClick={closeOrOpenModal}>
            Open modal
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
