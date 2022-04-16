import React from 'react'
import styles from './PasswordReset.module.css'
import {connect} from 'react-redux'
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import Heading from "../../components/Heading";
import {Link} from "react-router-dom";
import EntryForm from "../../components/Account/EntryForm";

const PasswordReset = () => {
  return (<>
    <AccountLayout page_name={'ВОССТАНОВЛЕНИЕ ПАРОЛЯ'}>
      <>
        <section className='account-section login'>
          <Heading text={'Восстановление Пароля'} center={true} padding={'0'} margin={'0 0 30px 0'}/>
          <EntryForm type={'reset'}/>
          <div className={styles.button_container}>
            <button className={'medium green'}>Восстановить</button>
          </div>
        </section>
      </>
    </AccountLayout>
  </>)
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset)