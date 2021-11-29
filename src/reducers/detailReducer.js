const initialState = {};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        gameData: action.payload.game,
        screenshot: action.payload.screen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
