import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  id: string | null;
  isLoggedIn: boolean;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  id: null,
  isLoggedIn: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ id: string; token: string }>) {
      state.id = action.payload.id; 
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.id = null;
      state.isLoggedIn = false;
      state.token = null;
      state.error = action.payload;
    },
    logout(state) {
      state.id = null; 
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;