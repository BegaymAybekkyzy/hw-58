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
  show = true,
  onClose,
  title = "Modal title",
  children,
  buttons,
}) => {
  return (
    <>
      <BackDrop show={show} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {buttons
                ? buttons.map((btn) => (
                    <button
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
