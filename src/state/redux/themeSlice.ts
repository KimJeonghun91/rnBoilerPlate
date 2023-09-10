import { createSlice } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

const initialState: { mode: ThemeMode } = { mode: 'light' };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export type ThemeSliceType = ReturnType<typeof themeSlice.reducer>;
