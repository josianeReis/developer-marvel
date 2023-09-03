import { createSlice } from '@reduxjs/toolkit';
import md5 from 'md5';

// TODO: move to types file
interface UserAuth {
  privateKey: string;
  publicKey: string;
}

interface Auth extends UserAuth {
  hash: string;
}
const initialState: Auth = {
  publicKey: '',
  privateKey: '',
  hash: ''
};

export const generateHashValue = ({
  privateKey,
  publicKey
}: UserAuth): string => {
  return md5(`1${privateKey}${publicKey}`);
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { payload } = action;
      const { publicKey, privateKey } = payload;
      const hashValue = generateHashValue({ privateKey, publicKey });

      localStorage.setItem('auth', JSON.stringify({ ...payload, hashValue }));
      state.publicKey = publicKey;
      state.privateKey = privateKey;
      state.hash = hashValue;
    }
  }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
