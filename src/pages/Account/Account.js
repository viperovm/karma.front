import React, {useState, useEffect} from 'react';
import styles from './Account.module.css';
import edit_icon from '../../assets/images/edit-small-grey.svg'
import arrow_up from '../../assets/images/arrow-up.svg'
import arrow_down from '../../assets/images/arrow-down.svg'
import stars from '../../assets/images/stars.svg'
import PersonalInfo from "../../components/Account";
import AccountsSection from "../../components/Account/AccountsSection";
import {reviews_data} from "../../data";
import ReviewComponent from "../../components/Account/ReviewComponent";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import AsideLayout from "../../layouts/AsideLayout";
import Heading from "../../components/Heading";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Account = () => {

  const {width} = useWindowDimensions()

  const [mobile, setMobile] = useState(false)

  const [edit, setEdit] = useState(false)

  const toggleEdit = () => {
    setEdit(!edit)
  }

  useEffect(() => {
    if(width<1140) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AccountLayout page_name={'МОЯ СТРАНИЦА'}>
        <>
          {!mobile && <AsideLayout name={'Воронцов Дмитрий'} username={'@Dmitriy32'}/>}
          <section className='account-section'>
            {mobile && <AsideLayout name={'Воронцов Дмитрий'} username={'@Dmitriy32'}>
              <Heading text={'Личная информация'} padding={'0'}>
                <div className={styles.account_section_personal_editing} onClick={toggleEdit} style={{cursor: 'pointer'}}>
                  <img src={edit_icon} alt="edit"/>
                </div>
              </Heading>
              <PersonalInfo editing={edit}/>
              <Heading text={'Аккаунты'} padding={'0'}/>

              <AccountsSection editing={edit}/>
              <Heading text={'Общая информация по отзывам'}/>

              <div className={styles.account_section_about_me_blocks}>
                <div className={styles.account_section_about_me_block}>
                  <div className={styles.account_section_about_me_block_heading}>
                    <div className={styles.account_section_about_me_block_title}>
                      Я исполнитель
                    </div>
                    <img src={arrow_up} alt="arrow_up"/>
                  </div>
                  <div className={styles.account_section_about_me_block_value}>
                    1
                  </div>
                </div>

                <div className={styles.account_section_about_me_block}>
                  <div className={styles.account_section_about_me_block_heading}>
                    <div className={styles.account_section_about_me_block_title}>
                      Я клиент
                    </div>
                    <img src={arrow_down} alt="arrow_down"/>
                  </div>
                  <div className={styles.account_section_about_me_block_value}>
                    0
                  </div>
                </div>

                <div className={styles.account_section_about_me_block}>
                  <div className={styles.account_section_about_me_block_heading}>
                    <div className={styles.account_section_about_me_block_title}>
                      Мой рейтинг
                    </div>
                    <img src={arrow_down} alt="arrow_down"/>
                  </div>

                  <div className={styles.account_section_about_me_block_value}>
                    <img src={stars} alt="stars"/> 4.0
                  </div>
                </div>
              </div>

              <div className='section-background'>
                <div className={styles.account_section_about_me_reviews_buttons_block}>
                  <button className='medium green'>
                    Отзывы обо мне
                  </button>
                  <button className='medium light'>
                    Мои отзывы
                  </button>

                </div>
                <div className={styles.account_section_about_me_reviews_block}>
                  {reviews_data.map(item => (
                    <ReviewComponent data={item} mobile={mobile}/>
                  ))}
                </div>
              </div>
            </AsideLayout>}
            {!mobile &&  (<>
              <Heading text={'Личная информация'}>
                <div className={styles.account_section_personal_editing} onClick={toggleEdit} style={{cursor: 'pointer'}}>
                  <img src={edit_icon} alt="edit"/> Редактировать
                </div>
              </Heading>
              <PersonalInfo editing={edit}/>
              <Heading text={'Аккаунты'}/>

              <AccountsSection editing={edit}/>
              <Heading text={'Общая информация по отзывам'}/>

              <div className={styles.account_section_about_me_blocks}>
                <div className={styles.account_section_about_me_block}>
                  <div className={styles.account_section_about_me_block_heading}>
                    <div className={styles.account_section_about_me_block_title}>
                      Я исполнитель
                    </div>
                    <img src={arrow_up} alt="arrow_up"/>
                  </div>
                  <div className={styles.account_section_about_me_block_value}>
                    1
                  </div>
                </div>

                <div className={styles.account_section_about_me_block}>
                  <div className={styles.account_section_about_me_block_heading}>
                    <div className={styles.account_section_about_me_block_title}>
                      Я клиент
                    </div>
                    <img src={arrow_down} alt="arrow_down"/>
                  </div>
                  <div className={styles.account_section_about_me_block_value}>
                    0
                  </div>
                </div>

                <div className={styles.account_section_about_me_block}>
                  <div className={styles.account_section_about_me_block_heading}>
                    <div className={styles.account_section_about_me_block_title}>
                      Мой рейтинг
                    </div>
                    <img src={arrow_down} alt="arrow_down"/>
                  </div>

                  <div className={styles.account_section_about_me_block_value}>
                    <img src={stars} alt="stars"/> 4.0
                  </div>
                </div>
              </div>

              <div className='section-background'>
                <div className={styles.account_section_about_me_reviews_buttons_block}>
                  <button className='medium green'>
                    Отзывы обо мне
                  </button>
                  <button className='medium light'>
                    Мои отзывы
                  </button>

                </div>
                <div className={styles.account_section_about_me_reviews_block}>
                  {reviews_data.map(item => (
                    <ReviewComponent data={item}/>
                  ))}
                </div>
              </div>
            </>)}
          </section>
        </>
      </AccountLayout>
    </>
  );
};

export default Account;