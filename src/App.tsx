import Modal from "./components/UI/Modal/Modal.tsx";
import { useState } from "react";
import { IButton } from "./types";
import Alert from './components/UI/Alert/Alert.tsx';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

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

  const closeOrOpenAlert = () => {
    setShowAlert(prevState => !prevState);
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

      <Alert
        type="warning"
        show={showAlert}
        onDismiss={closeOrOpenAlert}>
        This is a warning type alert
      </Alert>


      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="p-3 col-2">
            <p>lvl 1</p>
            <button className="btn btn-dark" onClick={closeOrOpenModal}>
              Open modal
            </button>
          </div>

          <div className="p-3 col-2">
            <p>lvl 2</p>
            <button className="btn btn-primary" onClick={closeOrOpenAlert}>
              Open alert
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
