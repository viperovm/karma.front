import React from 'react';
import styles from './Breadcrumbs.module.css'
import {Link} from "react-router-dom";

const Breadcrumbs = ({current}) => {

  return (
    <>
      <div className={styles.breadcrumbs}>
        <div className="container">
          <div className={styles.content}>
            <span><Link to='/'>
          главная
        </Link> / {current}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;