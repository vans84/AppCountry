import { createReducer } from '@reduxjs/toolkit';
import { addFavorite, removeFavorite, searchFavorite } from '../../../modules/favorites/actions';


const cart = createReducer([], {
  [searchFavorite]: (state, action) => {
    const { payload } = action; 
    return state.filter(elem => elem.countryName.toUpperCase().includes(payload.toUpperCase()));
 },
 [addFavorite]: (state, action) => {
   const { payload } = action;
   const id = payload.alpha3Code;

   const FavoriteExists = state.find(country => country.alpha3Code === id);

   state.forEach(elem => {
     console.log(elem);
   })


   if (FavoriteExists) {
    FavoriteExists.amount = FavoriteExists.amount + 1;
   } else {
     payload.amount = 1;
     state.push(payload);
   }
 },
  [removeFavorite]: (state, action) => {
   const productIndex = state.findIndex(country => country.alpha3Code === action.payload);
   if (productIndex >= 0) {
     state.splice(productIndex, 1);
   }
 
   return state;
 },
});
 
export default cart