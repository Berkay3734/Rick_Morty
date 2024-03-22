import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    favoriteCharacters: [],
  },
  reducers: {
    addFavoriteCharacter: (state, action) => {
      state.favoriteCharacters.push(action.payload);
    },
  },
});

export const {addFavoriteCharacter} = userSlice.actions;

export default userSlice.reducer;
