import React from 'react';
import styles from './FilterButton.module.css';
import ArrowDown from '../Icons/ArrowDown';


const FilterButton = (props) => {
  return (
    <div className={styles.filterContent}>
      <div className={styles.dropdown}>
        <button>
          Filtered by {props.selectedRegion} <ArrowDown className={styles.ArrowDown} />
        </button>
        <div className={styles.dropdownContent}>
          <ul
            onClick={(e) =>
              props.clickFunction(e.target.textContent)
            }
          >
            <li>All</li>
            <li>Africa</li>
            <li>Americas</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div> 
      </div>
    </div>
  );
   }
    

export default FilterButton;