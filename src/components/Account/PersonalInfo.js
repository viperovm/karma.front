import React, {useEffect, useState} from 'react';
import styles from './PersonalInfo.module.css';

const PersonalInfo = ({editing}) => {
  
  const [active, setActive] = useState(true)

  useEffect(() => {
    if(editing) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [editing])
  
  return (
    <>
      <div className={styles.section_body}>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Имя:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active}/>
          </div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Фамилия:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active}/>
          </div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Дата рождения:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="date" disabled={!active}/>
          </div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Город:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active}/>
          </div>
        </div>

        <div className={styles.section_row}>
          <div className={styles.row_title}>Обо мне:</div>
          <div className={styles.row_value + ' ' + styles.full}>
            <textarea className={'dotted'} disabled={!active} rows={2}/>
          </div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Специализация:</div>
          <div className={styles.row_value + ' ' + styles.full}>
            <textarea className={'dotted'} disabled={!active} rows={2}/>
          </div>
        </div>

        <div className={styles.section_row}>
          <div className={styles.row_title}>Email:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;