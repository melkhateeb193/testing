// favoritesActions.js
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES , SET_MOVIES } from "./actionTypes";
import axios from "axios";

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});


export const fetchMovies = (searchTerm, currentPage) => {
  return (dispatch) => {
    let url = searchTerm
      ? `https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${searchTerm}&page=${currentPage}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${currentPage}`;

    axios
      .get(url)
      .then((res) => {
        dispatch(setMovies(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
