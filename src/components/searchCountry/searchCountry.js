import React from 'react';
import styles from '../searchCountry/searchCountry.module.css';
import SearchIcon from '../Icons/SearchIcon.js';

const SearchCountry = (props) => {

  return (
    <React.Fragment>
      <div className={styles.searchBar}>
        <form onSubmit={(e) => e.preventDefault()}>
          {' '}
          <SearchIcon className={styles.SearchIcon} />
          <input
            onChange={(e) => {
              props.clickFunction(e.target.value)
            }}
            style={styles}
            type='text'
            name='search'
            placeholder={props.placeHolderText}
            autoComplete='off'
          />
        </form>
      </div>
    </React.Fragment>
  );
};
export default SearchCountry;