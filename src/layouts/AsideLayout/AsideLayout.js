import React, {useEffect, useState, useRef} from 'react';
import styles from './AsideLayout.module.css';
import avatar from "../../assets/images/dumb-avatar.svg";
import plus from "../../assets/images/plus.svg";
import chevron_green from "../../assets/images/chevron-right-green.svg";
import chevron_white from "../../assets/images/chevron-right-white.svg";
import {Link} from "react-router-dom";
import qr from "../../assets/images/qr.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {update_user_avatar} from "../../redux/actions/authActions";
import {connect} from "react-redux";

const AsideLayout = ({update_user_avatar, user, user_avatar, name, username, qr_code, children, page_name}) => {

  const hiddenFileInput = useRef(null);

  const {width} = useWindowDimensions()

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if(width<1140) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width])

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = e => {
    const fileUploaded = e.target.files[0];
    update_user_avatar(user.id, fileUploaded)
  };

  return (
    <>
      {!mobile && (<aside className={styles.account_aside}>
        <div className={styles.account_aside_top_wrapper}>
          <div className={styles.account_aside_avatar}>
            <img src={user_avatar ? user_avatar : avatar} alt="avatar"/>
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{display: 'none'}}
            />
            <button onClick={handleClick}><img src={plus} alt="plus"/></button>
          </div>
          <div className={styles.account_aside_name}>{name}</div>
          <div className={styles.account_aside_mail}>{username}</div>
          <div className={styles.account_aside_menu}>
            <ul>
              <li className={page_name === 'МОЯ СТРАНИЦА' ? styles.active : ''}><img src={page_name === 'МОЯ СТРАНИЦА' ? chevron_white : chevron_green} alt=""/><Link to='/account'>МОЯ СТРАНИЦА</Link></li>
              <li className={page_name === 'ДОБАВИТЬ ОТЗЫВ' ? styles.active : ''}><img src={page_name === 'ДОБАВИТЬ ОТЗЫВ' ? chevron_white : chevron_green} alt=""/><Link to='/reviews'>ДОБАВИТЬ ОТЗЫВ</Link></li>
              <li className={page_name === 'ПОИСК ОТЗЫВОВ' ? styles.active : ''}><img src={page_name === 'ПОИСК ОТЗЫВОВ' ? chevron_white : chevron_green} alt=""/><Link to='/search'>ПОИСК ОТЗЫВОВ</Link></li>
            </ul>
          </div>
          <div className={styles.account_aside_qr_section}>
            <img src={qr_code ? qr_code : qr} alt="qr"/>
            <p>Поделиться QR-кодом для отзыва</p>
          </div>
        </div>
        <div className={styles.account_delete_section}>
          <button><span>УДАЛИТЬ АККАУНТ</span></button>
        </div>
      </aside>)}
      {mobile && (
        <>
        <aside className={styles.account_aside}>
          <div className={styles.account_aside_top_wrapper}>
            <div className={styles.account_aside_avatar}>
              <img src={user_avatar ? user_avatar : avatar} alt="avatar"/>
              <button><img src={plus} alt="plus"/></button>
            </div>
            <div className={styles.account_aside_name}>{name}</div>
            <div className={styles.account_aside_mail}>{username}</div>
          </div>
        </aside>

        {children}
        <aside className={styles.account_aside} style={{marginTop: '30px'}}>
          <div className={styles.account_aside_qr_section}>
            <img src={qr_code ? qr_code : qr} alt="qr"/>
            <p>Поделиться QR-кодом для отзыва</p>
          </div>
        <div className={styles.account_delete_section}>
          <button><span>УДАЛИТЬ АККАУНТ</span></button>
        </div>
        </aside>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
})

const mapDispatchToProps = {
  update_user_avatar,
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideLayout)