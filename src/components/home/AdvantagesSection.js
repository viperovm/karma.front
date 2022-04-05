import React from 'react';
import styles from './AdvantagesSection.module.css';
import advantage1 from '../../assets/images/advantage1.png'
import advantage2 from '../../assets/images/advantage2.png'
import advantage3 from '../../assets/images/advantage3.png'
import logo from '../../assets/images/logo-light.svg'
import AdvantageCard from "./AdvantageCard";

const data = [
  {
    id: 1,
    image: advantage1,
    title: 'Проверенные специалисты',
    text: 'Каждый день клиенты делятся конструктивными отзывами, чтобы определить надежного исполнителя услуг.'
  },
  {
    id: 2,
    image: advantage2,
    title: 'Продвижение услуг',
    text: 'Исполнители могут продвигать услуги за счет правильной агитации своих клиентов к оставлению отзывов, тем самым управлять репутацией.'
  },
  {
    id: 3,
    image: advantage3,
    title: 'Регулирование',
    text: 'Сервис Karma-N является независимой площадкой по отзывам среди исполнителей и клиентов услуг. Ежедневно наша команда модераторов проверяют отзывы на подлинность. Мы также следим за уважительным отношением пользователей друг к другу.'
  },
]

const AdvantagesSection = () => {
  return (
    <>
      <section className={styles.advantages_section}>
        <div className="container">
          <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
          <div className={styles.advantages_logo}>
            <img src={logo} alt="logo"/>
          </div>
          <div className={styles.advantages_cards_set}>
            {data.map(item => (
              <AdvantageCard key={item.id} data={item}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvantagesSection;