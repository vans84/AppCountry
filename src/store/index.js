import { configureStore } from '@reduxjs/toolkit'

import favoritesReducer from './components/Favorites/reducer';

const store = configureStore({ reducer: { favorites: favoritesReducer } })

export default store;