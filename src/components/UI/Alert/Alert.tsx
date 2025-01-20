import BackDrop from '../BackDrop/BackDrop.tsx';
import React from 'react';

interface Props {
  type?: 'success' | 'primary' | 'warning' | 'danger';
  onDismiss?: () => void;
  show?: boolean;
  children: React.ReactNode;
}

const Alert: React.FC<Props> = ({type = 'primary', onDismiss, show = false, children}) => {
  return (
    <>
      <BackDrop show={show} onCLickBackDrop={onDismiss}/>
      <div
        className={`alert mx-auto my-4 alert-${type}`}
        style={
          {
            display: show ? 'block' : 'none',
            position: 'fixed',
            width: '500px',
            height: 'auto',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          }
        }
        role="alert">
        <div className="d-flex justify-content-sm-between ">
          {children}
          {onDismiss ?
            <button className="btn-close" onClick={onDismiss}></button>
            : null
          }

        </div>
      </div>
    </>

  );
};

export default Alert;