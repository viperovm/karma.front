import React, {useState} from 'react';
import styles from './ReviewComponent.module.css';
import stars_white from "../../assets/images/stars-white.svg";
import chevron_down from "../../assets/images/chevron-down-white.svg";
import thumb_up from "../../assets/images/thumb-up.svg";
import thumb_down from "../../assets/images/thumb-down.svg";
import avatar from "../../assets/images/small-user-avatar.svg";

const ReviewComponent = ({data, mobile}) => {

  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
      <>
        <div key={data.id} className={styles.account_section_about_me_review_body} style={{borderRadius: active ? '0 15px 0 0' : '0 15px 15px 15px', marginBottom: active ? '0' : '50px',}}>

          <img src={data.image} alt="avatar" className={styles.avatar}/>

          <div className={styles.account_section_about_me_review_heading}>

            <div className={styles.account_section_about_me_review_heading_name}>
              {data.name}
            </div>
            <div className={styles.account_section_about_me_review_heading_rating}>
              <img src={stars_white} alt="stars white"/>
              4.0
              <img src={chevron_down} alt="chevron down"/>
            </div>

          </div>

          {!mobile && <div className={styles.account_section_about_me_review_likes}>
            <img src={thumb_up} alt="thumb up"/>
            0
            <img src={thumb_down} alt="thumb down"/>
          </div>}

          <div className={styles.account_section_about_me_review_review}>

            {mobile && <div className={styles.account_section_about_me_review_title}>
              <div className={styles.account_section_about_me_review_likes}>
                <img src={thumb_up} alt="thumb up"/>
                0
                <img src={thumb_down} alt="thumb down"/>
              </div>
              <div className={styles.account_section_about_me_review_service}>
                Услуга: <span>{data.service}</span>
              </div>
            </div>}

            {!mobile && <div className={styles.account_section_about_me_review_service}>
              Услуга: <span>{data.service}</span>
            </div>}
            <div className={styles.account_section_about_me_review_text}>
              {data.text}
            </div>

          </div>

          <div className={styles.account_section_about_me_review_buttons}>

            <div className={styles.account_section_about_me_review_buttons_left}>
              <button className='small light'>НАПИСАТЬ ОТВЕТ</button>
              <div onClick={toggleActive}>
                ВСЕГО ОТВЕТОВ: 1
                <img src={chevron_down} alt="chevron down"/>
              </div>
            </div>
            <div className={styles.account_section_about_me_review_buttons_right}>
              <button className='small light outlined'>ПОЖАЛОВАТЬСЯ</button>
            </div>

          </div>

        </div>
        {active && (
          <div
            className={styles.account_section_about_me_response_body}
            style={{borderRadius: active ? '0 0 15px 15px' : '0 0 0 0', marginBottom: active ? '50px' : '0',}}
          >
            {data.responses.map((item, index) => (
              <div key={index} className={styles.account_section_about_me_response_wrapper}>
                <div>
                  <div className={styles.account_section_about_me_response_avatar}>
                    <img src={item.avatar ? item.avatar : avatar} alt="avatar"/>
                  </div>
                  <div className={styles.account_section_about_me_response_data_set}>
                    <div className={styles.account_section_about_me_response_data_name}>
                      {item.name}
                    </div>
                    <div className={styles.account_section_about_me_response_data_email}>
                      {item.email}
                    </div>
                    <div className={styles.account_section_about_me_response_data_text}>
                      {item.text}
                    </div>
                  </div>
                </div>
                <div className={styles.account_section_about_me_response_button_set}>
                  <button className='small white'>РЕДАКТИРОВАТЬ</button>
                  <button className='small white'>УДАЛИТЬ</button>
                </div>
              </div>
            ))}
        </div>)}
      </>

      )
};

export default ReviewComponent;