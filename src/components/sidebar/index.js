import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchCountry from '../searchCountry/searchCountry.js';
import style from './sidebar.module.css';



const Sidebar = () => {
	const favorites = useSelector(state => state.favorites);
	const dispatch = useDispatch();

	const [search,setSearch]=useState('')

	const ApplyState=(searchValue)=>{
	  setSearch(searchValue)
	}

	function deleteItem(favorite) {
		dispatch({
			type: 'favorite/removeFavorite',
			payload: favorite.alpha3Code,
		});
	}

	return (
		<div className="SidebarSearch">

		<SearchCountry clickFunction={ApplyState} placeHolderText={`Search for a favorite...`}/>

		<div className={style.root}>
			{favorites.filter((country)=> country.countryName.includes(search)).map(favorite => <div key={favorite.alpha3Code}>
				<img src={favorite.countryFlag} alt={`${favorite.countryName} flag`} style={{ width: 100, height: 100, objectFit: 'contain' }}></img>
				<p>{favorite.countryName}</p>
				<button onClick={() => deleteItem(favorite)}>Delete</button>
			</div>)}
		</div>
		</div>
	
	)
 }
export default Sidebar;