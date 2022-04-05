import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({data, number}) => {
  return (
    <>
      <div className={styles.feature_card_body}>
        <div className={styles.feature_card_number}>{'0' + number}</div>
        <div className={styles.feature_card_content}>
          <div className={styles.feature_card_icon}><img src={data.icon} alt="icon"/></div>
          <div className={styles.feature_card_text}>
            <h6>{data.title}</h6>
            <p>{data.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;