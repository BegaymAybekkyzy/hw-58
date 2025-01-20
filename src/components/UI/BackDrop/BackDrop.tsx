import React from "react";

interface Props {
  show?: boolean;
  onCLickBackDrop?: React.MouseEventHandler;
}

const BackDrop: React.FC<Props> = ({ show = false, onCLickBackDrop }) => {
  return (
    <>
      <div
        className={`modal-backdrop show`}
        style={{ display: show ? "block" : "none", zIndex: 1 }}
        onClick={onCLickBackDrop}
      />
    </>
  );
};

export default BackDrop;
