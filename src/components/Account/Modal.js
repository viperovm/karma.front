import React from 'react';
import styles from './Modal.module.css';
import Heading from "../Heading";

const Modal = () => {
  return (
    <>
      <div className={styles.modal_background}>
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_body}>
            <div className="section-background">
              <Heading text={'Выберите рейтинг'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;