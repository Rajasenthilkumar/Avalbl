import Env from 'services/Env';

export function isLoggedIn(state: any) {
  return {
    type: 'IS_LOGGED_IN',
    payload: state,
  };
}

export function userAccessToken(state: any) {
  return {
    type: 'USER_ACCESS_TOKEN',
    payload: state.accessToken,
  };
}

export function userRefreshToken(state: any) {
  return {
    type: 'USER_REFRESH_TOKEN',
    payload: state.refreshToken,
  };
}

export function refreshTokenGenrate(accessToken: any, refresh_token: any) {
  const refToken = {
    token: refresh_token,
  };

  return async (dispatch: any) => {
    try {
      const reGenerateToken = Env.post(`/login/refreshtoken`, refToken, accessToken);
      reGenerateToken
        .then((response) => {
          if (response.status === 200) {
            const { accessToken } = response.data.data;
            // console.log('ACCC', accessToken);
            // console.log('REFFF', refreshToken);
            dispatch(userAccessToken({ accessToken: accessToken }));
            setTimeout(() => {
              dispatch(refreshTokenGenrate(accessToken, refresh_token));
            }, 3540000);
          }
        })
        .catch((error) => {
          console.log('Error', error);
        });
    } catch (error) {
      // Handle error, e.g., redirect to login page
      // You might want to dispatch an action to handle the logout state
      // dispatch(logout());
    }
  };
}
