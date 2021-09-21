import React from 'react';
import styles from '../searchCountry/searchCountry.module.css';
import SearchIcon from '../Icons/SearchIcon.js';
import { useDispatch } from 'react-redux';



const SearchFavorite= () => {
  const dispatch = useDispatch();

  	function searchfavorite(e) {
		dispatch({
			type: 'favorite/searchFavorite',
			payload:  e.target.value ,
		});
	}


  return (
    <React.Fragment>
      <div className={styles.searchBar}>
        <form onSubmit={(e) => e.preventDefault()}>
          {' '}
          <SearchIcon className={styles.SearchIcon} />
          <input
            onChange={(e) => searchfavorite(e)}
            style={styles}
            type='text'
            name='search'
            placeholder={`Search for a favorites...`}
            autoComplete='off'
          />
        </form>
      </div>
    </React.Fragment>
  );
};
export default SearchFavorite;