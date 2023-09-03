/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacters, getComicsByCharacterId } from '../../../services';

interface initialStateInterface {
  loading: boolean;
  data: any[];
  error?: any;
  total?: number;
  count?: number;
  offset?: number;
}

const initialState: initialStateInterface = {
  loading: false,
  data: []
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({ limit, offset }: any) => {
    return await getCharacters({ limit, offset });
  }
);

export const fetchComicsByCharacterId = createAsyncThunk(
  'characters/fetchComicsByCharacter',
  async (id: any) => {
    return await getComicsByCharacterId(id);
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        const filteredCharacters = action.payload.data.map((character) => ({
          id: character.id,
          name: character.name,
          description: character.description,
          lastUpdate: character.modified,
          thumbnail: character.thumbnail
        }));

        return {
          ...state,
          ...action.payload,
          data: filteredCharacters
        };
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchComicsByCharacterId.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComicsByCharacterId.fulfilled, (state, action) => {
        // TODO: export this logic to a helper function
        const { characterId, results: comics } = action.payload;
        const updatedCharacters = state.data.map((character) => {
          if (character.id === characterId) {
            return {
              ...character,
              comics
            };
          }
          return character;
        });

        return {
          ...state,
          loading: false,
          data: updatedCharacters
        } as any;
      })
      .addCase(fetchComicsByCharacterId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default charactersSlice.reducer;
