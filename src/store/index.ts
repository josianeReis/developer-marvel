import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/auth';
import todoSlice from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    auth: authSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
