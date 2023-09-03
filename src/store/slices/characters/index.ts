import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// TODO: move to API file
axios.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (auth && auth.privateKey && auth.publicKey) {
    config.params = {
      apikey: auth.publicKey,
      ts: '1',
      hash: auth.hashValue
    };
  }
  return config;
});

// TODO: improve with API function
export const fetchCharacters = createAsyncThunk(
  'characters/charactersListLoading',

  async () => {
    const server = `https://gateway.marvel.com/v1/public/characters?limit=20&offset=0`;

    const fetchData = await axios({
      method: 'get',
      url: server,
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      if (response.status !== 200) {
        console.error(':( Error, no fetched data');
        return {};
      } else {
        const message = ':) Success, fetched data';
        console.log('%c' + message);
        return {
          data: response.data.data.results,
          total: response.data.data.total,
          count: response.data.data.count
        };
      }
    });

    return fetchData;
  }
);

const initialState = {
  characters: {
    status: 'idle',
    data: [],
    error: {}
  }
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending.type]: (state) => {
      state.characters = {
        status: 'loading',
        data: [],
        error: {}
      };
    },
    [fetchCharacters.fulfilled.type]: (state, action) => {
      state.characters = {
        status: 'success',
        ...action.payload
      };
    },
    [fetchCharacters.rejected.type]: (state, action) => {
      state.characters = {
        status: 'error',
        data: [],
        error: action.payload
      };
    }
  }
});

export default charactersSlice.reducer;
