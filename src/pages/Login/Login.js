import React, {useEffect, useState} from 'react'
import styles from './Login.module.css'
import {connect} from 'react-redux'
import Heading from "../../components/Heading";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import EntryForm from "../../components/Account/EntryForm";
import {Link, useNavigate} from "react-router-dom";
import {login} from '../../redux/actions/authActions'

const Login = ({login, isAuthenticated}) => {

  const navigate = useNavigate()

  const [data, setData] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account')
    }
  }, [isAuthenticated, navigate])

  const handleData = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }
  const handleSubmit = () => {
    login(data)
  }

  return (<>
      <AccountLayout page_name={'ВХОД'}>
        <>
          <section className='account-section login'>
            <Heading text={'Вход'} center={true} padding={'0'} margin={'0 0 30px 0'}>
              <div>Нет учетной записи? <Link to={'/register'}>Зарегистрируйтесь</Link></div>
            </Heading>
            <EntryForm type={'login'} action={handleData}/>
            <Heading center={true} padding={'0'} margin={'0 0 30px 0'}>
              <div><Link to={'/password-reset'}>Забыли пароль?</Link></div>
            </Heading>
            <div className={styles.button_container}>
              <button className={'medium green'} onClick={handleSubmit}>Вход</button>
            </div>
          </section>
        </>
      </AccountLayout>
    </>)
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)