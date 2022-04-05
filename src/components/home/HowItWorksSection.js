import React from 'react';
import styles from './HowItWorksSection.module.css';
import vector1 from "../../assets/images/vector1.svg";

const HowItWorksSection = () => {
  return (
    <>
      <section className={styles.how_it_works_section}>
        <div className="container">
          <h2>КАК ЭТО РАБОТАЕТ?</h2>
          <div className={styles.how_it_works_section_row}>
            <div className={styles.how_it_works_section_col}>
              <img src={vector1} alt="background"/>
              <iframe  src="https://www.youtube.com/embed/IZGNcSuwBZs"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
            <div className={styles.how_it_works_section_col}>
              <h3>Почему это актуально именно сейчас?</h3>
              <p>В быстро развивающем мире, где люди чувствуя уверенность и приобретенный опыт работая по найму, начинают работать на себя, либо ищут подработку. Но трудно начинать этот бизнес не зная своего клиента, а клиенту сложно доверится и выбрать надежного исполнителя. Переходя с одного сервиса на другой сервис по поиску клиентов, исполнитель оставляет свой рейтинг и отзывы на этой площадке.</p>
            </div>
          </div>
          <div className={styles.how_it_works_section_row}>
            <div className={styles.how_it_works_section_col}>
              <h3>Зачем нужны отзывы</h3>
              <p>Заказывая услугу или посещая ресторан, много ли из вас смотрит сначала отзывы и рейтинг заведения на 2ГИС,Google или Яндекс картах? Я думаю, что многие, тогда почему нет площадок-отзывов для людей, кто делает бизнес самостоятельно называемый фрилансом, самозанятым?</p>
            </div>
            <div className={styles.how_it_works_section_col}>
              <h3>Для чего нужен сервис Karma-N</h3>
              <p>Чтобы было легче начать и продвигать свои
                бизнес - фриланса(свободного работника) был создан <a href="/">проект Karma-N</a> - Система рейтинга исполнителей услуг
                и клиентов по номеру телефона и соц. сетям.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;