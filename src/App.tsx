import Modal from './components/UI/Modal/Modal.tsx';
import { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeOrOpenModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <Modal show={showModal} onClose={closeOrOpenModal}>
        <div className="p-3">This is modal content</div>
      </Modal>

      <div className="container">
        <div className="p-3">
          <p>lvl 1</p>
          <button className="btn btn-dark" onClick={closeOrOpenModal}>Open modal</button>
        </div>
      </div>

    </>
  );
};

export default App;
