const initialState = {
  loading: false,
  games: [],
  error: ''
};

const games = (state = initialState, action) => {
  switch(action.type) {
    case 'START_FETCH_GAMES': {
      return {
        ...state,
        loading: true
      }
    }
    case 'FETCH_SUCCES_GAMES': {
      return {
        ...state,
        loading: false,
        games: action.games,
        error: ''
      }
    }
    case 'FETCH_ERROR_GAMES': {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default:
      return state;
  }
}

export default games;
