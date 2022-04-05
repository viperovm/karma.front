import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './MainLayout.module.css'
import logo from '../../assets/images/logo-light.svg'
import search from '../../assets/images/search.svg'
import edit from '../../assets/images/edit.svg'
import user from '../../assets/images/user.svg'
import telegram from '../../assets/images/telegram.svg'
import instagram from '../../assets/images/instagram.svg'
import vk from '../../assets/images/vk.svg'

const MainLayout = ({children}) => {

  const navigate = useNavigate()

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.logo_section}>
            <div className={styles.logo_wrapper} onClick={() => navigate('/')}>
              <div className={styles.logo}>
                <img src={logo} alt="logo"/>
              </div>
              <div className={styles.logo_title}>
                Karma-N
              </div>
            </div>
            <div className={styles.logo_text}>
              Поиск отзывов о физических
              и юридических лицах по номеру телефона
            </div>
          </div>
          <nav className={`${styles.header_nav} ${scroll > 20 ? styles.transformed : ''}`}>
            <ul>
              <li className={styles.nav_el}><Link to="/search"><img src={search} alt="search"/></Link></li>
              <li className={styles.nav_el}><Link to="/reviews"><img src={edit} alt="review"/></Link></li>
              <li className={styles.nav_el}><Link to="/account"><img src={user} alt="account"/></Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer_wrapper}>
            <div className={styles.logo_section}>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                  <img src={logo} alt="logo"/>
                </div>
                <div className={styles.logo_title}>
                  Karma-N <br/>
                  <span>© {new Date().getFullYear()}</span>
                </div>
              </div>
              <div className={styles.logo_text}>
                Система рейтинга исполнителей услуг
                и клиентов по номеру телефона
              </div>
            </div>
            <div className={styles.footer_col_wrapper}>
              <div className={styles.footer_col}>
                <div className={styles.footer_col_heading}>
                  МЕНЮ
                </div>
                <div className={styles.footer_col_content}>
                  <nav className={styles.footer_nav}>
                    <ul>
                      <li className={styles.footer_nav_el}>
                        <Link to="#">
                          Вход/регистрация
                        </Link>
                      </li>
                      <li className={styles.footer_nav_el}>
                        <Link to="#">
                          Поиск отзывов
                        </Link>
                      </li>
                      <li className={styles.footer_nav_el}>
                        <Link to="#">
                          Оставить отзыв
                        </Link>
                      </li>
                      <li className={styles.footer_nav_el}>
                        <Link to="#">
                          Личный кабинет
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className={styles.footer_col}>
                <div className={styles.footer_col_heading}>
                  контакты
                </div>
                <div className="{styles.footer_col_content">
                  <div className={styles.contacts}>
                    <ul>
                      <li><Link to="#"><img src={telegram} alt="telegram"/>@x3mart_test_bot</Link></li>
                      <li><Link to="#"><img src={instagram} alt="instagram"/>@x3mart_test_bot</Link></li>
                      <li><Link to="#"><img src={vk} alt="vk"/>@x3mart_test_bot</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;