import { createSlice } from '@reduxjs/toolkit';
import * as IF from '../../utils/InterFace';

const initialState: IF.IThemeState = { mode: 'light' };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export type ThemeSliceType = ReturnType<typeof themeSlice.reducer>;
