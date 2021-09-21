import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Navbar = ({ themeValue, handleThemeChange }) => {
  const history = useHistory();
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navBar}>
        <Link to={'/'} onClick={() => history.push('/')}>
          Where in the world?
        </Link>
      </nav>
    </div>
  );
};


export default Navbar;