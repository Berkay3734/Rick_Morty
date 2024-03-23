import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    favoriteCharacters: [],
  },
  reducers: {
    toggleFavoriteCharacter: (state, action) => {
      const index = state.favoriteCharacters.indexOf(action.payload);
      if (index >= 0) {
        state.favoriteCharacters.splice(index, 1);
      } else {
        state.favoriteCharacters.push(action.payload);
      }
    },
  },
});
export const {toggleFavoriteCharacter} = userSlice.actions;

export default userSlice.reducer;
