import { createAction } from '@reduxjs/toolkit';


export const addFavorite = createAction('favorite/addFavorite');
export const searchFavorite = createAction('favorite/searchFavorite');
export const removeFavorite = createAction('favorite/removeFavorite');
