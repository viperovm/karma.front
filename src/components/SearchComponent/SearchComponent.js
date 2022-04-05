import React, {useEffect, useState} from 'react';
import styles from './SearchComponent.module.css';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import instagram from './instagram.svg'
import instagram_white from './instagram_white.svg'
import phone from './phone.svg'
import vk from './vk.svg'

const SearchComponent = ({compact, color}) => {

  const {width} = useWindowDimensions()

  const [buttonOne, setButtonOne] = useState('instagram')
  const [buttonTwo, setButtonTwo] = useState('vk')
  const [buttonActive, setButtonActive] = useState('phone')

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (width < 1140) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width])

  const handleButton = (data, position) => {
    let temp = buttonActive
    setButtonActive(data)
    if(position === 'first') {
      setButtonOne(temp)
    } else if(position === 'second') {
      setButtonTwo(temp)
    }

  }

  const SmallButton = ({data, state, position, action, color}) => {
    return (
      <>
        <div className={`${styles.search_component_small_button} ${styles[position]} ${styles[data]}`} onClick={() => action(data, position)}>
          {color === 'white' ? <img src={data === 'instagram' ? instagram_white : data === 'vk' ? vk : phone} alt={data}/>
            :
            <img src={data === 'instagram' ? instagram : data === 'vk' ? vk : phone} alt={data}/>}
        </div>
      </>
    )
  }

  const BigButton = () => {
    return (
      <>
        <div className={styles.search_component_big_button}>
          Найти отзывы
        </div>
      </>
    )
  }

  const Search = ({data}) => {
    return (
      <>
        <input type="text" className={styles.search_component_input} placeholder={data === 'instagram' ? 'Введите id исполнителя' : data === 'vk' ? 'Введите id исполнителя' : 'Введите телефон исполнителя'}/>
      </>
    )
  }

  return (
    <>
      <div className={styles.search_component_wrapper}>


        {compact ? (
            <>
              <div className={styles.search_component_body + ' ' + styles.compact}>
                <div className={styles.search_component_row}>
                  <SmallButton data={buttonOne} position={'first'} action={handleButton}/>
                  <SmallButton data={buttonTwo} position={'second'} action={handleButton}/>
                  <BigButton/>
                </div>
                <div className={styles.search_component_row}>
                  <SmallButton data={buttonActive} position={'main'}/>
                  <Search data={buttonActive}/>
                </div>
              </div>
            </>
          )
          :
          (
            <>
              <div className={styles.search_component_body + ' ' + styles.full}>
                <div className={styles.search_component_row}>
                  <SmallButton data={buttonActive} position={'main'}/>
                  <SmallButton data={buttonOne} position={'first'} action={handleButton} color={color}/>
                  <SmallButton data={buttonTwo} position={'second'} action={handleButton} color={color}/>
                  <Search/>
                  <BigButton/>
                </div>
              </div>
            </>
          )
        }

      </div>
    </>
  );
};

export default SearchComponent;