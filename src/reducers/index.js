import { combineReducers } from 'redux';
import fetchGames from './fetchGames';

const allReducers = combineReducers({
  fetchGames
});

export default allReducers;
