import React, {useEffect, useState} from 'react'
import styles from './Register.module.css'
import {connect} from 'react-redux'
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import Heading from "../../components/Heading";
import {Link, Navigate, useNavigate} from "react-router-dom";
import EntryForm from "../../components/Account/EntryForm";
import {signupError} from "../../redux/actions/authActions";
import axios from "axios";

const Register = ({isAuthenticated, signupError}) => {

  const [data, setData] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleData = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(data)
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/`,
        body,
        config
      ).then(() => navigate('/login'))



    } catch (err) {
      console.error(err)
      signupError(err)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account')
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      <AccountLayout page_name={'РЕГИСТРАЦИЯ'}>
        <>
          <section className='account-section login'>
            <Heading text={'Регистрация'} center={true} padding={'0'} margin={'0 0 30px 0'}>
              <div>Уже зарегистрированы? <Link to={'/login'}>Авторизуйтесь</Link></div>
            </Heading>
            <EntryForm type={'register'} action={handleData}/>
            <div className={styles.button_container}>
              <button className={'medium green'} onClick={handleSubmit}>Регистрация</button>
            </div>
          </section>
        </>
      </AccountLayout>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {
  signupError,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)