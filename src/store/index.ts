import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import charactersSlice from './slices/characters';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    characters: charactersSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
