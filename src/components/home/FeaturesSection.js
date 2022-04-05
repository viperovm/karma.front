import React from 'react';
import styles from './FeaturesSection.module.css';
import FeatureCard from "./FeatureCard";
import vector2 from "../../assets/images/vector2.svg";
import icon1 from "../../assets/images/featuresIcons/icon1.svg";
import icon2 from "../../assets/images/featuresIcons/icon2.svg";
import icon3 from "../../assets/images/featuresIcons/icon3.svg";
import icon4 from "../../assets/images/featuresIcons/icon4.svg";
import icon5 from "../../assets/images/featuresIcons/icon5.svg";
import icon6 from "../../assets/images/featuresIcons/icon6.svg";

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Находить и оставлять отзывы ',
    text: 'Возможность находить и оставлять отзывы и рейтинг исполнителю или клиенту по номеру телефона и соц. сетям. Таким образом все отзывы привязываются по номеру телефона.'
  },
  {
    id: 2,
    icon: icon2,
    title: 'Сохранность личной информации',
    text: 'Karma-N за сохранность личной информации и не передает её 3-им лицам. Нужно заранее знать номер телефона или соц. страницу, чтобы посмотреть отзывы. Не допускаются отзывы личностного характера.'
  },
  {
    id: 3,
    icon: icon3,
    title: 'Возможность отвечать на отзывы',
    text: 'Возможность отвечать на отзывы и иметь общий рейтинг, как исполнителя так и клиента.'
  },
  {
    id: 4,
    icon: icon4,
    title: 'Достоверность отзывов',
    text: 'Самое главная цель Karma-n обеспечить достоверность отзывов, поэтому на каждый отзыв имеется возможность оставить жалобу. Так же будет осуществлен контроль за накруткой отзывов и рейтингом.'
  },
  {
    id: 5,
    icon: icon5,
    title: 'Оповещение смс или Email',
    text: 'Для быстрого реагирования на отзывы и ответы к ним, осуществлена Еmail рассылка зарегистрированным пользователям и смс оповещение не зарегистрированным.'
  },
  {
    id: 6,
    icon: icon6,
    title: 'Делитесь QR-кодом',
    text: 'Делитесь своей персональной ссылкой или QR-код с клиентами для фидбэка. Так же для продвижения оставления отзывов имеются агитационные материалы для оффлайн бизнеса (наклейки, буклеты)'
  },

]

const FeaturesSection = () => {

  return (
    <>
      <section className={styles.features_section}>
        <div className={styles.container}>
          <img className={styles.bg_img} src={vector2} alt="vector"/>
          <h2>Основной функционал</h2>

          <div className={styles.features_section_row}>
            {data.map((item, index) => {return index<3 && (<FeatureCard key={index} data={item} number={index+1}/>)})}
          </div>
          <div className={styles.features_section_row}>
            {data.map((item, index) => {return index>=3 && (<FeatureCard key={index} data={item} number={index+1}/>)
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturesSection;