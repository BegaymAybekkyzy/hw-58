import BackDrop from "../BackDrop/BackDrop.tsx";
import React, { ReactNode } from "react";
import { IButton } from "../../../types";

interface Props {
  show: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
  buttons?: IButton[];
}

const Modal: React.FC<Props> = ({
  show = false,
  onClose,
  title = "Modal title",
  children,
  buttons,
}) => {
  return (
    <>
      <BackDrop show={show} onCLickBackDrop={onClose}/>
      <div className="modal show"
           style={
        {
          display: show ? "block" : "none" ,
          position: "fixed",
          width: "500px",
          height: "auto",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }
      }>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {buttons
                ? buttons.map((btn, index) => (
                    <button
                      key={index}
                      className={`btn btn-${btn.type}`}
                      onClick={() => btn.onClick()}
                    >
                      {btn.label}
                    </button>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
