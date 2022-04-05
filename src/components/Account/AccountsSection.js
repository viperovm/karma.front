import React, {useEffect, useState} from 'react';
import styles from './AccountsSection.module.css';
import phone from '../../assets/images/phone-icon.svg'
import insta from '../../assets/images/insta-icon.svg'
import vk from '../../assets/images/vk-icon.svg'

const AccountsSection = ({editing}) => {

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
          <div className={styles.row_title}>Телефон:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active}/>
          </div>
          <div className={styles.row_icon}><img src={phone} alt="phone"/></div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Инстаграм id:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active}/>
          </div>
          <div className={styles.row_icon}><img src={insta} alt="insta"/></div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Вконтакте id:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active}/>
          </div>
          <div className={styles.row_icon}><img src={vk} alt="vk"/></div>
        </div>

      </div>
    </>
  );
};

export default AccountsSection;