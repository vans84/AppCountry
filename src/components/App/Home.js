import React from 'react';
import styles from './App.module.css';
import Navbar from '../Navbar/Navbar.js';

import Main from '../Main/Main.js';
import Sidebar from '../sidebar';

const Home = ({ ...props }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Sidebar />
        <div>
          <Navbar {...props} />
          <div className={styles.container}>
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;