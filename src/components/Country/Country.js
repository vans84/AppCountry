import React from 'react';
import PropTypes from 'prop-types';
import styles from './Country.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Country = ({
  alpha3Code,
  countryFlag,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  const dispatch = useDispatch();

  function addFavorite(event) {
    event.preventDefault();
    dispatch({
      type: 'favorite/addFavorite', payload: {
        alpha3Code,
        countryFlag,
        countryName,
        amount: 1
      }
    });
  }

  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `/${alpha3Code}`,
        }}
      >
        <section id={alpha3Code}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <img src={countryFlag} alt={`${countryName} flag`}></img>
            </div>
            <div className={styles.cardBody}>
              <h3>{countryName}</h3>
              <ul>
                <li>
                  <strong>Population: </strong>
                  {countryPopulation.toLocaleString()}
                </li>
                <li>
                  <strong>Capital: </strong>
                  {countryCapital}
                </li>
                <li>
                  <strong>Region: </strong>
                  {countryRegion}
                </li>
              </ul>
              <button onClick={addFavorite}>
                <img src="./image/heart-icon.png" alt="Add Favorite" style={{ width: 25, height: 25 }} />
              </button>
            </div>
          </div>
        </section>
      </Link>
    </React.Fragment>
  )
};

Country.propTypes = {
  alpha3Code: PropTypes.string.isRequired,
  countryFlag: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  countryPopulation: PropTypes.number.isRequired,
  countryRegion: PropTypes.string.isRequired,
  countryCapital: PropTypes.string.isRequired,
};


export default Country;