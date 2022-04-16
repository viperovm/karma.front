import React, {useEffect, useState} from 'react';
import styles from './EntryForm.module.css';

const EntryForm = ({type, action}) => {

  const handleInput = (e) => {
    const {name, value} = e.target
    action(name, value)
  }

  return (
    <>
      <div className={styles.entry_form}>
        {(type === 'register' || type === 'login' || type === 'reset') && <input className={'dotted'} name='email' type="email" placeholder='Email' onChange={handleInput}/>}
        {type === 'register' && <input className={'dotted'} name='name' type="text" placeholder='Имя пользователя' onChange={handleInput}/>}
        {(type === 'register' || type === 'login') && <input className={'dotted'} name='password' type="password" placeholder='Пароль' onChange={handleInput}/>}
        {type === 'register' && <input className={'dotted'} name='re_password' type="password" placeholder='Подтвердите пароль' onChange={handleInput}/>}
        {type === 'pass_confirm' && <input className={'dotted'} type="password" placeholder='Новый пароль' onChange={handleInput}/>}
        {type === 'pass_confirm' && <input className={'dotted'} type="password" placeholder='Подтвердите новый пароль' onChange={handleInput}/>}
      </div>
    </>
  );
};

export default EntryForm;