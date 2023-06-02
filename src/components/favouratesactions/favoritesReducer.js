// favoritesReducer.js
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_MOVIES,
} from "./actionTypes";

const initialState = {
  favorites: [],
  movies: [],
  language: 'en'
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== action.payload),
      };
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
