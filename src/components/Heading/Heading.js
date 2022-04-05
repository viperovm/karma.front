import React from 'react';
import styles from './Heading.module.css';

const Heading = ({text, children, padding}) => {
  return (
    <>
      <div className={styles.account_section_personal_heading}>
        <div className={styles.account_section_personal_title} style={{padding: padding ? padding : '0 0 0 30px'}}>
          {text}
        </div>
        {children}
      </div>
    </>
  );
};

export default Heading;