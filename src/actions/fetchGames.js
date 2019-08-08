import { urlApi } from '../constant';

export const startFetchGames = () => ({
  type: 'START_FETCH_GAMES'
});

export const successFetchGames = (games) => ({
  type: 'FETCH_SUCCES_GAMES',
  games
})

export const errorFetchGames = error => ({
  type: 'FETCH_ERROR,GAMES',
  error
})

export const asyncFetchGames = () => (dispatch) => {
  dispatch(startFetchGames());
  fetch(`${urlApi}`)
  .then(res => res.json())
  .then(games => {
    dispatch(successFetchGames(games));
  })
  .catch(() => {
    dispatch(errorFetchGames('Erreur lors du chargement'));
  })
};