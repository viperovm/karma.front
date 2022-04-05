import React from 'react';
import styles from './AccountLayout.module.css';
import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "../../layouts/Breadcrumbs";

const AccountLayout = ({children, page_name}) => {

  return (
    <>
      <MainLayout>
        <div className={styles.account_background}>
          <Breadcrumbs current={page_name}/>
          <div className="container">
            <main className={styles.account_main}>
              {children}
            </main>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default AccountLayout;