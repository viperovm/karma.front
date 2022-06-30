import React, {useEffect, useState} from 'react';
import styles from './Review.module.css';
import {connect} from 'react-redux'
import {useNavigate} from "react-router-dom";
import AsideLayout from "../../layouts/AsideLayout";
import Heading from "../../components/Heading";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import Modal from "../../components/Account/Modal";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {login} from "../../redux/actions/authActions";

const Review = ({isAuthenticated, user}) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  const {width} = useWindowDimensions()

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if(width<1140) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width])

  return (
    <>
      <AccountLayout page_name={'добавить отзыв'}>
        <>
          {!mobile && <AsideLayout name={user?.full_name} username={user?.name} page_name={'ДОБАВИТЬ ОТЗЫВ'}/>}
          <section className='account-section'>
            {mobile ? (
              <>

                <Heading text={'Кому вы хотите оставить отзыв?'} padding={'0'}/>
                {/*<Modal/>*/}

                <div className='section-background'>
                  <div className={styles.review_select_wrapper}>
                    <div className={styles.review_select}>
                      Исполнителю
                    </div>
                    <div className={styles.review_select}>
                      Клиенту
                    </div>
                  </div>
                </div>

                <Heading text={'Введите номер телефона или id исполнителя'} padding={'20px 0 0 0'}/>


                <SearchComponent compact={true}/>

                <div className='section-background'>
                  <Heading padding={'0'} text={'Введите номер телефона или id исполнителя'}/>
                  <input className={'dotted'} style={{width: '100%', marginBottom: '30px'}}/>
                  <Heading padding={'0'} text={'Выберите / добавьте специализацию'}/>
                  <input className={'dotted'} style={{width: '100%', marginBottom: '30px', display: 'block'}}/>
                  <input className={'dotted'} style={{width: '100%', marginBottom: '30px', display: 'block'}}/>
                  <Heading padding={'0'} text={'Выберите наиболее подходящий комментарий или оставьте свой'}/>
                  <div className={styles.add_review_secondary_text}>
                    Стандартные комментарии можно редактировать
                    перед и после сохранения
                  </div>
                  <div className={styles.add_review_standard_reviews}>
                    <div>Отличный исполнитель! Всё понравилось!</div>
                    <div>Хороший исполнитель, всё хорошо</div>
                    <div>Исполнитель так себе...</div>
                    <div>Исполнитель не понравился</div>
                  </div>
                  <textarea className={'dotted'} style={{width: '100%', marginBottom: '30px', display: 'block'}}/>
                </div>

              </>
              )
            :
              (
                <>

                  <Heading text={'Кому вы хотите оставить отзыв?'}/>
                  {/*<Modal/>*/}

                  <div className='section-background'>
                    <div className={styles.review_select_wrapper}>
                      <div className={styles.review_select}>
                        Исполнителю
                      </div>
                      <div className={styles.review_select}>
                        Клиенту
                      </div>
                    </div>
                  </div>

                  <Heading text={'Введите номер телефона или id исполнителя'}/>


                  <div className='section-background'>
                    <SearchComponent color={'white'}/>
                  </div>

                  <div className='section-background'>
                    <Heading padding={'0'} text={'Введите номер телефона или id исполнителя'}/>
                    <input className={'dotted'} style={{width: '50%', marginBottom: '30px'}}/>
                    <Heading padding={'0'} text={'Выберите / добавьте специализацию'}/>
                    <input className={'dotted'} style={{width: '50%', marginBottom: '30px', display: 'block'}}/>
                    <input className={'dotted'} style={{width: '50%', marginBottom: '30px', display: 'block'}}/>
                    <Heading padding={'0'} text={'Выберите наиболее подходящий комментарий или оставьте свой'}/>
                    <div className={styles.add_review_secondary_text}>
                      Стандартные комментарии можно редактировать
                      перед и после сохранения
                    </div>
                    <div className={styles.add_review_standard_reviews}>
                      <div>Отличный исполнитель! Всё понравилось!</div>
                      <div>Хороший исполнитель, всё хорошо</div>
                      <div>Исполнитель так себе...</div>
                      <div>Исполнитель не понравился</div>
                    </div>
                    <textarea className={'dotted'} style={{width: '50%', marginBottom: '30px', display: 'block'}}/>
                  </div>

                </>
              )}

          </section>
        </>
      </AccountLayout>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})


const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Review);