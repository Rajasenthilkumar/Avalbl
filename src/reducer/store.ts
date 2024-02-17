import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import appReducer from './index';
// import RootState from './index';

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = [thunk];

    return getDefaultMiddleware({
      thunk: middleware as any,
    });
  },
});

export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, null, any>;
// export type RootState = ReturnType<typeof store.getState>;

export default store;
