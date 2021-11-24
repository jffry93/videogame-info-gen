const initialState = { game: {} };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
