//THIS ACTION COLLECTS THE GAME DATA FROM THE API WITH AXIOS

import axios from 'axios';
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGamesURL,
} from '../api';

//ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGamesURL(game_name));
  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchGames.data.results,
    },
  });
};
