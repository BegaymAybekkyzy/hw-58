import BackDrop from '../BackDrop/BackDrop.tsx';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { popup } from '../FramerVariants/FramerVariants.tsx';

interface Props {
  type?: 'success' | 'primary' | 'warning' | 'danger';
  onDismiss?: () => void;
  show?: boolean;
  children: React.ReactNode;
  clickDismissable?: boolean;
}

const Alert: React.FC<Props> = ({type = 'primary', onDismiss, show = false, children, clickDismissable = false}) => {
  return (
      <AnimatePresence>
        {show && (
          <>
          < BackDrop show={show}/>
          <motion.div
            variants={popup}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className={`alert mx-auto my-4 alert-${type}`}
            onClick={clickDismissable ? onDismiss : undefined}
            style={
              {
                display: show ? 'block' : 'none',
                position: 'fixed',
                width: '500px',
                height: 'auto',
                top: '20%',
                left: '35%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2
              }
            }
            role="alert">
            <div className="d-flex justify-content-sm-between ">
              {children}
              {clickDismissable ?
                null
                : <button className="btn-close" onClick={onDismiss}></button>
              }

            </div>
          </motion.div>
        </>)
        }
      </AnimatePresence>
  );
};

export default Alert;