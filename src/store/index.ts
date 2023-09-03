import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/auth';
import charactersSlice from '../features/characters';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    characters: charactersSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
