import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  publicKey: string;
  privateKey: string;
}

const initialState: AuthState = {
  publicKey: '',
  privateKey: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { payload } = action;
      state.publicKey = payload.publicKey;
      state.privateKey = payload.privateKey;
    }
  }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
