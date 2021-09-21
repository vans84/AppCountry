import React, { useContext,useState } from 'react';
import Country from '../Country/Country.js';
import { CountryContext } from '../../context/GlobalState';
import styles from './Main.module.css';
import SearchCountry from '../searchCountry/searchCountry.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';


const Main = () => {
  const { countries } = useContext(CountryContext);
  const [region,setRegion]=useState('All')
  const [search,setSearch]=useState('')

  const ApplyState=(searchValue)=>{
    setSearch(searchValue)
  }

  const ApplyRegion=(newRegion)=>{
    setRegion(newRegion)
  }

  return countries ? (
    <React.Fragment>
            <div className={styles.navBottom}>
              <SearchCountry clickFunction={ApplyState} placeHolderText={`Search for a country...`}/>
              <FilterButton clickFunction={ApplyRegion} selectedRegion={region}/>
            </div>
      <main className={styles.main}>

        {countries.filter((country)=> (region==='All' || country.region === region) && country.name.includes(search)).map((country) => {
          return (
            <Country
              alpha3Code={country.alpha3Code}
              countryName={country.name}
              countryFlag={country.flag}
              countryPopulation={country.population}
              countryRegion={country.region}
              countryCapital={country.capital}
              topLevelDomain={country.topLevelDomain}
              nativeName={country.nativeName}
              subregion={country.subregion}
              borders={country.borders}
              currencies={country.currencies}
              languages={country.languages}
              key={country.alpha3Code}
            />
          );
        })}
      </main>
    </React.Fragment>
  ) : (
    <div> No Countries to list </div>
  );
};
export default Main;