import React from 'react';
import styles from './AdvantageCard.module.css';

const AdvantageCard = ({data}) => {
  return (
    <>
      <div className={styles.advantage_card}>
        <img src={data.image} alt="card"/>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </>
  );
};

export default AdvantageCard;