import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/auth';
import charactersSlice from '../features/characters';
import todoSlice from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    auth: authSlice,
    characters: charactersSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
