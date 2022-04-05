import React, {useEffect, useState} from 'react';
import styles from './Search.module.css';
import arrow_up from '../../assets/images/arrow-up.svg'
import arrow_down from '../../assets/images/arrow-down.svg'
import stars from '../../assets/images/stars.svg'
import SearchComponent from "../../components/SearchComponent";
import ReviewComponent from "../../components/Account/ReviewComponent";
import {reviews_data} from "../../data";
import AsideLayout from "../../layouts/AsideLayout";
import Heading from "../../components/Heading";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import edit_icon from "../../assets/images/edit-small-grey.svg";
import PersonalInfo from "../../components/Account";
import AccountsSection from "../../components/Account/AccountsSection";

const Search = () => {

  const {width} = useWindowDimensions()

  const [mobile, setMobile] = useState(false)

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
      <AccountLayout page_name={'Поиск'}>
        <>
          {!mobile && <AsideLayout name={'Воронцов Дмитрий'} username={'@Dmitriy32'} />}
          <section className='account-section'>
            {mobile && (
              <>
                <Heading text={'Введите номер телефона или id исполнителя'} padding={'0'}/>
                <SearchComponent compact={true}/>

                <Heading text={'Общая информация по отзывам'} padding={'20px 0 0 0'}/>

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

                <Heading text={'Общая информация по отзывам'} padding={'0'}/>

                <button className='medium green'>
                  Оставить отзыв
                </button>

                <div className='section-background'>



                  <div className={styles.account_section_about_me_reviews_block}>
                    {reviews_data.map(item => (
                      <ReviewComponent data={item} mobile={mobile}/>
                    ))}
                  </div>
                </div>
              </>
            )}

            {!mobile && (
              <>
                <Heading text={'Введите номер телефона или id исполнителя'}/>
                <div className='section-background'>
                  <SearchComponent color={'white'}/>
                </div>
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

                <Heading text={'Отзывы по телефону/id'}>
                  <button className='medium green'>
                    Оставить отзыв
                  </button>
                </Heading>

                <div className='section-background'>

                  <div className={styles.account_section_about_me_reviews_block}>
                    {reviews_data.map(item => (
                      <ReviewComponent data={item}/>
                    ))}
                  </div>
                </div>
              </>
            )}

          </section>
        </>
      </AccountLayout>
    </>
  );
};

export default Search;