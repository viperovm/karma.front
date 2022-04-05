import React from 'react';
import SearchComponent from "../SearchComponent";
import styles from "./TitleSection.module.css";
import background from "../../assets/images/background.png";
import mobile_background from "../../assets/images/mobile-background.png";
import mobile_background2 from "../../assets/images/mobile-background2.png";
import arrow from '../../assets/images/arrow.svg'
import telegram from '../../assets/images/telegram-rounded-blue.svg'
import {Link} from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const TitleSection = () => {
  const { width } = useWindowDimensions();

  const setBackground = () => {
    if(width<1140) {
      return ''
    } else {
      return background
    }
  }

  return (
    <div className={styles.home_main_background} style={{backgroundImage: 'url(' + setBackground() + ')'}}>
      <div className={styles.home_main_background_gradient}/>
      {width<1140 && (<div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{backgroundImage: 'url(' + mobile_background2 + ')', backgroundSize: 'cover', backgroundPosition: 'bottom', marginBottom: '-2px'}}>
          <div className="container narrow">
            <div className={styles.home_main_section}>
              <h2>
                Поиск отзывов
                о исполнителях услуг и клиентах по номеру телефона
              </h2>
              <div className={styles.home_main_section_text}>
                Узнай все стороны своего исполнителя,
                прими правильное решение!
                <img src={arrow} alt="arrow"/>
              </div>
              <SearchComponent compact={true}/>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: 'url(' + mobile_background + ')', backgroundSize: 'cover', backgroundPosition: 'bottom', marginTop: '-2px'}}>
          <div className="container narrow">
            <div className={styles.home_main_section_telegram}>
              <img src={telegram} alt="telegram"/>
              <div className={styles.home_main_section_telegram_link}>
                <Link to="#">
                  @x3mart_test_bot
                </Link>
                Наш телеграм бот
              </div>
            </div>
          </div>
        </div>
      </div>)}
      {width>=1140 && <div className="container">
        <div className={styles.home_main_section}>
          <h2>
            Поиск отзывов
            о исполнителях услуг и клиентах по номеру телефона
          </h2>
          <div className={styles.home_main_section_text}>
            Узнай все стороны своего исполнителя,
            прими правильное решение!
            <img src={arrow} alt="arrow"/>
          </div>
          <SearchComponent compact={true}/>
          <div className={styles.home_main_section_telegram}>
            <img src={telegram} alt="telegram"/>
            <div className={styles.home_main_section_telegram_link}>
              <Link to="#">
                @x3mart_test_bot
              </Link>
              Наш телеграм бот
            </div>
          </div>
        </div>
      </div>}

    </div>
  );
};

export default TitleSection;