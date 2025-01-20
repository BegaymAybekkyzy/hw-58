import React from "react";
import { motion } from "framer-motion";

interface Props {
  show?: boolean;
  onCLickBackDrop?: React.MouseEventHandler;
}

const BackDrop: React.FC<Props> = ({ show = false, onCLickBackDrop }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className={`modal-backdrop show`}
        style={{ display: show ? "block" : "none", zIndex: 1 }}
        onClick={onCLickBackDrop}
      />
    </>
  );
};

export default BackDrop;
