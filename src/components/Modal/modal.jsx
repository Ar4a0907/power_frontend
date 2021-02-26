import React from 'react';
import modalStyle from './modalStyles.module.scss';

const Modal = ({children, className, modalIsOpen, buttons,...classes}) => {

    const modalClass = Object.entries(classes).map(([key, value]) =>
        modalStyle[key] !== undefined ? modalStyle[key] : '').join(' ') + ' ' + (className ? className : '')

    return (
        <>
            {modalIsOpen ?
                <div className={modalStyle.modalContainer}>
                    <div className={modalClass + ' ' + modalStyle.modalContent}>
                        {children}
                    </div>
                </div> : null}
        </>
    )
}

export default Modal