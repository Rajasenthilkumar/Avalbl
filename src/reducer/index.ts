const initialState = {
  isLoggedIn: false,
  userAccessToken: null,
  userRefreshToken: null,
};

const appReducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case 'IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case 'USER_ACCESS_TOKEN':
      return {
        ...state,
        userAccessToken: action.payload,
      };
    case 'USER_REFRESH_TOKEN':
      return {
        ...state,
        userRefreshToken: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
