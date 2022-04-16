import React from 'react'
import styles from './PasswordConfirm.module.css'
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import Heading from "../../components/Heading";
import {Link} from "react-router-dom";
import EntryForm from "../../components/Account/EntryForm";

const PasswordConfirm = () => {
  return (<>
    <AccountLayout page_name={'СМЕНА ПАРОЛЯ'}>
      <>
        <section className='account-section login'>
          <Heading text={'Введите новый пароль'} center={true} padding={'0'} margin={'0 0 30px 0'}/>

          <EntryForm type={'pass_confirm'}/>

          <div className={styles.button_container}>
            <button className={'medium green'}>Вход</button>
          </div>
        </section>
      </>
    </AccountLayout>
  </>)
}

export default PasswordConfirm