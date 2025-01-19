import BackDrop from '../BackDrop/BackDrop.tsx';
import React, { ReactNode } from 'react';

interface Props {
  show?: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
}

const Modal: React.FC<Props> = ({
    show = true,
    onClose, title = 'Some kinda modal title',
    children
  }
) => {

  return (
    <>
      <BackDrop show={show}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;