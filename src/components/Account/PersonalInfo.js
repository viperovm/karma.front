import React, {useEffect, useState} from 'react';
import styles from './PersonalInfo.module.css';
import {connect} from "react-redux";

const PersonalInfo = ({editing, user}) => {
  
  const [active, setActive] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    if(editing) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [editing])

  useEffect(() => {
    if(user && user.services) {
      let services = user.services.join('; ')
      setData({
        ...data,
        services: services,
      })
    }
  }, [user])


  console.log(user)
  
  return (
    <>
      <div className={styles.section_body}>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Имя:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active} value={user && user.full_name}/>
          </div>
        </div>
        {/*<div className={styles.section_row}>*/}
        {/*  <div className={styles.row_title}>Фамилия:</div>*/}
        {/*  <div className={styles.row_value}>*/}
        {/*    <input className={'dotted'} type="text" disabled={!active}/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={styles.section_row}>
          <div className={styles.row_title}>Дата рождения:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="date" disabled={!active} value={user && user.birthday}/>
          </div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Город:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active} value={user && user.city}/>
          </div>
        </div>

        <div className={styles.section_row}>
          <div className={styles.row_title}>Обо мне:</div>
          <div className={styles.row_value + ' ' + styles.full}>
            <textarea className={'dotted'} disabled={!active} rows={2} value={user && user.about}/>
          </div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.row_title}>Специализация:</div>
          <div className={styles.row_value + ' ' + styles.full}>
            <textarea className={'dotted'} disabled={!active} rows={2} value={data && data.services}/>
          </div>
        </div>

        <div className={styles.section_row}>
          <div className={styles.row_title}>Email:</div>
          <div className={styles.row_value}>
            <input className={'dotted'} type="text" disabled={!active} value={user && user.email}/>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps)(PersonalInfo)