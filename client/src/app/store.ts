import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import userReducer from '../features/user/userSlice';
import { api } from "../features/api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
});
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
